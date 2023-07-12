<script src="../../../WOKR/photored/my-vue-app/vuetify-project/src/router/index.js"></script>
<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
