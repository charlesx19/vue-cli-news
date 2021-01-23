import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
import store from './store'

createApp(App).use(store).mount('#app')
