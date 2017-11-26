<template>
  <b-container>
    <b-row align-h="center">
      <b-col md="8">
        <h2 class="text-center text-warning mt-3">Salt Empire</h2>
        <b-tabs v-model="tabIndex" pills class="nav-justified">
          <b-tab title="Account Stats - PvE" :title-link-class="linkClass(0)">
            <b-row align-h="center">
              <b-col>
                <b-row>
                  <b-col cols="6">
                    <div class="mt-3">
                      <h3 class="text-warning">Activity</h3>
                      <b-form-select v-model="pveActivityModeSelected" :options="pveActivityModeOptions" class="bg-dark text-white"></b-form-select>
                    </div>
                  </b-col cols="6">
                  <b-col>
                    <div class="mt-3">
                      <h3 class="text-warning">Statistic</h3>
                      <b-form-select v-model="pveStatIdSelected" :options="pveStatIdOptions" class="bg-dark text-white"></b-form-select>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <b-button variant="warning" type="dark" class="font-weight-bold" v-on:click="fetchAcctStats(pveSelectedParams)">Get Leaderboard</b-button>
                </div>
                <div class="mt-3 mb-5">
                  <b-table dark :items="acctStats" striped></b-table>
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Account Stats - PvP" :title-link-class="linkClass(1)">
            <b-row align-h="center">
              <b-col>
                <b-row>
                  <b-col cols="6">
                    <div class="mt-3">
                      <h3 class="text-warning">Activity</h3>
                      <b-form-select v-model="pvpActivityModeSelected" :options="pvpActivityModeOptions" class="bg-dark text-white"></b-form-select>
                    </div>
                  </b-col>
                  <b-col cols="6">
                    <div class="mt-3">
                      <h3 class="text-warning">Statistic</h3>
                      <b-form-select v-model="pvpStatIdSelected" :options="pvpStatIdOptions" class="bg-dark text-white"></b-form-select>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <b-button variant="warning" type="dark" class="font-weight-bold" v-on:click="fetchAcctStats(pvpSelectedParams)">Get Leaderboard</b-button>
                </div>
                <div class="mt-3 mb-5">
                  <b-table dark :items="acctStats" striped></b-table>
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Account Stats - Medals" :title-link-class="linkClass(2)">
            <b-row align-h="center">
              <b-col>
                <b-row>
                  <b-col cols="6">
                    <div class="mt-3">
                      <h3 class="text-warning">Activity</h3>
                      <b-form-select v-model="pvpActivityModeSelected" :options="pvpActivityModeOptions" class="bg-dark text-white"></b-form-select>
                    </div>
                  </b-col>
                  <b-col cols="6">
                    <div class="mt-3">
                      <h3 class="text-warning">Statistic</h3>
                      <b-form-select v-model="medalStatIdSelected" :options="medalStatIdOptions" class="bg-dark text-white"></b-form-select>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col>
                <div class="mt-3">
                  <b-button variant="warning" type="dark" class="font-weight-bold" v-on:click="fetchAcctStats(medalSelectedParams)">Get Leaderboard</b-button>
                </div>
                <div class="mt-3 mb-5">
                  <b-table dark :items="acctStats" striped></b-table>
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
import { generalMenus, acctStatMenus } from '@/store/menus'

export default {
  name: 'SaltEmpire',
  computed: {
    acctStats () {
      return this.$store.getters.acctStats
    },
    pveSelectedParams () {
      return {
        allianceId: 3,
        activityMode: this.pveActivityModeSelected,
        statId: this.pveStatIdSelected
      }
    },
    pvpSelectedParams () {
      return {
        allianceId: 3,
        activityMode: this.pvpActivityModeSelected,
        statId: this.pvpStatIdSelected
      }
    },
    medalSelectedParams () {
      return {
        allianceId: 3,
        activityMode: this.pvpActivityModeSelected,
        statId: this.medalStatIdSelected
      }
    }
  },
  methods: {
    fetchAcctStats (params) {
      this.$store.dispatch('FETCH_ACCT_STATS', params)
    },
    linkClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-warning', 'text-dark']
      } else {
        return ['bg-dark', 'text-warning']
      }
    }
  },
  data: function () {
    return {
      tabIndex: 0,
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

<style scoped>

</style>