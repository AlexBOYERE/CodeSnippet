import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

import 'noty/lib/noty.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
