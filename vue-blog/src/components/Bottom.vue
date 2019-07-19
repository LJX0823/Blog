<template>
    


<div
      class="shadow"
      style="width: 1240px; height: 200px; background-color: white;position:absolute;top:1320px;left:327px;margin-bottom:50px;border: 1px solid #DBDBDB;"
      id="bottom"
    >
      <div style="padding-top: 50px;padding-left: 20px;position: relative;">
        <a class="styB" href="#">关于我们</a>
        <a class="styB">|</a>
        <a class="styB" href="#">客户服务</a>
        <br>
        <br>
        <a class="styB" href="#">招聘信息</a>
        <a class="styB">|</a>
        <a class="styB" href="#">隐私政策</a>
        <br>
        <br>
        <a class="styB" href="#">广告服务</a>
        <a class="styB">|</a>
        <a class="styB" href="#">意见反馈</a>
      </div>
      <div style="float: left;position: relative;margin-top: -130px;margin-left: 600px;">
        <a>微信公众号</a>
        <a style="margin-left: 300px;">QQ</a>
        <br>
        <img
          style="width: 110px; height: 110px; margin-top: 10px;margin-left: -18px;"
          src="static/img/首页-二维码.png"
        >
        <img style="width: 110px; height: 110px;margin-left: 245px;" src="static/img/首页-二维码.png">
      </div>
    </div>

    </template>
    <script>
export default{
  name:'Bottom'
}
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
</style>
