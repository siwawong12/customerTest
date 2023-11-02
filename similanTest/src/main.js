import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/routes'

// import '/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
