<template>
  <div class="bg" style=" background-image:url(static/img/注册bg.jpg);">
    <div id="content">
      <div id="form">
        <p class="title1">注册账号</p><hr>
        <form method="post" onsubmit="return false">
          <center id="lip">{{message}}</center>用&nbsp户&nbsp名&nbsp&nbsp:
          <input id="username" type="text" name="user" value placeholder="请输入3位以上用户名" v-model="username"
            v-bind:class={changecolor:flag}>
          <br>
          <br>密&nbsp&nbsp &nbsp&nbsp&nbsp码&nbsp&nbsp:
          <input id="sinput" type="password" name="password" value placeholder="请输入6位以上密码" v-model="password">
          <br>
        

          <input id="sum" type="submit" value="注册" @click="resgister">
        </form>

        <router-link to="/Login" class="rl1">已有账号？点击登录
        </router-link>
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
  export default {
    name: "register",
    data: function () {
      return {
        username: '',
        password: '',
        message: '',
        flag: false,

      }

    },
    methods: {
      resgister() {
        let data = {
          username: this.username,
          password: this.password
        }
        this.$axios.post('/api/user/register', data).then((res) => {
          console.log(res)
          if (res.data.status == 1000) {
            this.message = res.data.message+'马上跳转';
           setTimeout(() => {
             this.$router.push({name:'Home'})
             
           }, 2000 );
            
          } else {
            this.message = res.data.message;
            //this.$router.push("/Resgiter")
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }

  };

</script>


<style scoped>
  .title1{
        font-size:29px;
        color: black;
        padding-top: 20px;
    }
  .bg {
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  body {
    background-repeat: no-repeat;
    background-size: 100%;
  }
  input{
    margin-top:20px;
  }
  #Rbutton {
    position: absolute;
    width: 397px;
    height: 52px;
    background-color: rgba(39, 61, 75, 1);
    top: 340px;
    left: 30px;
  }
  .rl1{
    font-size: 16px;
        text-decoration:none;
        color:rgb(131, 129, 129);
        margin-left: -255px;
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
  #img {
    position: absolute;
    left: 208px;
    top: 250px;
  }
  #content {
    background-color: rgba(45, 48, 48, 0.5);
    width: 550px;
    height: 520px;
    position: absolute;
    left: 36%;
    top: 230px;
  }
  #form {
    background-color: white;
    width: 460px;
    height: 430px;
    margin-left: 42px;
    margin-top: 40px;
    border-radius: 5px;
    text-align: center;
    line-height: normal;
    font-size: 20px;
    color: black;
  }

  #username {
    width: 300px;
    height: 50px;
  }

  #sinput {
    width: 300px;
    height: 50px;
  }

  #sinput1 {
    width: 300px;
    height: 50px;
  }

  #email {
    width: 300px;
    height: 50px;
  }

  #tel {
    width: 300px;
    height: 50px;
  }

  #sum {
    margin-top: 50px;
    cursor: pointer;
    width: 400px;
    height: 50px;
    font-size: 24px;
    background-color: rgba(39, 61, 75, 1);
    color: white;
    border: 2px solid;
    border-radius: 10px;
    outline: none;
  }

  #sum:hover {
    background-color: white;
    color: rgba(39, 61, 75, 1);
  }

  a {
    color: rgb(131, 129, 129);
    text-decoration: none;
  }

  a:hover {
    color: darkorange;
  }

  

  #lip {
    position: absolute;
    top: 62%;
    left: 14%;
    font-size: 18px;
    color: red;
  }

  .changecolor {
    border: 2px red solid;
  }
</style>