/*
 * @Author: g05047
 * @Date: 2023-04-12 17:00:29
 * @LastEditors: g05047
 * @LastEditTime: 2023-04-14 14:24:31
 * @Description: file content
 */
import { createApp } from 'vue';
import './style.css';
import 'amfe-flexible';
import router from './router';

import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
console.log('test');
app.use(router);
app.use(pinia);

app.mount('#app');
