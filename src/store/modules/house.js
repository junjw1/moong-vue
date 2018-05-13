import api from '../utils/api'
import * as types from '../utils/types'

const state = {
  house: {},
  isLoading: false
}

const getters = {
  getHouse: state => state.house
}

const mutations = {
  [types.GET_HOUSE] (state, data) {
    state.house = data
  },
  [types.COM_IS_LOADING] (state, status) {
    state.isLoading = status
  }
}

const actions = {
  getHouse ({ commit, state }) {
    commit(types.COM_IS_LOADING, true)
    api.getHouse(state, (res) => {
      commit(types.GET_HOUSE, res)
    })
    commit(types.COM_IS_LOADING, false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
