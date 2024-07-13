<script setup lang="ts">
// states
const query = ref('')
const albums = ref<Deezer[]>([])


// computers
const isAlbumsEmpty = computed(() => albums.value.length === 0)

// methods
const getAlbums = async () => {
	if(!query.value) {
		return openToast("this field is required", "warning")
	}
	
	try {
		const api = `https://corsproxy.io/?https://api.deezer.com/search/album?q=${query.value}&limit=100`
		const { data } = await axios.get(api)
		
		albums.value = data.data
	} catch(err) {
		presentAlert({
			msg: (err as AxiosError).message,
			header: 'Error deezer search',
			subHeader: 'problem to req api'
		})
	}
	
	query.value = ''
}

const clearAlbums = () => {
	albums.value = []
}

const getLyricsType = (isExplicit: boolean) => isExplicit 
	? 'explicit' : 'clean'
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
      		label="enter a search" 
      		label-placement="floating"
      		type="text"
      		v-model="query"
      	/>
    	</ion-item>
    	
    	<ion-grid>
        <stack-buttons
          init-btn-name="start search"
          :init-validate="false"
          @init-function="getAlbums"
          clear-btn-name="clear search"
          :clear-validate="isAlbumsEmpty"
          @clear-function="clearAlbums"
        />
        
        <ion-row :fixed="true">
        	<ion-col 
        		size-lg="3"
        		size-md="4"
        		size-sm="6"
        		size="12"
        		v-for="album of albums"
        	>
        		<ion-card>
        			<ion-card-header>
        				<ion-img :src="album.cover_xl" :alt="album.id" />
        				
        				<ion-card-title>{{ album.title }}</ion-card-title>
        				
        				<ion-card-subtitle>
        					{{ album.artist.name }}
        				</ion-card-subtitle>
        			</ion-card-header>
        			
        			<ion-card-content>
        				<ion-list>
        				<ion-item>
        					{{getLyricsType(album.explicit_lyrics) }} lyrics
        				</ion-item>
        				<ion-item>tracks: {{album.nb_tracks}}</ion-item>
        				<ion-item>{{album.record_type}} record</ion-item>
        				</ion-list>
        			</ion-card-content>
        		</ion-card>
        	</ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
	</ion-page>
</template>
