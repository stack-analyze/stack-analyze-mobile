<script setup lang="ts">
const accordionGroup = ref();
const isOpen = ref(false)

const closeAccordion = () => {
  if (accordionGroup.value) {
    accordionGroup.value.$el.value = undefined;
  }
}

const setOpen = (modalOpen: boolean) => {
  isOpen.value = modalOpen;
};

const youtubeList = recomendations.filter(
  (item) => item.color === 'youtube'
);

const webList = recomendations.filter(
	(item) => item.color === 'primary'
);

const igList = recomendations.filter(
	(item) => item.color === 'instagram'
);

const twitchList = recomendations.filter(
	(item) => item.color === 'twitch'
);
</script>

<template>
  <ion-page>
    <stack-toolbar />
    
    <ion-content>
      <ion-item button @click="setOpen(true)">
        <ion-icon 
        	slot="start" 
        	color="secondary" 
        	:icon="libraryOutline" 
        />
        <ion-label>Mua discovery</ion-label>
      </ion-item>
      
      <ion-accordion-group value="lists" ref="accordionGroup">
    		<ion-accordion value="Youtube">
      		<ion-item slot="header">
        		<ion-label>Youtube</ion-label>
      		</ion-item>

      		<ion-list slot="content">
        		<ion-item
          		v-for="(youtube, i) of youtubeList" 
          		:key="i"
          		slot="start"
          		:href="youtube.link"
          		@click="closeAccordion()"
          		target="_blank"
        		>
          		<ion-icon 
            		:color="youtube.color" 
            		slot="start" 
            		:icon="youtube.logo"
          		/>
          
          		<ion-label :color="youtube.color">
          			{{youtube.name}}
          		</ion-label>
        		</ion-item>
      		</ion-list>
    		</ion-accordion>
    
    		<ion-accordion value="web">
      		<ion-item slot="header">
        		<ion-label>web</ion-label>
      		</ion-item>

      		<ion-list slot="content">
        		<ion-item
          		v-for="(web, i) of webList" 
          		:key="i"
          		slot="start"
          		:href="web.link"
          		@click="closeAccordion()"
          		target="_blank"
        		>
          		<ion-icon 
            		:color="web.color" 
            		slot="start" 
            		:icon="web.logo"
          		/>
          		<ion-label :color="web.color">
          			{{web.name}}
          		</ion-label>
        		</ion-item>
      		</ion-list>
    		</ion-accordion>
    
    		<ion-accordion value="Instagram">
      		<ion-item slot="header">
        		<ion-label>Instagram</ion-label>
      		</ion-item>

      		<ion-list slot="content">
        		<ion-item
          		v-for="(instagram, i) of igList" 
          		:key="i"
          		slot="start"
          		:href="instagram.link"
          		@click="closeAccordion()"
          		target="_blank"
        		>
          		<ion-icon 
            		:color="instagram.color" 
            		slot="start" 
            		:icon="instagram.logo"
          		/>
          	
          		<ion-label :color="instagram.color">
          			{{instagram.name}}
          		</ion-label>
        		</ion-item>
      		</ion-list>
    		</ion-accordion>
    
    		<ion-accordion value="Twitch">
      		<ion-item slot="header">
        		<ion-label>Twitch</ion-label>
      		</ion-item>

      		<ion-list slot="content">
        		<ion-item
          		v-for="(twitch, i) of twitchList" 
          		:key="i"
          		slot="start"
          		:href="twitch.link"
          		@click="closeAccordion()"
          		target="_blank"
        		>
          		<ion-icon 
            		:color="twitch.color" 
            		slot="start" 
            		:icon="twitch.logo"
          		/>
          
          		<ion-label :color="twitch.color">
            		{{twitch.name}}
          		</ion-label>
        		</ion-item>
      		</ion-list>
    		</ion-accordion>
  		</ion-accordion-group>
  
  		<ion-modal
    		class="modal"
    		mode="ios"
    		:is-open="isOpen"
    		:backdrop-dismiss="false"
  		>
    		<mua-easter @set-open="setOpen(false)" />
  		</ion-modal>
    </ion-content>
  </ion-page>
</template>
