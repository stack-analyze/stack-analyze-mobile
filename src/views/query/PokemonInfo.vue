<script setup lang="ts">
import { ref, computed } from "vue";
import { register } from 'swiper/element/bundle';

import { 
  IonicSlides, IonPage, IonContent, IonItem,
  IonInput, IonGrid, IonChip, IonCard, IonImg,
  IonCardHeader, IonCardTitle, IonCardContent,
} from "@ionic/vue";

import { type Pokemon } from "@/interfaces/PokemonInterface";
import { presentAlert } from "@/scripts/alertMsg";
import { openToast } from "@/scripts/warning-message";

import "@/pokeTypes.css";

import StackToolbar from "@/components/main/StackToolbar.vue";
import StackButtons from "@/components/main/StackButtons.vue";

interface PokemonStat {
  name: string
  color: string
  value: number
}

// states
const pokemon = ref<string | number>("");
const pokemonData = ref<Partial<Pokemon>>({});
const pokesprites = ref<string[]>([]);
const pokemonStats = ref<PokemonStat[]>([]);

// computers
const isEmptyPokeInfo = computed(
  () => Object.values(pokemonData.value).length === 0
);

// static
const statsColors = [
	"youtube", "warning", "twitch", 
	"primary", "success", "tertiary"
]

const modules = [IonicSlides];

// methods
const pokemonInfo = async () => {
  if(!pokemon.value) {
  	return openToast(
  		"pokemon name is required avoid pokemon id: 0 & negative number", 
  		"warning"
  	);
  }
  
  const pokeApi = "https://pokeapi.co/api/v2/pokemon";
  
  try {
    const data = await (
    	await fetch(`${pokeApi}/${pokemon.value}`)
    ).json() as Pokemon;
    
    pokemonData.value = data;
    pokesprites.value = Object.values(data.sprites)
    	.filter(x => typeof x === "string")
    	.toSorted();
    	
    

    data.stats.forEach(({base_stat, stat}, i) => {
    	pokemonStats.value[i] = {
    		name: stat.name,
    		color: statsColors[i],
    		value: base_stat
    	}
    })
    
    pokemonStats.value[6] = ({
			name: 'xp',
			color: 'secondary',
			value: data.base_experience
		})
  } catch(err) {
  	presentAlert({
  		msg: (err as Error).message,
  		header: "Error pokemon",
  		subHeader: "problem to req api"
  	});
  }
  
  pokemon.value = "";
};

const clearPokemonInfo = () => {
  pokemonData.value = {};
  pokesprites.value = [];
  pokemonStats.value = [];
};

register();
</script>

<template>
	<ion-page>
  	<stack-toolbar />
  	
  	<ion-content>
  		<ion-item>
      	<ion-input
      		autocomplete="off"
      		color="secondary"
      		:clear-input="true"
      		label="enter a pokemon name or id:" 
      		label-placement="floating"
      		type="text"
      		v-model.number="pokemon"
      	/>
      </ion-item>
      
      <ion-grid>
        <stack-buttons
          init-btn-name="get pokemon"
          :init-validate="false"
          @init-function="pokemonInfo"
          clear-btn-name="clear pokemon"
          :clear-validate="isEmptyPokeInfo"
          @clear-function="clearPokemonInfo"
        />
      </ion-grid>
      
      <ion-card mode="ios">
        <swiper-container 
        	:modules="modules"
        	:loop="true"
        >
          <swiper-slide 
          	v-for="(sprite, i) in pokesprites"
          	:key="i"
          >
            <ion-img 
          		:src="sprite"
          		class="pokemon"
          		alt="default sprite" 
          	/>
          </swiper-slide>
        </swiper-container>
        
        <ion-card-header 
        	class="ion-align-items-center" 
        	mode="md"
        > 
          <ion-card-title>
          	#{{ pokemonData?.id ?? 0 }} - 
          	{{ pokemonData?.name ?? "no pokemon" }}
          </ion-card-title>
          
          <ion-item lines="none">
          	<ion-chip
          		v-for="type of pokemonData?.types"
          		:key="type.slot"
          		:class="[type.type.name, 'info']"
          	>
          		{{ type.type.name }}
          	</ion-chip>
          </ion-item>
        </ion-card-header>
        
        <ion-card-content class="ion-text-center" mode="md">
        	<ion-chip
        		v-for="stats of pokemonStats"
        		:key="stats.name"
        		:outline="true"
        		:color="stats.color"
        		class="info"
        	>
        		{{ stats.name }}: {{ stats.value }}
        	</ion-chip>
        </ion-card-content>
      </ion-card>
  	</ion-content>
	</ion-page>
</template>

<style scoped>
.pokemon {
  height: 128px
}

.info {
 cursor: default;
}
</style>
