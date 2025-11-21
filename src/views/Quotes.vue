<script setup lang="ts">

import {
  IonPage, IonContent, IonItem, IonGrid,
  IonInput, IonSelect, IonSelectOption
} from '@ionic/vue';

import { useQuote } from '@/composables/quotesComposable';
import StackToolbar from '@/components/main/StackToolbar.vue';
import StackButtons from '@/components/main/StackButtons.vue';

const placeholder = 'enter a quote for seach or leave blank in some quotes'
const {
  quotesOpts, quotesSearch, quotesSelect, isEmptyQuoteInfo,
  quoteInfo, quotesMethods
} = useQuote();

const quoteInterface = {
	backdropDismiss: false,
	mode: 'ios'
}
</script>

<template>
  <ion-page>
    <stack-toolbar />
  
    <ion-content>
      <ion-item>
        <ion-input 
          autocomplete="off" 
          color="secondary" 
          :label="placeholder"
          label-placement="floating"
          :required="quotesSelect !== 'anime'"
          v-model="quotesSearch"
        />
      </ion-item>
    
      <ion-item>
        <ion-select 
          interface="popover" 
          placeholder="select a opt"
          label="choose"
          :interface-options="quoteInterface"
          v-model="quotesSelect"
        >
          <ion-select-option 
            v-for="opt in quotesOpts"
            :value="opt"
          >{{ opt }}</ion-select-option>
        </ion-select>
      </ion-item>
    
      <ion-grid>
        <stack-buttons 
          init-btn-name="get quote info" 
          :init-validate="false"
          @init-function="quotesMethods[quotesSelect]" 
          clear-btn-name="clear quote info" 
          :clear-validate="isEmptyQuoteInfo" 
          @clear-function="quotesMethods.clearQuoteInfo" 
        />
      </ion-grid>
    
      <ion-item>
        <pre class="stack-result">{{ 
          isEmptyQuoteInfo ? 'no quote' : quoteInfo
        }}</pre>
      </ion-item>
    </ion-content>
  </ion-page>
</template>