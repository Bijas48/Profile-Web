import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { MotionPlugin } from '@vueuse/motion'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(PrimeVue)

app.mount('#app')
