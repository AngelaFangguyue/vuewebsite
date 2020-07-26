import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

//createApp(App).mount('#app')

import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


