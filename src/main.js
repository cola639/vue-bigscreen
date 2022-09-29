import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store/store'
import * as echarts from 'echarts'

import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.echarts = echarts

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
