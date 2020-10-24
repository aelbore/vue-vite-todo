
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      { text: 'my initial todo', checked: false },
      { text: 'Learn about Web Components', checked: true },
    ]
  },
  mutations: {
    ON_SUBMT(state, text) {
      state.list = [ ...state.list, { text, checked: false } ]
    }
  },
  actions: {
    handleOnSubmit({ commit }, text) {
      commit('ON_SUBMT', text)
    }
  },
  getters: {
    list: (state) => state.list
  }
})