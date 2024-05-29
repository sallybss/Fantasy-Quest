<template>
  <div id="header">
    <section class="header">
      <nav>
        <router-link to="/"><img :src="logo" class="logo" alt="Logo" /></router-link>
        <div class="nav-links">
          <ul>
            <li><a href="#header">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#intro">STORY</a></li>
            <li><a href="#quests">QUESTS</a></li>
            <li><a href="#googlemap">LOCATION</a></li>
            <li><a href="#faq">FAQ</a></li>
            
            <li><a href="https://www.universe.com/users/esbjerg-kommunes-biblioteker-QLCK34" class="ticketbtn" target="_blank">BUY TICKETS</a></li>
          </ul>
        </div>
        <div class="menu-icon" @click="toggleSideMenu">&#9776;</div>
        <div id="side-menu" class="side-menu" :style="{ width: sideMenuWidth + 'px' }">
          <a href="javascript:void(0)" class="closebtn" @click="toggleSideMenu">&times;</a>
          <a href="#header">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#intro">STORY</a>
          <a href="#quests">QUESTS</a>
          <a href="#googlemap">LOCATION</a>
          <a href="#faq">FAQ</a>
        </div>
      </nav>
      <img :src="fantasy" alt="Fantasy Quest" class="fantasy" />
      <div class="text-container">
        <p>
          Come join us in the Fantasy Quest, a magical adventure unique in the whole wide world.<br> On the 14 of September you will have
          the opportunity to experience a real life quest, for kids and adults to enjoy! <br>Are you ready to overcome the evil forces and
          save the world?
        </p>
        <a href="https://www.universe.com/users/esbjerg-kommunes-biblioteker-QLCK34" class="ticket-btn" target="_blank">BUY TICKETS</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import logoImageSrc from '@/assets/images/logo1.png';
import fantasy from '@/assets/images/logoto.png';

const logo = ref(logoImageSrc);
const sideMenuWidth = ref(0);

function toggleSideMenu() {
    sideMenuWidth.value = sideMenuWidth.value === 250 ? 0 : 250;
}
</script>
