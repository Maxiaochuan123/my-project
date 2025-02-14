import { createApp } from 'vue'
import naive from 'naive-ui'
import Components from 'my-components'
import App from './App.vue'

import './style.css'

const app = createApp(App)
app.use(naive)
app.use(Components)
app.mount('#app')
