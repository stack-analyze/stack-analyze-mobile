<script setup lang="ts">
import { ref } from 'vue'
import axios, { AxiosError } from 'axios'
import { presentAlert } from '@/scripts/alertMsg'

import {
  IonPage, IonContent, IonItem, IonSelect, IonSelectOption,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonGrid, IonRow, IonCol, IonList, IonLabel,
} from '@ionic/vue'
import StackToolbar from '@/components/main/StackToolbar.vue'
import StackButtons from '@/components/main/StackButtons.vue'

interface PokerRule {
  title: string
  age: string
  players: string
  howPlay: string[]
}

// static
const pokerGameList: string[] = [
  'go-fish', 'gin-rummy', 'blackjack', 
  'slapjack', 'basics-of-poker', 'texas-holdem-poker'
]

const pokerGame = ref('')

const pokerRule = ref<PokerRule>({
  title: '',
  age: '',
  players: '',
  howPlay: []
})

const getPokerRule = async () => {
  try {
    const { data } = await axios.get('https://api-scraping.vercel.app/api/poker-game', {
      params: { game: pokerGame.value }
    })
    
    const parser = new DOMParser()
    
    const page = parser.parseFromString(data, 'text/html')
    
    // age & players
    const [age, players] = [...page.querySelectorAll(
      '.border-brand-blue-pale div:not(.text-brand-blue)'
    )].map(el => el.textContent).slice(1)
    
    /* { title: '', age: '', players: '', howplay: [] }*/
    pokerRule.value = {
      title: page.title, 
      age, players, 
      howPlay: [...page.querySelectorAll('h3.text-2xl+p.mb-5')]
        .map((el) => el.textContent).slice(0, 5)
    } 
  } catch(err) {
    presentAlert({
      msg: (err as AxiosError).message,
      header: 'Error poker api',
      subHeader: 'error 4xx or 5xx',
    });
  }
  
  pokerGame.value = ''
}

const clearPokerRule = () => {
  pokerRule.value = { 
    title: '', 
    age: '', 
    players: '', 
    howPlay: []
  }
}
</script>

<template>
  <ion-page>
    <stack-toolbar />

    <ion-content>
      <ion-item>
        <ion-select 
          label="select a poker game"
          interface="popover" 
          v-model="pokerGame"
        >
          <ion-select-option value="">no game</ion-select-option>
        
          <ion-select-option 
            v-for="game of pokerGameList" :value="game"
          >{{ game }}</ion-select-option>
        </ion-select>
      </ion-item>
      <stack-buttons
          init-btn-name="get poker rule"
          :init-validate="pokerGame === ''"
          @init-function="getPokerRule"
          clear-btn-name="clear tech stack"
          :clear-validate="!pokerRule.title"
          @clear-function="clearPokerRule"
        />
      
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            {{ pokerRule.title || 'no poker game' }}
          </ion-card-title>
        </ion-card-header>
        
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">age:</ion-label>
                  {{ pokerRule.age || 0}}
                </ion-item>
              </ion-col>
            
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">players:</ion-label>
                  {{ pokerRule.players || 0 }}
                </ion-item>
              </ion-col>
            </ion-row>
            
            <ion-row>
              <ion-col>
                <ion-list>
                  <ion-item v-for="(rule, i) of pokerRule.howPlay">
                    {{ i + 1 }}. {{ rule }}
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
