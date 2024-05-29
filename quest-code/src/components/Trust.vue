<template>
  <section class="trust">
    <div class="row-trust">
      <div class="col-4" v-for="(image, index) in trustImages" :key="index">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import bibliotekImage from '@/assets/images/bibliotek.png';
import kommuneImage from '@/assets/images/kommune.gif';
import oplevImage from '@/assets/images/oplev1.png';

const trustImages = ref([
  { src: bibliotekImage},
  { src: kommuneImage},
  { src: oplevImage}
]);
</script>
