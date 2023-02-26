<template>
  <topbar />
  <router-view />
</template>

<script>
import Topbar from './components/Topbar.vue'

export default {
  components: {
    Topbar
  },

  created(e) {
    
    console.log("Call once")
    console.log(e)
  }
}
</script>

<style>

</style>