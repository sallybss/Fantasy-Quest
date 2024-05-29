<template>
    <div class="container-gal">
      <h1>Gallery</h1>
      <div class="gallery-wrap">
        <div v-for="(image, index) in images" :key="index" :class="`item item-${index + 1}`" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
    </div>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Pic1 from '@/assets/images/1.jpg';
  import Pic2 from '@/assets/images/5.jpg';
  import Pic3 from '@/assets/images/3.jpg';
  import Pic4 from '@/assets/images/4.jpg';
  import Pic5 from '@/assets/images/2.jpg';
    
  const images = ref([
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5

  ]);
  </script>
