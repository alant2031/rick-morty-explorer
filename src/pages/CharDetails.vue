<template>
  <div>CHAR DETAILS</div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    }
  },
  created() {
    console.log(this.$route.params)
  }
}
</script>

<style>

</style>