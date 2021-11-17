<template>
  <ion-page>
  <ion-content>
    <Toolbar />
      <ion-grid>
        <ion-row>
          <ion-col size-md="4" offset-md="4" size-sm="12">
            <ion-card mode="ios">
              <ion-card-header>
                <ion-img
                  src="assets/hardware-info/cpu.svg"
                  alt="hardware info img"
                >
                </ion-img>
              </ion-card-header>
              <ion-card-content mode="md">
                <ion-card-title >{{ modelInfo.model }}</ion-card-title>
                <ion-card-subtitle>
                  os: {{
                    modelInfo.operatingSystem === "unknown"
                      ? "unix"
                      : modelInfo.operatingSystem
                  }}
                </ion-card-subtitle>
                <ion-grid>
                  <ion-row>
                    <ion-col size="12">
                      <ion-item>
                        <ion-label>manufacturer: {{ modelInfo.manufacturer }}</ion-label>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item >
                        <ion-label position="stacked">os version:</ion-label>
                        <ion-text>{{ modelInfo.osVersion }}</ion-text>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">platform:</ion-label>
                        <ion-text>{{ modelInfo.platform }}</ion-text>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">
                          battery status:
                        </ion-label>
                        <ion-text>
                          {{ batteryInfo.batteryLevel * 100 }} %
                        </ion-text>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">
                          network type:
                        </ion-label>
                        <ion-text>
                          {{
                            networkInfo.connectionType
                          }}
                        </ion-text>
                      </ion-item>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// vue modules
import { defineComponent, watchEffect, ref } from "vue";

// ionic modules
import {
  IonPage,
  IonContent,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonText,
} from "@ionic/vue";

// capacitor plugins
import { Device } from "@capacitor/device";
import { Network } from "@capacitor/network";

// toolbar component
import Toolbar from "@/components/Toolbar.vue";

export default defineComponent({
  name: "hardwareInformation",
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
    IonText,
    Toolbar,
  },
  setup() {
    const modelInfo = ref({});
    const batteryInfo = ref({});
    const networkInfo = ref({});

    watchEffect(async () => {
      modelInfo.value = await Device.getInfo();
      batteryInfo.value = await Device.getBatteryInfo();
      networkInfo.value = await Network.getStatus();
      
      const model = await Network.getStatus();

      console.log(model);
    });

    return {
      modelInfo,
      batteryInfo,
      networkInfo,
    };
  },
});
</script>
