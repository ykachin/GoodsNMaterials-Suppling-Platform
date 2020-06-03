import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myhead from "../components/myhead";
import myfoot from "../components/myfoot";
import login from "../components/login";
import notfound from "../components/wzgjpt/Page404";
import personalpage from "../components/wzgjpt/personalpage";
import map from "../components/wzgjpt/map";
import needer from "../components/wzgjpt/needer";
import personaldonate from "../components/wzgjpt/personaldonate";
import provider from "../components/wzgjpt/provider";

Vue.use(Router)


const router= new Router({
  /*base:'/vue-peashooter/',*/
  routes: [
    {
      path:'/login',
      component:login
    },
    {
      path:'/personalpage',
      component:personalpage
    },
    {
      path:'/map',
      component:map
    },
    {
      path:'/needer',
      component:needer
    },
    {
      path:'/personaldonate',
      component:personaldonate
    },
    {
      path:'/provider',
      component:provider
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/*', // 页面不存在的情况下会跳到404页面
      component: notfound,
    },
  ]
})


export default router;

