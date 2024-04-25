import { createApp } from 'vue'
import App from './App.vue'

// 全局引入
// import CCUI from 'ccowo-ui'
import 'ccowo-ui/dist/style.css'

const app = createApp(App)

// app.use(CCUI)

app.mount('#app')