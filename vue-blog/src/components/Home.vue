<template>
<div class="bg" style="background-image:url(static/img/homebg.jpg); ">
     
	<a href="/"><button class="return">返回首页</button></a>
	<button class="return1" @click="layout">退出登录</button>

	<div class="a1">
	<img src="static/img/touxiang.png" class="tou">
	<span class="name" id="user">欢迎登陆</span>
	<span class="fans" id="em">{{author}}</span>
	
	<input class="search" placeholder="搜索"><img src="static/img/searchlogo.png" class="searchlogo">
	</div>
	
		<div id="add-blog">
        <form method="post" onsubmit="return false">
            <h2>添加博客</h2>
			<h4>当前时间：{{date}}</h4>
            <label>博客标题</label>
            <input type="text" v-model="tittle" required/>
            <div id="message">
            <label>博客内容</label>
            <textarea v-model="content"></textarea>
            </div>
                <button @click="Home">添加博客</button>
        </form>
        <div >
    
        </div>
        <div id="preview">
            <h3>博客总览</h3>  
            <p>博客标题{{tittle}}</p>
            <p>博客内容</p>
            <p>{{content}}</p>
        </div>
        </div>
	</div>
</template>

<script>
import { get } from 'http';
export default{
 name:'Home',
    data(){
        return{
                tittle:"",
                content:"",
				author:"",
				
				date:new Date()
		}
	
    },mounted(){
		   this.author=sessionStorage.getItem("username")
		   {
			     {
           let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
           this.timer = setInterval(() => {
           _this.date = new Date(); // 修改数据date
        }, 1000)
                }
		   }
	},
	 beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },

    methods:{
        Home(){ 
			let data={
                tittle:this.tittle,
				content:this.content,
				author:this.author
           }
           this.$axios.post('/api/blog/Home',data).then(res=>{
			   console.log(res)
			    if(res.data.status == 1000){
                      this.$router.push({name:'Showblog'})
				}
	   })
	},
	layout(){
			sessionStorage.removeItem("isLogin");
			sessionStorage.removeItem("username");
			this.$router.push({name:'Index'});
		}

}
}
</script>


<style scoped>
#add-blog *{
    box-sizing: border-box
}
#add-blog{
    margin: 280px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px; 
}
input[type="text"],textarea,select{
display: block;
width: 100%;
padding: 8px;
}
textarea{
    height:250px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
#checkboxes input{
 display: inline-block;
 margin-right: 10px;
}
button{
    display:block;
    margin: 20px 0;
    background: chocolate;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor:pointer;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top:10px;
}
.bg{
	position: absolute;
	width: 100%;
	height: 2100px;
	background-size:cover;
	background-repeat:no-repeat; 
  background-attachment:fixed;
	top: -40px;
	left: -4px;
}

.return{
	height:40px;
	width: 140px;
	background-color: #273D4B;
	color: #C9C9C9;
	border: #797979 1px solid;
	font-size: 18px;
	position: absolute;
	left: 1453px;
	top: 37px;
}
.return1{
	height:40px;
	width: 140px;
	background-color: #273D4B;
	color: #C9C9C9;
	border: #797979 1px solid;
	font-size: 18px;
	position: absolute;
	left: 1453px;
	top: 80px;
}
.a1{
	height:135px ;
	width: 920px;
	background-color: #FFFFFF;
	position: absolute;
	left: 500px;
	top: 100px;
	box-shadow:4px 4px 8px #C9C9C9;
}
.tou{
	width: 64px;
	height: 64px;
	border-radius: 50%;
	position: absolute;
	left: 25px;
	top: 20px;
}
.name{
    font-size: 18px;
	position: absolute;
	left: 163px;
	top:25px;
}
.fans{
	font-size: 13px;
	position: absolute;
	left: 163px;
	top:65px;
	height: 20px;
	width: 200px;
	background-color: #949494;
	color: #FFFFFF;
	border-radius: 30px;
	text-align: center
}
.focus{
	font-size: 13px;
	position: absolute;
	left: 243px;
	top:65px;
	height: 20px;
	width: 70px;
	background-color: #949494;
	color: #FFFFFF;
	border-radius: 30px;
	text-align: center
}
.search{
	width: 172px;
	height: 30px;
	border-radius: 30px;
	position: absolute;
	left: 700px;
	top: 25px;
	background-color: #F2F2F2;
	padding-left: 30px;
	
}
.searchlogo{
	width: 22px;
	height: 22px;
	position: absolute;
	left: 710px;
	top: 30px;
}
#title{
	width: 750px;
	margin: 20px;
	margin-left: 40px;
}
.write{
	width: 750px;
	height: 80px;
	margin: 20px;
	margin-left: 40px;
}
.list{
	height: 1200px;
	width: 750px;
	list-style: none;
	float: left;
	margin-top: 20px;
}
.hot{
	margin-left: 350px;
}
.hot,.review,.good{
	height: 32px;
	width: 84px;
	display: block;
	float: left;
	color: #A1A1A1;
}

button{
		cursor: pointer;
	}
	.return{
		margin-left: 10px;
		margin-top:24px;
		border: none;
		background-color: rgba(45, 48, 48, 0.425);
		border-radius:5px;
	}
	.return:hover{
		background-color: rgba(45, 48, 48, 1);
		color: white;
		border-radius:5px;
	}
	.return1:hover{
		background-color: rgba(45, 48, 48, 1);
		color: white;
		border-radius:5px;
	}
	.return1{
		margin-left: 160px;
		margin-top:-20px;
		border: none;
		background-color: rgba(45, 48, 48, 0.425);
		border-radius:5px;
	}
</style>