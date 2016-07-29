import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App'


/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
