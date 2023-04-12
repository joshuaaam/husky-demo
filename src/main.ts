import { createApp } from 'vue';
import './style.css';
import 'amfe-flexible';
import router from './router';

import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');
