<template>
  <el-menu
    :default-active="0"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"

  >
    <el-menu-item index="0" @click="navigate('/')">
      <div class="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="logo" />
      </div>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="navigate('/')">
        <h1>

        HOME
        </h1>
    </el-menu-item>
    <el-menu-item index="2" @click="navigate('/characters')">
        <h1>

        CHARACTERS
        </h1>
    </el-menu-item>
    <el-menu-item index="3" @click="navigate('/about')">
        <h1>

        ABOUT
        </h1>
    </el-menu-item>
  </el-menu>
</template>



<script lang="ts">
import { RouteLocationRaw } from "vue-router"
export default {
  methods: {
    navigate(path: RouteLocationRaw) { this.$router.push(path) }
  }
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
a {
  text-decoration: none
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;

}

.logo img {
  height: 44px;
}
</style>
