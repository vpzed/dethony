<template>
  <div id="app">
    <header>
      <toolbar-z/>
    </header>
    <main>
      <router-view/>
    </main>
    <!-- footer class set in main.scss -->
    <footer class="footer">
      <footer-z/>
    </footer>
  </div>
</template>

<script>
import Toolbar from '@/components/ToolBar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    ToolbarZ: Toolbar,
    FooterZ: Footer
  }
}
</script>

<style>
</style>
