import Vue from 'vue'

import App from './App.vue'
import store from './store.js'

new Vue({ 
  el: '#app',
  store,
  components: {
    App
  },
  template: '<App />'
})