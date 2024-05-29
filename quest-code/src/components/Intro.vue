<template>
    <div id="intro">
      <section class="intro1">
        <h1>The Story</h1>
        <p>
          Lightning streaked across the sky as a large, winged creature soared overhead. The four statues, guardians of the realm, suddenly stood tall, their awakening cries echoing across the land and through portals to other worlds. "Heroes are needed in Esbjerg!" they proclaimed, signaling the call to action. It was time for the heroes to gather, for evil to be vanquished, and for the portals to be sealed shut. Thus begins the epic journey of Fantasy Quest Esbjerg. Are you prepared?
          <br /><br />
          Opening mystical portals in the heart of Esbjerg, Fantasy Quest Esbjerg beckons you to join the adventure, for it is your decisions that will shape the course of the story and determine its ultimate outcome. Imagine "Prisoners at the Fort" fused with elements of escape rooms, mazes, dragons, and abundant magic, complemented by theatrical performances, role-playing, valiant guardians, and epic battles of good versus evil. This is the essence of Fantasy Quest Esbjerg.
        </p>
      </section>
  
      <div class="events-col-story" v-for="(item, index) in storyItems" :key="index">
        <img :src="item.image" :alt="item.title" />
        <div class="layer">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import vogterkamper from '@/assets/images/giants.jpg';
  
  const storyItems = [
    { title: 'The Giants', image: vogterkamper }
  ];
  </script>