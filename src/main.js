import { createApp } from 'vue'
import App from './App.vue'
import CCUI from './components/index'
console.log(CCUI)

const app = createApp(App)

app.use(CCUI) 

app.mount('#app')