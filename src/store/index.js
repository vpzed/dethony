// store/indjex.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: []
}

const mutations = {
  RECEIVE_ACCT_STATS (state, { acctStats }) {
    state.data = acctStats
  }
}

const actions = {
  async FETCH_ACCT_STATS ({ commit }, payload) {
    const url = `http://192.168.1.4:3000/mv_account_stats?select=display_name,basic_display_value&alliance_id=eq.${payload.allianceId}&activity_mode=eq.${payload.activityMode}&stat_id=eq.${payload.statId}&order=basic_value.desc&limit=10`
    // const url = `http://192.168.1.4:3000/mv_account_stats?select=display_name,basic_display_value,activity_mode,stat_id&alliance_id=eq.${payload.allianceId}&activity_mode=eq.${payload.activityMode}&stat_id=eq.${payload.statId}&order=basic_value.desc&limit=10`
    const apiResponse = await axios.get(url)
    commit('RECEIVE_ACCT_STATS', { acctStats: apiResponse.data })
  }
}

const getters = {
  acctStats: state => {
    return state.data
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
