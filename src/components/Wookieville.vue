<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <div class="mt-3">
          <b-alert show variant="primary" align="center" class="font-weight-bold">Wookieville Clan Leaderboards</b-alert>
        </div>
        <div class="mt-3">
          <p>Select Activity Mode</p>
          <b-form-select v-model="activityModeSelected" :options="activityModeOptions"></b-form-select>
        </div>
        <div class="mt-3">
          <p>Select Statistic</p>
          <b-form-select v-model="statIdSelected" :options="statIdOptions"></b-form-select>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
        <div class="mt-3">
          <b-button variant="success" type="dark" v-on:click="fetchAcctStats(selectedParams)">Get Leaderboard</b-button>
        </div>
        <div class="mt-3 mb-5">
          <b-table :items="acctStats" striped></b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { acctStatMenus } from '@/store/testMenus'

export default {
  name: 'Wookieville',
  computed: {
    acctStats () {
      return this.$store.getters.acctStats
    },
    selectedParams () {
      return {
        allianceId: 2,
        activityMode: this.activityModeSelected,
        statId: this.statIdSelected
      }
    }
  },
  methods: {
    fetchAcctStats (params) {
      this.$store.dispatch('FETCH_ACCT_STATS', params)
    }
  },
  data: function () {
    return {
      activityModeSelected: null,
      activityModeOptions: acctStatMenus.activityModeOptions,
      statIdSelected: null,
      statIdOptions: acctStatMenus.statIdOptions
    }
  }
}

/*
  Account Stats query variables:
  select=display_name,basic_display_value,activity_mode,stat_id
  alliance_id=eq.2
  activity_mode=eq.trialsofthenine
  stat_id=eq.winLossRatio
  order=basic_value.desc
  limit=10
*/
</script>

<style>

</style>