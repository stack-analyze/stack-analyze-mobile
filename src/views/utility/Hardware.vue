<script setup lang="ts">
const modelInfo = ref<Partial<DeviceInfo>>({});

const deviceLanguage = ref("");

const networkInfo = ref<Partial<ConnectionStatus>>({});

watchEffect(async () => {
  modelInfo.value = await Device.getInfo();
  networkInfo.value = await Network.getStatus();
  deviceLanguage.value = (await Device.getLanguageCode()).value;
});
</script>

<template>
  <ion-page>
    <ion-content>
      <stack-toolbar />
      
      <ion-card mode="ios" class="stack-card">
        <ion-card-header>
          <ion-img
            src="assets/hardware-info/cpu.svg"
            alt="hardware info img"
            class="hardware-img"
          />
          <ion-card-title>{{ modelInfo.model }}</ion-card-title>
          <ion-card-subtitle>
            os:
            {{
              modelInfo.operatingSystem === "unknown" ? "unix" : modelInfo.operatingSystem
            }}
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content mode="md">
          <ion-grid>
            <ion-row>
              <ion-col size="12">
                <ion-item>
                  <ion-label position="stacked">
                    webVer: {{ modelInfo.webViewVersion || "none" }}
                  </ion-label>
                  <ion-text>
                    manufacturer: {{ modelInfo.manufacturer || "no info" }}
                  </ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked">os version:</ion-label>
                  <ion-text>{{ modelInfo.osVersion }}</ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked"
                    >platform: {{ modelInfo.platform }}</ion-label
                  >
                  <ion-text>
                    device: {{ modelInfo.isVirtual ? "virtual" : "phisical" }}
                  </ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked"> device language: </ion-label>
                  <ion-text>{{ deviceLanguage }}</ion-text>
                </ion-item>
              </ion-col>
              <ion-col size="6">
                <ion-item>
                  <ion-label position="stacked"
                    >connected: {{ networkInfo.connected ? "yes" : "no" }}</ion-label
                  >
                  <ion-text> type: {{ networkInfo.connectionType }} </ion-text>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
      <ion-toast
        color="warning"
        message="the hardware information tool in some browsers works only partially or is incompatible at all."
        :icon="warningOutline"
        :duration="2000"
      >
      </ion-toast>
    </ion-content>
  </ion-page>
</template>
