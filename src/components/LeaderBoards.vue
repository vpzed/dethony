<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <b-tabs>
          <b-tab title="Account Stats - PvE">
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <p>Select Alliance/Clan</p>
                  <b-form-select v-model="allianceSelected" :options="allianceOptions"></b-form-select>
                </div>
                <b-row>
                  <b-col>
                    <div class="mt-3">
                      <p>Select Activity Mode</p>
                      <b-form-select v-model="pveActivityModeSelected" :options="pveActivityModeOptions"></b-form-select>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="mt-3">
                      <p>Select Statistic</p>
                      <b-form-select v-model="pveStatIdSelected" :options="pveStatIdOptions"></b-form-select>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <b-button variant="success" type="dark" v-on:click="fetchAcctStats(pveSelectedParams)">Get Leaderboard</b-button>
                </div>
                <div class="mt-3 mb-5">
                  <b-table :items="acctStats" striped></b-table>
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Account Stats - PvP">
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <p>Select Alliance/Clan</p>
                  <b-form-select v-model="allianceSelected" :options="allianceOptions"></b-form-select>
                </div>
                <b-row>
                  <b-col>
                    <div class="mt-3">
                      <p>Select Activity Mode</p>
                      <b-form-select v-model="pvpActivityModeSelected" :options="pvpActivityModeOptions"></b-form-select>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="mt-3">
                      <p>Select Statistic</p>
                      <b-form-select v-model="pvpStatIdSelected" :options="pvpStatIdOptions"></b-form-select>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <b-button variant="success" type="dark" v-on:click="fetchAcctStats(pvpSelectedParams)">Get Leaderboard</b-button>
                </div>
                <div class="mt-3 mb-5">
                  <b-table :items="acctStats" striped></b-table>
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Account Stats - Medals">
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <p>Select Alliance/Clan</p>
                  <b-form-select v-model="allianceSelected" :options="allianceOptions"></b-form-select>
                </div>
                <b-row>
                  <b-col>
                    <div class="mt-3">
                      <p>Select Activity Mode</p>
                      <b-form-select v-model="pvpActivityModeSelected" :options="pvpActivityModeOptions"></b-form-select>
                    </div>
                  </b-col>
                  <b-col>
                    <div class="mt-3">
                      <p>Select Statistic</p>
                      <b-form-select v-model="medalStatIdSelected" :options="medalStatIdOptions"></b-form-select>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <b-button variant="success" type="dark" v-on:click="fetchAcctStats(medalSelectedParams)">Get Leaderboard</b-button>
                </div>
                <div class="mt-3 mb-5">
                  <b-table :items="acctStats" striped></b-table>
                </div>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { generalMenus, acctStatMenus } from '@/store/testMenus'

export default {
  name: 'LeaderBoards',
  computed: {
    acctStats () {
      return this.$store.getters.acctStats
    },
    pveSelectedParams () {
      return {
        allianceId: this.allianceSelected,
        activityMode: this.pveActivityModeSelected,
        statId: this.pveStatIdSelected
      }
    },
    pvpSelectedParams () {
      return {
        allianceId: this.allianceSelected,
        activityMode: this.pvpActivityModeSelected,
        statId: this.pvpStatIdSelected
      }
    },
    medalSelectedParams () {
      return {
        allianceId: this.allianceSelected,
        activityMode: this.pvpActivityModeSelected,
        statId: this.medalStatIdSelected
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
      allianceSelected: null,
      allianceOptions: generalMenus.allianceOptions,
      pveActivityModeSelected: null,
      pveActivityModeOptions: acctStatMenus.pveActivityModeOptions,
      pveStatIdSelected: null,
      pveStatIdOptions: acctStatMenus.pveStatIdOptions,
      pvpActivityModeSelected: null,
      pvpActivityModeOptions: acctStatMenus.pvpActivityModeOptions,
      pvpStatIdSelected: null,
      pvpStatIdOptions: acctStatMenus.pvpStatIdOptions,
      medalActivityModeSelected: null,
      medalActivityModeOptions: acctStatMenus.pvpActivityModeOptions,
      medalStatIdSelected: null,
      medalStatIdOptions: acctStatMenus.medalStatIdOptions
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