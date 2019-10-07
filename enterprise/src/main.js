import Vue from 'vue'
import App from './App.vue'
import router from './router'
//插件模块引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//全局配置
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
