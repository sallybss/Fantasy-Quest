<template>
    <div id="faq">
      <h1>FAQ</h1>
      <ul id="accordion">
        <li v-for="(question, index) in faqItems" :key="index">
          <label :for="question.id" @click="toggleAccordion(index)">
            {{ question.question }}
            <span v-html="question.expanded ? '&#x3e;' : '&#x3c;'"></span>
          </label>
          <input type="radio" name="accordion" :id="question.id" :checked="question.expanded">
          <div class="content" v-show="question.expanded">
            <p>{{ question.answer }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const faqItems = ref([
    {
      id: 'first',
      question: 'Who can participate in the Fantasy Quest?',
      answer: 'The Fantasy Quest is open to adventurers of all ages! Whether you\'re a seasoned warrior or a novice explorer, everyone is welcome to join the adventure and experience the thrill of the quest. We recommend the Day Quest for children and the Night Quest for adults.',
      expanded: true
    },
    {
      id: 'second',
      question: 'How can I find myself around the Quest?',
      answer: 'You will be led by the characters of the story. Additionally, you will be able to find your way looking at the banners, posters, and the sticker dragon footprints on the floor. The starting location is TORVET.',
      expanded: false
    },
    {
      id: 'third',
      question: 'How long does the Fantasy Quest typically last?',
      answer: 'The duration of the Fantasy Quest can vary depending on how quickly participants progress through the challenges. On average, adventurers can expect the quest to last between one and a half hours.',
      expanded: false
    },
    {
      id: 'fourth',
      question: 'Can I participate in the Fantasy Quest alone, or do I need to join a team?',
      answer: 'Solo adventurers are welcome to join the quest, as everyone will be split into teams. Teamwork and collaboration are essential elements of the Fantasy Quest, allowing adventurers to support each other and overcome the challenges they encounter along the way.',
      expanded: false
    },
    {
      id: 'fifth',
      question: 'What should I bring with me on the Fantasy Quest?',
      answer: 'We recommend wearing comfortable clothing and footwear suitable for walking and exploring. It\'s also a good idea to bring along any necessary personal items, such as water, snacks, and sunscreen, to ensure you\'re prepared for the journey ahead. Don\'t forget to bring your sense of adventure and curiosity!',
      expanded: false
    }
  ]);
  
  const toggleAccordion = (index) => {
    faqItems.value.forEach((item, i) => {
      if (i === index) {
        item.expanded = !item.expanded;
      } else {
        item.expanded = false;
      }
    });
  };
  </script>
