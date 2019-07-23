import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Lookup from '@/components/Lookup'
import Login from '@/components/Login'
import Picblog from '@/components/Picblog'
import Pic from '@/components/Pic'
import Home from '@/components/Home'
import Register from '@/components/Register'
import topic  from '@/components/topic'
import contain from '@/components/contain'
import showblog from '@/components/showblog'
import store from '../store'



// import Topic from '@/components/Topic'
Vue.use(Router)


const router= new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Lookup',
      name: 'Lookup',
      component: Lookup
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      beforeEenter:function(to,from,next){
        console.log(to);
        console.log(from);
        if(store.state.isLogin){
            router.push({ name: 'Home' })
            next();
        }
      }
    },
    {
      path: '/Picblog',
      name: 'Picblog',
      component: Picblog
    },
    {
      path: '/Pic',
      name: 'Pic',
      component: Pic
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      beforeEenter:function(to,from,next){
        if(!store.state.isLogin){
            router.push({ name: 'Login' })
            next();
        }
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/topic',
      name: 'topic',
      component: topic
    },
    {
      path: '/contain',
      name: 'contain',
      component: contain
    },
    {
      path: '/showblog',
      name: 'Showblog',
      component :showblog
    }
  ]
  
})
router.beforeEach((to, from, next) => {
  console.log('navigation-guards');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['Home','Showblog'];
  //let isLogin =  store.state.isLogin// 是否登录
 let isLogin = window.sessionStorage.isLogin;
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (!isLogin) {
      
      router.push({ name: 'Login' })
    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'Login') {
    if (isLogin) {
      router.push({ name: 'Home' });
    }
  }
  next();
});
export default router;