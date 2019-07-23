<template>
<div class="content" style="background-image:url(static/img/loginbg.jpg);">
        <div class="title">
            <div class="name">青鸟博客</div>
            <div class="topic">让生活·更生活</div>
        </div>
     <div class="right">
      <div class="Rcontent">
         <p class="title1">账号登录</p><hr>
    
         <form method="post" onsubmit="return false"> 
        
         <input placeholder="用户名" id="RC1" type="text" name="user" value=""  v-model="username"> <center id="lip"></center>
         <input placeholder="密码" id="RC2" type="password" name="password" value="" v-model="password">
        <input id="sum" type="submit" value="登录" @click="login"/>
        <center id="lip">{{message}}</center>

        </form>
        <router-link to="/Register" class="rl1">没有账号?点击注册</router-link>
      </div>   
     </div>

     <div id="backbtn">
        <div id="btn_div">
        <div id="btn_text">
         <router-link to="/" class="rl2" >返回首页</router-link>
         </div>
        </div>
      </div>
    

    </div>
</template>


<script>
import { link } from 'fs';
export default {
  name: 'Login',
  data(){
      return{
          username:'',
          password:'',
          message:''

      }
  },
  methods:{
       login(){
           let data={
               username:this.username,
               password:this.password
           }
           this.$axios.post('/api/user/login',data).then(res=>{
               console.log(res)
               if(res.data.status == 1000){
               this.$router.push({name: 'Home'});
               this.$store.commit("login");
               sessionStorage.setItem("isLogin",this.$store.state.isLogin );
               sessionStorage.setItem("username",res.data.username);
               }
               else{
                   this.message='账号或密码错误';
               }

               
           }).catch((err)=>{
               console.log(err);
           })
           
       }
  }
}
</script>


<style scoped>
.content{
          width:1920px;
          display: block;
          position: absolute;
          height: 100%; 
    }
    .left{
        width: 531px;
        height: 519px;
        position: absolute; 
        left: 288px;
        top: 200px;
    }
    .right{
        width: 550px;
        height: 520px;
        position: absolute;  
        left: 36%;
        top: 230px;
        margin-left: auto; 
        margin-right: auto; 
        background-color: rgba(45, 48, 48, 0.425);
    }
    body{
        /* background-image:url(static/img/loginbg.jpg); */
        background-repeat:no-repeat;
        background-size:100%
    }
    .Rcontent{
        border-radius: 6px;
        position: absolute;
        left: 42px;
        top: 36px;
        width: 460px;
        height: 430px;
        text-align: center;
        line-height: normal;
        background-color: white;
        font-size: 16px;
        color: rgb(153, 153, 153);
    }
    .title1{
        font-size:29px;
        margin-top:12px;
        color: black;
       
        text-align: center;
    }
    .rl1{
        text-decoration:none;
        color:rgb(131, 129, 129);
        margin-left: -265px;

    }
    .rl1:hover{
        color:darkorange;
    }
    .rl2{
        text-decoration:none;
        color:#fff;
        position: relative;
        top: -1px;
        left: 28px;
    }
    #RC1{
        font-size: 20px;
        position: absolute;
        left: 28px;
        top: 110px;
        width: 397px;
        height: 50px;
        font-family: 'Arial Normal', 'Arial';
        font-weight: 400;
        font-style: normal;
    }
    #RC2{
        font-size: 20px;
        position: absolute;
        left: 28px;
        top: 200px;
        width: 397px;
        height: 50px;
        font-family: 'Arial Normal', 'Arial';
        font-weight: 400;
        font-style: normal;
    }
    #RC3{
        position: absolute;
        left: 28px;
        top: 290px;
        width: 18px;
        height: 18px;
    }
    #Rbutton{
        position: absolute; 
        width: 397px;
        height: 52px;
        background-color: rgba(39, 61, 75, 1);
        top:340px;
        left:30px;
    }
    #btn_text {
    top: 7px; transform-origin: 68px 13px;
    border-width: 0px;
    position: absolute;
    left: 2px;
    top: 8px;
    width: 136px;
    word-wrap: break-word;
    }
    #backbtn:hover{
        background-color: rgba(39, 61, 75, 1);
        border-radius: 5px;
    }
    #backbtn{
    cursor: pointer;
    border-width: 0px;
    position: absolute;
    left: 1625px;
    top: 80px;
    width: 140px;
    height: 40px;
    font-size: 20px;
    color: #C9C9C9;
    }
    #btn_div{
    border-width: 0px;
    width: 140px;
    height: 40px;
    background: inherit;
    background-color: rgba(39, 61, 75, 0.514);
    box-sizing: border-box;
    border-radius: 5px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 20px;
    color: #C9C9C9;
    }
    a:hover{
			color: darkorange;
		}
    #sum{
        outline: none;
        cursor: pointer;
        width:400px;
        height:50px;
        font-size: 24px;
        background-color:rgba(39, 61, 75, 1);
        color: white;
        border: 2px solid;
        border-radius:10px;
        z-index: 99;
        margin-top: 220px;
        margin-left: -7px}
    #sum:hover{
        background-color:white;
        color: rgba(39, 61, 75, 1);
    }
    .name{
        font-family:"Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";
        font-size: 92px;
        letter-spacing:8px;
    }
    .topic{
        margin-right: px;
        font-family:"Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";
        font-size: 40px;
        letter-spacing:16px;
        margin-top: 75px
    }
    .title{
        position: relative;
        left: 10px;
        top:70px;
        text-align: center;
        color: #fff;
    } 
    span:hover{
			color:darkorange;
        }
    #lip{
        position: absolute;
        top:62%;
        left:6%;
        font-size: 18px;
        color: red;
    }
</style>
