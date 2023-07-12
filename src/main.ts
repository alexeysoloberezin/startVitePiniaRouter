import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';

import './assets/scss/main.scss'
import './assets/scss/vars.scss'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app');
