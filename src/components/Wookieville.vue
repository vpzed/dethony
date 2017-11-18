<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="8">
        <div class="mt-3">
          <b-alert show variant="primary" align="center" class="font-weight-bold">Wookieville Clan Leaderboards</b-alert>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
        <div class="mt-3">
          <b-button variant="danger" type="dark" v-on:click="FETCH_ACCT_STATS">Test</b-button>
        </div>
        <div class="mt-3 mb-5">
          <b-table striped :items="acctStats"></b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Wookieville',
  computed: mapGetters([
    'acctStats'
  ]),
  methods: mapActions([
    'FETCH_ACCT_STATS'
  ]),
  data: function () {
    return {
      params: null,
      tableData: null
    }
  }
}
</script>

<style>

</style>