<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="text-warning" to="home">Dethony</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="about">About</b-nav-item>
        <b-nav-item-dropdown text="Clans" right>
          <b-dropdown-item to="wookieville">Wookieville</b-dropdown-item>
          <b-dropdown-item to="comingsoon">Guardians of the Last Dew</b-dropdown-item>
          <b-dropdown-item to="domebusters">Dome Busters</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-text>Made by VPZ &nbsp;<img src="/static/joystick-6-32.png" height="24px"></b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
</script>

<style>
</style>