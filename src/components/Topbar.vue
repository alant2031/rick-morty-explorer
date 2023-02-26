<template>
  <el-menu
    :default-active="activeIndex"

    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <router-link to="/">
        <h1>

          HOME
        </h1>
      </router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <router-link to="characters">
        <h1>

        CHARACTERS
        </h1>
      </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="about">
        <h1>

        ABOUT
        </h1>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
a {
  text-decoration: none
}
</style>
