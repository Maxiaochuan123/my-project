import { createApp } from 'vue'
import naive from 'naive-ui'
import Components from 'my-components'
import App from './App.vue'

import './style.css'

const app = createApp(App)

// 确保 naive-ui 在 my-components 之前注册
app.use(naive)
app.use(Components)

app.mount('#app')