<script setup>
import Search from './search_filter/Search.vue';
import Filter from './search_filter/Filter.vue';

const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
</script>

<template>
  <Search></Search>
  <Filter :continents></Filter>
</template>
