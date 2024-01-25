<script setup>
import { ref } from 'vue';
const props = defineProps(['country', 'countriesData']);
const { name, flag, population, region, capital, subregion, topLevelDomain, currencies, languages } = props.country;

const borderCountries = (_ => {
  const tmpCountries = [];
  languages.forEach(e => {
    props.countriesData.forEach(c => {
      if (c.alpha2Code == e['iso639_1'].toUpperCase()) tmpCountries.push(c.name);
    })
  })
  return tmpCountries;
})()
const isExpanded = ref(false);
</script>
<template>
  <div class="country_card" @click="isExpanded = true">
    <h3 class="country_name">{{ name }}</h3>
    <img :src="flag" :alt="name + ' country flag'" class="flag">
    <div class="country_details">
      <div class="row">
        <p class="key">Pouplation: <span class="value">{{ population }}</span></p>
        <p class="key">Region: <span class="value">{{ region }}</span></p>
        <p class="key" v-show="isExpanded">Sub Region: <span class="value">{{ subregion }}</span></p>
        <p class="key">Capital: <span class="value">{{ capital }}</span></p>
      </div>

      <div class="row" v-show="isExpanded">
        <p class="key">Top Level Domain: <span class="value" v-for="domain in topLevelDomain">{{ domain }}</span></p>
        <p class="key"><span class="value" v-for="currency in currencies">{{ currency.name }}</span></p>
        <p class="key"><span class="value" v-for="language in languages">{{ language.name }}</span></p>

      </div>

      <div class="border_countries row" v-show="isExpanded">
        <button type="button" v-for="country of borderCountries">{{ country }}</button>
      </div>
    </div>
  </div>
</template>
