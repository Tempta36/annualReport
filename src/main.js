import Vue from 'vue'
import App from './App.vue'
import './utils/api'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App)
}).$mount('#app')
