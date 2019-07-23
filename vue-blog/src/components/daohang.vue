<template>   
<div id="daohang">
<div class="ui buttons">
  <router-link  :to="{name:'hotposts'}">
  <button class="ui button">热门</button>
  </router-link>
  <div class="or"></div>
  <router-link  :to="{name:'moon'}">
  <button class="ui positive button">最新</button>
  </router-link>
   </div>
     <router-view></router-view>
   </div>
    </template>
    <script>
    import Router from 'vue-router';
    import hotposts from './hotposts'
    import moon from  './moon'
    const router = new Router({
    routes: [
        {path: 'hotposts',name:'hotposts', component: hotposts},
       
      ]
})
    export default {
        name:'daohang',
        router,
    }
    </script >
<style scoped>
    #daohang{
        position:relative;
        top:50px;
        left:900px;
        width: 145px;
        height: 50px;
      
    }
</style>
    
    
