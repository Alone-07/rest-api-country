<script setup>
import { ref, computed } from "vue";
import LightMoon from "../components/icons/MoonReg.vue";
import DarkMoon from "../components/icons/MoonSolid.vue";
const isDarkMode = ref(true);
const changeMode = _ =>
  isDarkMode.value = !isDarkMode.value;



</script>
<template>
  <div class="header">
    <h3 class="header_text">Where in the world?</h3>
    <div class="page_theme_mode" @click="changeMode">
      <DarkMoon v-show="isDarkMode"></DarkMoon>
      <LightMoon v-show="!isDarkMode"></LightMoon>
      <p class="text">Dark Mode</p>
    </div>
  </div>
</template>
<style ></style>
