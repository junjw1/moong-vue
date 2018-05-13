import Vue from 'vue'
import Vuex from 'vuex'

// modules
import house from './modules/house'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    house
  }
})
