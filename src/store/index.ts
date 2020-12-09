import { createStore } from 'vuex'

// DOM element 
const classDark = document.body;

export default createStore({
  state: {
    darkMode: false
  },
  mutations: {
    darkTheme(state) { 
      state.darkMode = classDark.classList.toggle('dark');
    }
  },
  actions: {
    darkModeChanged({ commit }) { commit('darkTheme'); }
  },
  modules: {
  }
})
