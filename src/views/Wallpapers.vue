<script setup lang="ts">
	// static
	const wallpaperOpts = [ 'solMoon', 'dimensions' ]
	
	const wallpaperInterface = {
		backdropDismiss: false,
		mode: 'ios'
	}
	
	// state
	const opt = ref('')
	
	// methods
	const clearResults = () => {
		opt.value = ''
	}
</script>

<template>
	<ion-page>
		<stack-toolbar />
		
		<ion-content>
			<ion-select 
				label="enter a wallpaper select"
				interface="popover"
				:interface-options="wallpaperInterface"
				v-model="opt"
			>
				<ion-select-option 
					v-for="wallpaperOpt of wallpaperOpts"
					:value="wallpaperOpt"
				>
					{{ wallpaperOpt }}
				</ion-select-option>
			</ion-select>
			
			<ion-button 
				color="danger" 
				expand="block" 
				fill="outline"
				@click="clearResults"
			>
				clear results
			</ion-button>
			
			<ion-grid>
				<ion-row>
					<wallpaper-card
						v-for="(wallpaper, i) of wallpapers[opt]"
						:key="i"
						:path="wallpaper"
						:name="`${opt} ${i + 1}`"
					/>
				</ion-row>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<style scoped>
ion-grid {
	columns: auto 320px;
	column-gap: 5px;
}
</style>
