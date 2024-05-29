<template>
  <div class="cards">
    <div v-for="(card, index) in cards" :key="index" class="card-container">
      <div class="front" :style="{ backgroundImage: `url('${card.image}')` }"></div>
      <div class="back">
        <h1>{{ card.title }}</h1>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

import malice from '@/assets/images/Malice.jpg';
import arkivaren from '@/assets/images/Arkivaren_color_soft.jpg';
import gnist from '@/assets/images/Gnist_color_Soft.jpg';
import gygaz from '@/assets/images/Gygaz.jpg';
import havfruedronning from '@/assets/images/Havfruedronning.jpg';

const cards = ref([
  { title: 'Malice', image: malice },
  { title: 'Arkivaren', image: arkivaren },
  { title: 'Gnist', image: gnist },
  { title: 'Gygaz', image: gygaz },
  { title: 'Havfruedronning', image: havfruedronning }
]);
</script>
