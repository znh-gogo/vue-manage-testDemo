import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/Pages/home'
import news from '@/Pages/news'
import login from '@/Pages/login'
import interview from '@/Pages/interview'
import newsDetail from '@/Pages/newsDetail'
import weather from '@/Pages/weather'
import chart from '@/Pages/chart'
import novelDetail from '@/Pages/novelDetail'
import hotJoke from '@/Pages/hotJoke.vue'
import baiduMap from '@/Pages/baiduMap.vue'
import UserList from '@/Pages/UserList.vue'
import editList from '@/Pages/editList.vue'
import numList from '@/Pages/numList.vue'
import imgWall from '@/Pages/imgWall.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      mode:'hash',
      path: '/',
      name: 'home',
      component: home,
      redirect: '/main/news'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {

      path: '/main',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {path: '/main/news', name: 'news', component: news},
        {path: '/main/interview', name: 'interview', component: interview},
        {path: '/main/newsDetail', name: 'newsDetail', component: newsDetail},
        {path: '/main/weather', name: 'weather', component: weather},
        {path: '/main/chart', name: 'chart', component: chart},
        {path: '/main/novelDetail', name: 'novelDetail', component: novelDetail},
        {path: '/main/hotJoke', name: 'hotJoke', component: hotJoke},
        {path: '/main/baiduMap', name: 'baiduMap', component: baiduMap},
        {path: '/main/UserList', name: 'userList', component: UserList},
        {path: '/main/editList', name: 'editList', component: editList},
        {path: '/main/numList', name: 'numList', component: numList},
        {path: '/main/imgWall', name: 'imgWall', component: imgWall}


      ]
    }
  ]
})
