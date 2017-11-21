<template>
  <b-container>
    <b-row align-h="center" class="mt-3">
      <b-col cols="8">
      <p class="text-center">
        <strong>Dethony</strong> is a Destiny 2 Clan Leaderboards website based on game statistics 
        publically available from the Bungie Destiny 2 game API. 
      </p>
      <p class="text-center">
        Due to the volume of data collected the stats will always be based on historical data 
        with the goal being an update at least once per day.  The collection process retrieves millions
        of data points so it's quite a task to update.
      </p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="10">
        <b-card-group deck class="mt-3 mb-3">
          <b-card
            header="Wookieville"
            align="center"
            border-variant="secondary"
            style="max-width: 20rem;">
            <b-card-img
              src="/static/2080464.jpg"
              alt="Wookieville">
            </b-card-img>
          </b-card>
          <b-card 
            header="Guardians of the Last Dew"
            align="center"
            border-variant="secondary"
            style="max-width: 20rem;">
            <b-card-img
              src="/static/966689.jpg"
              alt="Guardians of the Last Dew">
            </b-card-img>
          </b-card>
          <b-card 
            header="Dome Busters"
            align="center"
            border-variant="secondary"
            style="max-width: 20rem">
            <b-card-img 
              src="/static/804941.jpg"
              alt="Dome Busters">
            </b-card-img>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
