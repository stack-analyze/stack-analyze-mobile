<script setup lang="ts">
// composables
const { validateWebsite, website } = useHttp();

// states
const technologies = ref<TechStack[]>([]);

// computed
const isEmptyTechnologies = computed(() => technologies.value.length === 0);

// methods
const getTechStack = async () => {
  if(!website.value.match(startWithHttp)) {
    return openToast('http or https:// is required', 'warning');
  }
  
  try {
    const { data } = await axios.get('https://stack-analyze-api.onrender.com/stack', {
      params: { url: website.value },
    });
    
    technologies.value = data;
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error tech-stack',
      subHeader: 'problem to tech-stack',
    });
  }
  
  website.value = ''
};

const clearTechStack = () => {
  technologies.value = [];
};
</script>

<template>
  <ion-page>
    <stack-toolbar />
    <ion-content>
      <stack-input v-model="website" input-type="url" />
      <ion-grid>
        <stack-buttons
          init-btn-name="start tech stack"
          :init-validate="validateWebsite"
          @init-function="getTechStack"
          clear-btn-name="clear tech stack"
          :clear-validate="isEmptyTechnologies"
          @clear-function="clearTechStack"
        />
        <ion-row>
          <stack-card v-for="app of technologies" :key="app.id" :stackData="app" />
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
