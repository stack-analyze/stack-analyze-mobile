<script setup lang="ts">
import { ref, computed } from 'vue';
import { type AxiosError } from 'axios';

import {
	IonPage, IonContent, IonGrid, IonItem
} from '@ionic/vue';

import { type CssValidator } from '@/interfaces/CssValidatorInterface';
import { useHttp } from '@/composables/webComposable';
import { presentAlert } from '@/scripts/alertMsg';
import { startWithHttp } from '@/scripts/data';
import { webToolsApi } from '@/api/apiExtras';
import { openToast } from '@/scripts/warning-message';

import StackButtons from '@/components/main/StackButtons.vue';
import StackInput from '@/components/main/StackInput.vue';
import StackToolbar from '@/components/main/StackToolbar.vue';

// composable
const { validateWebsite, website } = useHttp();

// states
const resultValidator = ref<string | CssValidator>("")

// computers
const isEmptyResults = computed(() => !resultValidator.value)

// methods
const startValidator = async () => {
	if (!website.value.match(startWithHttp)) {
    return openToast("http or https:// is required", "warning");
  }
	
	try {
		const { data } = await webToolsApi.get("/css-validator", {
			params: { url: website.value }
		})
		
		resultValidator.value = data
	} catch(err) {
		presentAlert({
      msg: (err as AxiosError).message,
      header: "Error css validator",
      subHeader: "problem to validate css",
    });
	}
	
	website.value = ""
}

const clearValidator = () => {
	resultValidator.value = ""
}
</script>

<template>
	<ion-page>
		<stack-toolbar />
	
		<ion-content>
			<stack-input v-model="website" input-type="url" />
		
			<ion-grid>
      	<stack-buttons
        	init-btn-name="start validator"
        	:init-validate="validateWebsite"
        	@init-function="startValidator"
        	clear-btn-name="reset validator"
        	:clear-validate="isEmptyResults"
        	@clear-function="clearValidator"
      	/>
    	</ion-grid>
    
    	<ion-item>
    		<pre class="shell stack-result shell-results">{{ resultValidator }}</pre>
    	</ion-item>
    
    	<ion-item :class="$style.warn">
    		some website long charge launch errors
    	</ion-item>
		</ion-content>
	</ion-page>
</template>

<style module>
.warn {
	--color: var(--ion-color-danger);
}
</style>
