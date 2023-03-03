<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <stack-input 
        v-model="query" 
        label-txt="enter a anime to search:" 
        input-type="text" 
      />
      <ion-grid>
        <stack-buttons
          init-btn-name="get anime search"
          :init-validate="false"
          @init-function="getAnimeSearch"
          clear-btn-name="clear anime search"
          :clear-validate="isEmptyResults"
          @clear-function="clearAnimeSearch"
        />
        <ion-row>
          <anime-card 
            v-for="anime of animeData" 
            :key="anime.mal_id"
            :animeData="anime" 
          />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// states
const query = ref("");
const animeData = ref<Anime[]>([]);

const getAnimeSearch = async (): Promise<void> => {
  if(!query.value) {
    return openToast("this field is required", "warning");
  }
  
  try {
    const { data: animeSchema } = await animeApi.get("/anime", {
      params: { q: query.value }
    });
    
    animeData.value = animeSchema.data;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error anime search',
      subHeader: 'problem to req api'
    });
  }
  
  query.value = "";
};

const isEmptyResults = computed(() => animeData.value.length === 0);

const clearAnimeSearch = () => {
  animeData.value = []
};
</script>
