import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.error('Error:', err);
  console.error('Component:', vm);
  console.error('Info:', info);
}

app.mount('#app')
