import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import anime from 'animejs';

const app = createApp(App);

app.use(router);

app.mount('#app');