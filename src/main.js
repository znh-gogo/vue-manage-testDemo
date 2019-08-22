// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
import 'iview/dist/styles/iview.css'
import global from './Global'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
Vue.prototype.$echarts = echarts
// Vue.use(axios)
Vue.use(iView, {
  transfer: true,
  size: 'large',
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
})
Vue.config.productionTip = false
Vue.prototype.$global = global;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
