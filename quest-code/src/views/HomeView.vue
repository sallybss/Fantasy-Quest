<template>
  <div>
    <section id="about">
      <About />
    </section>
  
    <section id="video">
      <Video />
    </section>

    <section id="gallery">
      <Gallery />
    </section> 

    <section id="cards">
      <Cards />
    </section>

    <section id="intro">
      <Intro />
    </section>

    <section id="quests">
      <Quests />
    </section>
    
    <section id="googlemap">
      <Map />
    </section>

    <section id="faq">
      <FAQ />
    </section>
    
    <section id="trust">
      <Trust />
    </section>

    
  </div>
</template>

<script setup>
import About from '@/components/About.vue';
import Video from '@/components/Video.vue';
import Gallery from '@/components/Gallery.vue';
import Cards from '@/components/Cards.vue';
import Intro from '@/components/Intro.vue';
import Quests from '@/components/Quest.vue';
import Map from '@/components/Map.vue';
import FAQ from '@/components/Faq.vue';
import Trust from '@/components/Trust.vue';

</script>