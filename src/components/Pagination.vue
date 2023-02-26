<template>
  <el-pagination
    small
    background
    layout="prev, pager, next"
    :page-count="42"
    class="mt-4"
    v-model:current-page="current"
  />
</template>
<script lang="ts">
  export default {
    props: {
      page: Number,
      setPage: {
        type: Function,
        required: true
      }
    },
    data() {
      return {
        current: this.page
      }
    },
    watch: {
      current(c) {
        this.setPage(c)
      }
    }
  }
</script>
<style></style>