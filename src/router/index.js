import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import HomeComponent from '../pages/HomeComponent.vue'
import NotFoundComponent from '../pages/NotFoundComponent.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeComponent },
  { path: '*', component: NotFoundComponent }
]

export const router = new VueRouter({ routes })
