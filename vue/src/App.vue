<script setup>
import { Asia, data } from './api.js';
import Header from "./components/Header.vue";
import SearchContainer from './components/SearchContainer.vue';
import CountryCard from './components/CountryCard.vue';
</script>

<template>
  <Header />
  <SearchContainer></SearchContainer>
  <CountryCard :country="Asia[0]" :countries-data="data"></CountryCard>
</template>

<style scoped></style>
