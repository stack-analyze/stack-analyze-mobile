<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>tips</ion-title>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/" :icon="home"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-text class="disabled-select" color="tertiary">
          <p>
            This page is a tutorial on how to reveal fake links of type onlyfans
            or derivatives This has lately led to more cases of fake Instagram
            profiles in order to perform scams through explicit content
            platforms. They mostly use no-code site services like wordpress.com
            (not to be confused with Wordpress CMS) and Wix, which are the most
            commonly used in this field of scams. Through these letters, I'm
            basing.
          </p>
          <ion-button
            href="https://www.instagram.com/p/CKoYlN0hgl7/"
            target="_blank"
            color="instagram"
            rel="nofollow"
            fill="outline"
            shape="round"
          >
            <ion-icon slot="start" :icon="logoInstagram"></ion-icon>
            based on instagram post
          </ion-button>
        </ion-text>
      </ion-item>
      <ion-grid fixed>
        <ion-row>
          <ion-col v-for="revealLink of revealLinks" :key="revealLink.title">
            <ion-card mode="ios" class="disabled-select">
              <ion-card-header>
                <ion-card-title>{{ revealLink.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-item lines="none" class="info-text">{{ revealLink.info }}</ion-item>
                <ion-grid>
                  <ion-row>
                    <ion-col v-for="link of revealLink.links" :key="link.title">
                      <ion-button
                        v-if="link.url.indexOf('/') !== 0"
                        :href="link.url"
                        :color="link.color"
                        target="_blank"
                        rel="nofollow"
                        fill="outline"
                        shape="round"
                      >
                        {{ link.title }}
                      </ion-button>
                      <ion-button 
                        v-else 
                        :router-link="link.url"
                        :color="link.color"
                        target="_blank"
                        rel="nofollow"
                        fill="outline"
                        shape="round"
                      >
                        {{ link.title }}
                      </ion-button>
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

<script setup lang="ts">
onIonViewWillEnter(() => {
  menuController.enable(false);
});

onIonViewWillLeave(() => {
  menuController.enable(true);
});
</script>

<style>
.disabled-select {
  user-select: none;
}

.info-text {
  --color: var(--ion-color-tertiary);
}
</style>