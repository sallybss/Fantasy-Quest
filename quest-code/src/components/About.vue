<template>
  <div id="about">
    <div class="about-col-1">
      <p><img :src="imageSrc" alt="About Image" /></p>
    </div>
    <section class="about-col-2">
      <h1>About the Quest</h1>
      <p>
        Imagine "Prisoners at the Fort" with a lot of magic, some theater and role playing, some heroes and villains and of course the battle between good and evil, then you are well on your way to Fantasy Quest Esbjerg.
        <br /><br />
        In 2024, Fantasy Quest Esbjerg will have both a difficult evening edition and a family-friendly edition during the day during the Fantasy Festival, written in collaboration with the YouTuber Lakserytteren, where everyone can participate. If you fancy a slightly bigger challenge, the level of difficulty is turned up when twilight settles over Esbjerg's streets.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import portalImage from '@/assets/images/Portal1.png';

const imageSrc = ref(portalImage);
</script>