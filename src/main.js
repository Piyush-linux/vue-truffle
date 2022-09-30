import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Particles from "vue3-particles";

// this will add the particles plugin to your Vue.js app

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(Particles)
app.use(router)

app.mount('#app')
