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
}
</script>

<style>

</style>