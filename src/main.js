import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  RiArrowDropDownFill,
  RiDoorOpenFill,
  IoArrowBack,
  BiPlusSquareFill,
  BiTrashFill
} from 'oh-vue-icons/icons'

addIcons(RiArrowDropDownFill, RiDoorOpenFill, IoArrowBack, BiPlusSquareFill, BiTrashFill)

const app = createApp(App)

app.use(router).component('v-icon', OhVueIcon).mount('#app')
