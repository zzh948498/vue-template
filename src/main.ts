import './index.css';
import vant from './vant';

import { createApp } from 'vue';
import { router } from './router';

import App from './App.vue';
import { createPinia } from 'pinia';
const app = createApp(App);
vant.map(it => app.use(it));
app.use(createPinia());
app.use(router);
app.mount('#app');
