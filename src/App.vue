<template>
  <div>
    <header>
      <toolbar-z></toolbar-z>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Toolbar from '@/components/ToolBar'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    ToolbarZ: Toolbar
  }
}
</script>

<style>

</style>
