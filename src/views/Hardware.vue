<template>
  <ion-page>
    <Toolbar />
    <ion-content>
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
                <ion-card-title>{{ modelInfo.model }}</ion-card-title>
                <ion-card-subtitle>
                  {{
                    modelInfo.operatingSystem === "unknown"
                      ? "linux or unix derivate"
                      : modelInfo.operatingSystem
                  }}
                </ion-card-subtitle>
                <ion-grid>
                  <ion-row>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">os version:</ion-label>
                        <ion-text>{{ modelInfo.osVersion }}</ion-text>
                      </ion-item>
                    </ion-col>
                    <ion-col size="6">
                      <ion-item>
                        <ion-label position="stacked">manufacturer:</ion-label>
                        <ion-text>{{ modelInfo.manufacturer }}</ion-text>
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
                          charging status:
                        </ion-label>
                        <ion-text>
                          {{
                            batteryInfo.isCharging ? "charging" : "discharging"
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
import { onMounted, ref } from "vue";

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

import { Device } from "@capacitor/device";

import Toolbar from "@/components/Toolbar.vue";

export default {
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

    onMounted(async () => {
      modelInfo.value = await Device.getInfo();
      batteryInfo.value = await Device.getBatteryInfo();
    });

    return {
      modelInfo,
      batteryInfo,
    };
  },
};
</script>
