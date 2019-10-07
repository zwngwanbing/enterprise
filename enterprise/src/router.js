import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/uploading',
      name: 'uploading',
      component: () => import('./views/spread/upload/Uploading.vue'),//上传应用
      children: [
        { path: '/fill',name: 'fill', component: () => import('./views/spread/upload/Fill.vue')},//填写信息
        { path: '/select',name: 'select', component: () => import('./views/spread/upload/Select.vue')},//选择套餐
        { path: '/download',name: 'download', component: () => import('./views/spread/upload/Download.vue')},//下载签名包
      ],
    }, {
      path: '/enterprise',
      name: 'enterprise',
      component: () => import('./views/spread/Enterprise.vue')//企业签账单
    },{
      path: '/betails',
      name: 'betails',
      component: () => import('./views/betails/Betails.vue')//详情
    }
  ]
})
