import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);

app.mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  