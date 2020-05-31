<template>
  <div id="app">
    <Appheader />
    <router-view></router-view>
  </div>
</template>

<script>
import Appheader from "./components/Appheader.vue"
export default {
  name: "App",
  components: {
    Appheader
  }
};
</script>


