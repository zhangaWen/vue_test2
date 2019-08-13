import Vue from "vue"
import App from './App.vue'
import store from './store'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import './api'

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Star', Star)
new Vue({
    el: '#app',
    render: h => h(App),  // 函数返回组件标签<App/>
    // render: createElement => createElement(App)
     router, // 配置路由器
     store   //配置vuex的store
  })
