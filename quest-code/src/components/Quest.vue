<template>
  <div id="quests">
    <div class="container-quests">
      <h1 class="sub-title">QUESTS</h1>
      <p>*Hover for more information</p>
      <div class="quest-list">
        <div class="quest" v-for="(quest, index) in quests" :key="index">
          <img :src="quest.image" :alt="quest.alt" />
          <div class="layer-quest">
            <h3>{{ quest.title }}</h3>
            <p>{{ quest.description }}</p>
            <img v-if="quest.youtuber" :src="youtuberImage" class="small-image" :alt="quest.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import youtuberImage from '@/assets/images/youtuber.png';
import day from '@/assets/images/sunnyday3-01.png';
import night from '@/assets/images/stars4-01.png';

const quests = [
  {
    title: 'DAY QUEST',
    image: day,
    alt: 'Day Quest',
    description: "The family edition of Fantasy Quest Esbjerg is an experience run for the whole family. You will meet magical creatures that will set challenges along the way towards the goal, which you must solve together to complete the Quest. Strength and cooperation skills are needed if you are to help save Esbjerg. As an added bonus, you can meet the YouTuber Rasmus Kolbe!",
    youtuber: true
  },
  {
    title: 'NIGHT QUEST',
    image: night,
    alt: 'Night Quest',
    description: "When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg. If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We will send you and your friends on your ultimate adventure in Esbjerg's streets and alleys. Here you will have to collaborate and devise new solutions to complete the AftenQuest."
  }
];
</script>