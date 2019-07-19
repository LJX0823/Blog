<template>
  <div
    id="app1"
    style="background-color:#273D4B;width: 1920px;height: 120px;margin-left: -8px"
  >
    <div style=" position:absolute;left:1800px" v-if="username">
      <router-link to="Home"> <img src="static/img/touxiang.png" class="tou"></router-link>
    </div>
    <div style="padding-left: 1250px;padding-top: 8px;" v-else>
      <router-link to="/Register" class="styA">注册</router-link>
      <a class="styA">|</a>
      <router-link to="Login" class="styA">登陆</router-link>
    </div>
    <h1 style="color: white;font-size: 35px; margin: 0px; padding:0px 0px 0px 500px">青鸟博客</h1>
    <div style="margin: -30px 0px 0px 700px;">
      <router-link to="/" class="styA">首页</router-link>
      <router-link to="topic" class="styA">热门话题</router-link>
      <router-link to="Picblog" class="styA">图片博客</router-link>
    </div>
    <div style="margin-top: -25px;margin-left: 1250px;">
      <input
        type="text"
        name="search"
        placeholder="          搜索用户,文章"
        style="background-image:url(static/img/放大镜.png);
						        background-repeat: no-repeat;
						        width: 230px;
						        height: 24px; 
						        background-color:#182630;
						        color: white;
						        border: solid 1px #182630;
						        border-radius: 50px;"
      >
      <router-link to="Lookup" class="styA" style="margin-left:-90px;" >搜索</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data: function() {
    return {
      username: false
    };
  },
  mounted: function() {
    this.username = sessionStorage.getItem("username");
  }
  // computed:{
  //   isLogin(){
  //     if(sessionStorage.getItem("username")){
  //       return this.$store.state.isLogin;
  //     }
  //   }
  // }
};
</script>
<style scoped>
* {
  list-style: none;
}

.styA {
  color: #adadad;
  text-decoration: none;
  padding-left: 35px;
  font-size: 20px;
}

.styB {
  color: black;
  text-decoration: none;
  padding-left: 35px;
  font-size: 18px;
}

.styC {
  color: black;
  text-decoration: none;
  padding-left: 20px;
  font-size: 18px;
}

.shadow {
  -webkit-box-shadow: #cdcdb4 0px 0px 10px;
  -moz-box-shadow: #cdcdb4 0px 0px 10px;
  box-shadow: #cdcdb4 0px 0px 10px;
  background: #eeff99;
}

body {
  background-color: #f2f2f2;
}

#right li {
  list-style: none;
  display: inline-block;
  border: none;
  height: 30px;
  line-height: 30px;
  width: 100px;
  padding-top: 10px;
}

a:hover {
  color: #cd853f;
}

.image-enter-active {
  transition: all 1.5s linear;
}

.image-leave-active {
  transition: all 1.5s linear;
}

.image-enter-to {
  transform: translateX(0);
}

.image-enter {
  transform: translateX(100%);
}

.image-leave {
  transform: translateX(0);
}

.image-leave-to {
  transform: translateX(-100%);
}

.active {
  opacity: 1;
}

.app {
  height: 100%;
  width: 100%;
  display: flex;
  margin-top: 0px;
  position: relative;
}

.app img {
  width: 260px;
  height: 320px;
}
.tou{
  border-radius: 50%;
}
</style>

