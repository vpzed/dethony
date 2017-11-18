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
    // de-reference params and build url
    const url = 'http://192.168.1.4:3000/mv_account_stats?select=display_name,basic_display_value,activity_mode,stat_id&alliance_id=eq.2&activity_mode=eq.trialsofthenine&stat_id=eq.winLossRatio&order=basic_value.desc&limit=10'
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
