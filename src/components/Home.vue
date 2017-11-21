<template>
  <b-container class="height-z">
    <b-row align-h="center" class="mt-3">
      <b-col cols="8">
      <p class="text-center text-warning lead">
        <strong>Dethony</strong> is a Destiny 2 Clan Leaderboards website based on game statistics 
        publically available from the Bungie Destiny 2 game API. 
      </p>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="10">
        <b-card-group deck class="mt-3 mb-3">
          <b-card
            header="<strong>Wookieville<strong>"
            align="center"
            text-variant="dark"
            class="lead"
            bg-variant="light"
            style="max-width: 25rem;">
            <b-card-img
              src="/static/2080464.jpg"
              alt="Wookieville">
            </b-card-img>
          </b-card>
          <b-card 
            header="<strong>Guardians of the Last Dew<strong>"
            align="center"
            text-variant="dark"
            class="lead"
            bg-variant="light"
            style="max-width: 26=5rem;">
            <b-card-img
              src="/static/966689.jpg"
              alt="Guardians of the Last Dew">
            </b-card-img>
          </b-card>
          <b-card 
            header="<strong>Dome Busters<strong>"
            align="center"
            text-variant="dark"
            class="lead"
            bg-variant="light"
            style="max-width: 25rem">
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
