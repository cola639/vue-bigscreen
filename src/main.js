import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store/store'
import moment from 'moment'
import * as echarts from 'echarts'

import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts // global
Vue.prototype.$moment = moment // global

Vue.use(ElementUI)
moment.locale('zh-cn')

console.log('process.env.ENV', process.env.NODE_ENV)
if (process.env.ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
