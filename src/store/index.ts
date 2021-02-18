import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: localStorage.getItem("theme") || false,
  },
  mutations: {
    darkTheme(state) {
      localStorage.setItem("theme", JSON.stringify(!state.darkMode));
    }
  },
  actions: {
    darkModeChanged({ commit }) { commit('darkTheme'); }
  },
  modules: {
  }
})
