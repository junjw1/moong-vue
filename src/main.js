import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'

// assets
import './assets/css/style.css'

// http
import axios from 'axios'
Vue.prototype.$http = axios

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
