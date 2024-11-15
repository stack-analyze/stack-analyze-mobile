<script lang="ts" setup>
const query = ref('');

const potterCharacters = ref<PotterCharacter[]>([]);

const isEmptyResults = computed(
  () => potterCharacters.value.length === 0
);

const getCharacters = async() => {
 if(!query.value) {
   return openToast('this field is required', 'warning');
 }
 
 try {
   const { data } = await axios.get('https://potterapi-fedeperin.vercel.app/en/characters', {
     params: { search: query.value }
   })
   
   potterCharacters.value = data
 } catch(err) {
   presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error anime search',
      subHeader: 'problem to req api'
    });
 }
 
 query.value = '';
};

const clearSearch = () => {
  potterCharacters.value = [];
};
</script>

<template>
  <ion-page>
    <stack-toolbar />
    
    <ion-content>
      <stack-input 
        v-model="query" 
        label-txt="enter a keyword to search:" 
        input-type="text" 
      />
      
      <stack-buttons
        init-btn-name="start search"
        clear-btn-name="clear search"
        :init-validate="false"
        :clear-validate="isEmptyResults"
        @init-function="getCharacters"
        @clear-function="clearSearch"
      />
      
      <ion-list v-for="character of potterCharacters">
      	<ion-item>
      		<ion-thumbnail slot="start">
      		  <ion-img 
      		    :src="character.image" 
      		    :alt="character.nickname" 
      		  />
      		</ion-thumbnail>
      		
      		<ion-label position="stacked">
      		  {{ character.fullName }} - "{{ character.nickname}}"
      		</ion-label>
      		
      		<ion-text>
      		  hogwarts house: {{ character.hogwartsHouse }}<br>
      		  interpreted by: {{ character.interpretedBy }}
      		</ion-text>
      		
      		<ion-note slot="end">
      		  {{ character.birthdate }}
      		</ion-note>
      	</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-thumbnail {
  --size: 10%;
}
</style>
