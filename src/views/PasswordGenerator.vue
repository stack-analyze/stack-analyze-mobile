<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <ion-item>
        <ion-button
              slot="start"
              color="secondary"
              fill="outline"
              expand="block"
              size="large"
              @click="genPassword"
            >
              <ion-icon slot="icon-only" :icon="diceOutline" />
            </ion-button>
        <ion-label class="ion-text-center" color="secondary">
          {{ password || "no password" }}
        </ion-label>
        <ion-button
          slot="end"
          color="danger"
          fill="outline"
          expand="block"
          size="large"
          @click="resetPassword"
          :disabled="isEmptyPassword"
        >
          <ion-icon slot="icon-only" :icon="refreshOutline" />
        </ion-button>
      </ion-item>
      <ion-button
        color="success"
        fill="outline"
        expand="block"
        @click="copyPassword"
        :disabled="isEmptyPassword"
      >
        <ion-icon slot="start" :icon="copyOutline" />
        copy password
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// vue imports
import { ref, computed } from "vue";

// ionic components
import { 
  IonPage,
  IonContent, 
  IonItem,
  IonButton,
  IonLabel,
  IonIcon
} from "@ionic/vue";

// icons
import { diceOutline, refreshOutline, copyOutline } from "ionicons/icons";

// stack toolbar component
import StackToolbar from "@/components/Toolbar.vue";

// toast message
import openToast from "@/scripts/warning-message";

// state
const password = ref("");

// computers
const isEmptyPassword = computed(() => !password.value);

// methods
const genPassword = (): void => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length = 12;
  
  let retVal = "";
  
  for (let i = 0, n = chars.length; i < length; ++i) {
  retVal += chars.charAt(Math.floor(Math.random() * n));
  }
  
  password.value = retVal;
}

const copyPassword = async () => {
  await navigator.clipboard.writeText(password.value);
  openToast("password is Copied", "success");
};

const resetPassword = () => (password.value = '');
</script>