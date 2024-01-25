<script setup>
const props = defineProps(['continents'])
</script>
<template>
  <div class="filter_container">
    <p class="filter_container_text">Filter by Region</p>
    <img src="/angle-down-solid.svg" alt="angle-down" class="angle_down icons">

    <ul class="filter_lists">
      <li class="list" v-for="continent in continents">{{ continent }}</li>
    </ul>
  </div>
</template>
