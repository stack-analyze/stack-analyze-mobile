<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-label position="floating" color="secondary">
          enter a url
        </ion-label>
        <ion-input type="url" v-model="website" :clearInput="true" autocomplete="off" />
      </ion-item>
      <ion-item>
        <ion-label color="secondary">scraping elements</ion-label>
        <ion-select class="scraping-select" placeholder="enter a selector" v-model="scrapingOpt" interface="popover"
          :interface-options="popoverOptions" :disabled="validateWebsite">
          <ion-select-option v-for="option in scrapingOptList" :value="option" :key="option">
            {{ option }}
          </ion-select-option>
        </ion-select>
      </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button @click="startScraping" :disabled="validateScraping" color="secondary" fill="outline"
              expand="block">
              start web scraping
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button @click="resetScraping" :disabled="isEmptyScraping" color="danger" fill="outline" expand="block">
              reset web scraping
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-item>
        <pre :class="['stack-result', 'shell', shellClass]">{{ 
          resultScraping || "wait scraping results" 
        }}</pre>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import axios, { AxiosError } from "axios";

// ionic components
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

// stack toolbar component
import StackToolbar from "@/components/Toolbar.vue";

import { HashFunctions, WebScraping } from "@/interfaces/WebScrapingInterface";

import { useHttp } from "@/composables/webComposable";
import presentAlert from "@/scripts/alertMsg";
import openToast from "@/scripts/warning-message";
import { startWithHttp } from "@/scripts/data";

import webToolsApi from "@/api/apiExtras"

// static params
const scrapingOptList = [
  "title", "images", "metadata", "headings",
  "tableHead", "tableData", "links", "cites"
];

// using composables
const { website, validateWebsite } = useHttp();

const resultScraping = ref<string | WebScraping[]>("");

const scrapingOpt = ref("");

// class bind
const shellClass = computed(
  () => resultScraping.value !== "" ? "shell-results" : "shell-msg"
);

// popup opts
const popoverOptions = {
  mode: "ios",
  showBackdrop: true,
  backdropDismiss: false
};

const validateScraping = computed(() => !scrapingOpt.value);

const isEmptyScraping = computed(() => !resultScraping.value);

const startScraping = async () => {
  if (!website.value.match(startWithHttp)) {
    return openToast("http or https:// is required", "warning");
  }

  const parser = new DOMParser();

  try {
    const { data } = await webToolsApi.get("/scraping", {
      params: { url: website.value }
    });

    const page = parser.parseFromString(data, "text/html");

    const scrape: HashFunctions = {
      title() {
        resultScraping.value = page.title;
      },
      metadata() {
        const metadataList = Array.from(page.querySelectorAll('meta'))

        resultScraping.value = metadataList
          .filter(({ name }) => name !== '')
          .map(item => ({
            metaType: item.name,
            metaValue: item.content
          }));
      },
      images() {
        const imageList = Array.from(page.querySelectorAll("img")).map((item) => {
          const imageURL = item.src.replace(location.origin, '')

          return {
            imageURL,
            imageTitle: item.alt
          };
        });

        resultScraping.value = imageList.length === 0
          ? 'no found images'
          : imageList;
      },
      headings() {
        const HeadingList = Array.from(page.querySelectorAll("h1, h2, h3, h4, h5, h6"))
          .map(item => ({
            headingTag: item.tagName,
            headingtext: item.textContent
          }));

        resultScraping.value = HeadingList.length === 0
          ? "no found heafing tags"
          : HeadingList;
      },
      tableHead() {
        const tableHeadingList = Array.from(page.querySelectorAll("th"))
          .map((item) => ({
            thCol: item.cellIndex,
            thData: item.textContent
          }));

        resultScraping.value = tableHeadingList.length === 0
          ? "no found th tags"
          : tableHeadingList;
      },
      tableData() {
        const tableDataList = Array.from(page.querySelectorAll("td"))
          .map((item) => {

            const parentItem = <HTMLTableRowElement>item.parentElement

            return {
              rowID: parentItem.rowIndex,
              colID: item.cellIndex,
              colData: item.textContent
            };
          });

        resultScraping.value = tableDataList.length === 0
          ? "no found table data"
          : tableDataList;
      },
      links() {
        const linkList = Array.from(page.querySelectorAll("a"))
          .filter(({ href }) => !href)
          .map(item => ({
            linkPath: item.href.replaceAll(location.origin, ''),
            linkText: item.textContent
          }));

        resultScraping.value = linkList.length === 0
          ? "no found links"
          : linkList;
      },
      cites() {
        const citesElements: NodeListOf<HTMLQuoteElement> = page.querySelectorAll('q, blockquote')

        const citeList = Array.from(citesElements)
          .map(item => ({
            citeTag: item.tagName,
            citeLink: item.cite,
            citeText: item.textContent
          }));

        resultScraping.value = citeList.length === 0
          ? "no found q and/or blockquote tags"
          : citeList;
      }
    };


    scrape[scrapingOpt.value]()
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: "Error tech-stack",
      subHeader: "problem to tech-stack"
    });
  }

  scrapingOpt.value = "";
  website.value = "";
};

const resetScraping = () => {
  resultScraping.value = "";
};
</script>
