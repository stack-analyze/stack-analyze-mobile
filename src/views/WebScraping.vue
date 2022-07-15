<template>
  <ion-page>
    <Toolbar />
    <ion-content>
      <ion-item>
          <ion-label position="floating" color="secondary">
            Enter a url from scrape
          </ion-label>
          <ion-input
            type="url"
            v-model="linkScraping"
            :clearInput="true"
            autocomplete="off"
            required
          >
          </ion-input>
        </ion-item>
        <ion-item>
          <ion-label color="secondary">scraping elements</ion-label>
        <ion-select
          v-model="optionScraping"
          placeholder="enter a selector"
          interface="action-sheet"
          :interface-options="popoverOptions"
          cancel-text="exit options"
        >
          <ion-select-option value="title">title</ion-select-option>
          <ion-select-option value="metadata">metadata</ion-select-option>
          <ion-select-option value="images">images</ion-select-option>
          <ion-select-option value="headings">headings</ion-select-option>
          <ion-select-option value="links">links</ion-select-option>
          <ion-select-option value="text">text</ion-select-option>
        </ion-select>
        </ion-item>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-button 
              fill="outline" 
              expand="block" 
              @click="startScraping" 
              color="secondary"
              :disabled="validate"
            >
              start
            </ion-button>
          </ion-col>
          <ion-col size="6">
            <ion-button 
              fill="outline" 
              expand="block" 
              @click="resetScraping" 
              color="danger"
              :disabled="resetStatus"
            >
              reset
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-item>
        <pre class="shell shell-msg" v-if="resultScraping === ''">wait scraping results</pre>
        <pre class="shell shell-results" v-else>{{resultScraping}}</pre>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import {
  IonPage,
  IonContent,
  IonLabel,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";

import axios from "axios";

import Toolbar from "@/components/Toolbar.vue";

import presentAlert from "@/ts/alertMsg";
import { regex } from "@/ts/data";

interface hashFunctions {
  [key: string]: () => void;
}

const linkScraping = ref("");
const optionScraping = ref("");
const resultScraping = ref<string | any[]>("");

const validate = computed(() => (linkScraping.value.match(regex) ? false : true));
const resetStatus = computed(() => resultScraping.value === "" ? true : false)

const parser = new DOMParser();

const startScraping = async () => {
  try {
    const { data } = await axios.get("https://api-scraping.vercel.app/api/scraping", {
      params: {
        url: linkScraping.value
      }
    });

    const page = parser.parseFromString(data, "text/html");

    const scrape: hashFunctions = {
      title() {
        resultScraping.value = page.title;
      },
      metadata() {
        resultScraping.value = [...page.querySelectorAll('meta')]
          .filter(({ name }) => name !== '')
          .map(item => ({
            metaType: item.name,
            metaValue: item.content
          }));
      },
      images() {
        const results = [...page.querySelectorAll("img")].map((item) => {
              const imageURL = item.src.replace(location.origin, '')
              return {
                imageURL,
                imageTitle: item.alt
              };
        });
        
        resultScraping.value = results.length === 0 
          ? 'no found images' : results;
      },
      headings() {
        const results = [...page.querySelectorAll('h1, h2, h3, h4, h5, h6')]
          .map(item => ({
            headingTag: item.tagName,
            text: item.textContent
          }));
        
        resultScraping.value = results.length === 0 
          ? 'no found h1 to h6 tags' : results;
      },
      links() {
        const results = [...page.querySelectorAll('a')]
          .filter((item) => item.href !== "")
          .map(item => item.href.replaceAll(location.origin, ''));

        results.shift();

        resultScraping.value = results.length === 0 
          ? 'no found links' : results;
      },
      cites() {
        const results = [...page.querySelectorAll('q, blockquote')]
          .map(item => ({
            citeTag: item.tagName,
            citeLink: item.cite,
            citeText: item.textContent
          }));

        resultScraping.value = results.length === 0 
          ? "no found q and/or blockquote tags" : results;
      },
      table_heading() {
        const results = [...page.querySelectorAll('th')].map((item) => ({
          // headingRow: i++,
          text: item.textContent
        }));

        resultScraping.value = results.length === 0
          ? "no found th tags" : results;
      },
      table_data() {
        const results = [...page.querySelectorAll('td')]
          .map(item => item.textContent)

        resultScraping.value = results.length === 0
          ? "no found td tags" : results;
      }
    };

    optionScraping.value === '' 
      ? presentAlert("value is required", "required value", "please value")
      : scrape[optionScraping.value]();
  } catch(err: any) {
    presentAlert(err, "web scraping error", "no resolve scraping results");
    console.error(err)
  }
  
  optionScraping.value = ''
  linkScraping.value = ''
}

const resetScraping = () => {
  resultScraping.value = "";
};

const popoverOptions: any = {
  cssClass: "popover-options",
  mode: "ios",
  showBackdrop: true,
  backdropDismiss: false,
  keyboardClose: true
};
</script>

<style>
.popover-options {
  --backdrop-opacity: 0.5;
  --box-shadow: 10px;
  --button-color: var(--ion-color-secondary);
}

ion-select {
  --placeholder-color: var(--ion-color-secondary);
}

.shell {
    box-shadow: 6px 10px rgba(255, 255, 255, 0.3);
    outline: 1px solid #fff;
    width: 100%;
    height: 60vh;
    overflow: auto;
    margin: 4px;
    font-size: 1.2em;
    
  }

  .shell-msg {
    color: #0ff;
  }

  .shell-results {
    color: #fff;
  }
  .shell-results::before {
    content: "results scraping: \A";
    color: #0f0;
  }

  .shell::after {
    content: '_';
    color: #fff;
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
