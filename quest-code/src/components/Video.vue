<template>
  <div id="video">
    <div class="video-container">
      <iframe
      class="youtube-video"
      width="800"
      height="315"
      :src="videoSrc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const videoSrc = ref('https://www.youtube.com/embed/zxhG5GfQfFQ?si=uNvYNjRV9rGVYty_');
</script>