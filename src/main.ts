import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from './router';
import vant from './vant';
const app = createApp(App);
vant.map(it => app.use(it));
app.use(createPinia());
app.use(router);
app.mount('#app');