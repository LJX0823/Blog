<template>
  <div class="bg" style=" background-image:url(static/img/注册bg.jpg);">
    <div id="u2" class="ax_default button legacyPulsateBorder" style="cursor: pointer;">
      <div id="u2_div" class tabindex="0"></div>
      <div id="u2_text" class="text" style="top: 7px; transform-origin: 68px 13px;">
        <router-link to="/">
          <a href="/" style="text-decoration:none;color:white">
            <p>
              <span>返回首页</span>
            </p>
          </a>
        </router-link>
      </div>
    </div>
    <div id="content">
      <div id="from">
        <div style="position:relative;top:10px;">
          <p style="font-size:29px;margin-top:20px;color: black">注册账号</p>
        </div>
        <hr>
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

        <router-link to="/Login" style="text-decoration:none;font-size: 16px;margin-left:-250px;">已有账号？点击登录
        </router-link>
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

  #Rbutton {
    position: absolute;
    width: 397px;
    height: 52px;
    background-color: rgba(39, 61, 75, 1);
    top: 340px;
    left: 30px;
  }

  #u2_text {
    border-width: 0px;
    position: absolute;
    left: 2px;
    top: 8px;
    width: 136px;
    word-wrap: break-word;
  }

  #u2:hover {
    background-color: rgba(39, 61, 75, 1);
    border-radius: 5px;
  }

  #u2 {
    border-width: 0px;
    position: absolute;
    left: 1733px;
    top: 51px;
    width: 140px;
    height: 40px;
    font-size: 20px;
    color: #c9c9c9;
  }

  #u2_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
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
    color: #c9c9c9;
  }

  #u2 p {
    text-align: center;
    margin: 0px;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern"1;
    -webkit-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern=1";
    font-kerning: normal;
  }

  #img {
    position: absolute;
    left: 208px;
    top: 250px;
  }

  #from {
    background-color: white;
    width: 460px;
    height: 620px;
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
    margin-top: 10px;
    cursor: pointer;
    width: 400px;
    height: 50px;
    font-size: 24px;
    background-color: rgba(39, 61, 75, 1);
    color: white;
    border: 2px solid;
    border-radius: 10px;
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

  #content {
    background-color: rgba(45, 48, 48, 0.425);
    width: 550px;
    height: 700px;
    position: absolute;
    left: 36.4%;
    top: 100px;
  }

  #lip {
    position: absolute;
    top: 73%;
    left: 13%;
    font-size: 18px;
  }

  .changecolor {
    border: 2px red solid;
  }
</style>