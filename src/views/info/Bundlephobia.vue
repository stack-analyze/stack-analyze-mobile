<script setup lang="ts">
import { ref, computed } from 'vue';
import axios, { AxiosError } from 'axios';
import { logoGithub } from 'ionicons/icons'

import { BundlePhobia } from '@/interfaces/BundlephobiaInterface';

import { presentAlert } from '@/scripts/alertMsg';
import { openToast } from '@/scripts/warning-message';

import {
  IonPage, IonContent, IonGrid, IonItem, IonBadge, IonButton, IonIcon,
  IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle,
} from '@ionic/vue'
import StackToolbar from '@/components/main/StackToolbar.vue';
import StackInput from '@/components/main/StackInput.vue';
import StackButtons from '@/components/main/StackButtons.vue';

// states
const pkgName = ref("");
const pkgInfo = ref<Partial<BundlePhobia>>({});

// computers
const isEmptyPkgInfo = computed(
  () => Object.values(pkgInfo.value).length === 0
);

const isEmptyRepoLink = computed(() => !pkgInfo.value.repository)

// methods
const kilobyteConvert = (size: number) => (size < 1024 ? `${size} B` : `${(size / 1024).toFixed(2)} KB`);

const getPkgInfo = async () => {
  if (!pkgName.value) {
    return openToast("this field is required", "warning");
  }

  try {
    const { data } = await axios.get("https://bundlephobia.com/api/size", {
      params: { package: pkgName.value }
    });

    pkgInfo.value = data;
  } catch (err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error bundlephobia info',
      subHeader: 'problem to req api'
    });
  }

  pkgName.value = "";
};

const clearPkgInfo = () => {
  pkgInfo.value = {};
};
</script>

<template>
  <ion-page>
    <stack-toolbar />

    <ion-content>
      <stack-input label-txt="enter a npm pkg" input-type="text" v-model="pkgName" />

      <ion-grid>
        <stack-buttons init-btn-name="get pkg info" :init-validate="false" @init-function="getPkgInfo"
          clear-btn-name="clear pkg info" :clear-validate="isEmptyPkgInfo" @clear-function="clearPkgInfo" />
      </ion-grid>

      <ion-card mode="ios">
        <ion-card-header mode="md">
          <ion-card-title>
            {{ pkgInfo.name || "no package" }}
          </ion-card-title>
          <ion-card-subtitle>
            version: {{ pkgInfo.version || "0.0.0" }}
          </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content mode="md">
          <ion-item>
            {{ pkgInfo.description || "no description" }}
          </ion-item>
          <ion-item>
            <ion-badge slot="start" color="dark">
              size: {{ kilobyteConvert(pkgInfo.size || 0) }}
            </ion-badge>

            <ion-badge slot="end" color="light">
              gzip: {{ kilobyteConvert(pkgInfo.gzip || 0) }}
            </ion-badge>
          </ion-item>
          <ion-button fill="outline" expand="block" :disabled="isEmptyRepoLink" :href="pkgInfo.repository"
            target="_blank">
            <ion-icon :icon="logoGithub" slot="start" />
            {{ pkgInfo.name || "no repo" }}
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
