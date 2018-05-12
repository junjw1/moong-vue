import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

// http
import axios from 'axios'
Vue.prototype.$http = axios

// assets
import './assets/css/style.css'

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
