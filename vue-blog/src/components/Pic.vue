<template>
<div style="background-color: #E1E1E3;width:100%;height:5100px;	position: absolute;	top: -4px;
	left: -4px;">
  <router-link to="/Picblog"><div class="return" onclick="">返回</div></router-link>
    <div class="main">
        <img src="static/img/head sculpture.png" class="headsculpture">
        <span class="username">Historicalpics</span>
        <input type="button" value="关注" class="btn">
        <ul class="tu">
            <li><img src="static/img/img4.jpg"></li>
            <li><img src="static/img/img3.jpg"></li>
            <li><img src="static/img/img2.jpg"></li>
            <li><img src="static/img/img1.jpg"></li>
        </ul>
    </div>
    <div class="part">
    <p>相关推荐</p>
    <ul >
        <li><img src="static/img/4.jpg"></li>
        <li><img src="static/img/3.jpg"></li>
        <li><img src="static/img/2.png"></li>
        <li><img src="static/img/1.png"></li>
        <li><img src="static/img/8.jpg"></li>
        <li><img src="static/img/图片推荐-5.jpg"></li>
        <li><img src="static/img/图片推荐-6.jpg"></li>
        <li><img src="static/img/图片推荐-7.jpg"></li>
        <li><img src="static/img/图片推荐-4.jpg"></li>
        <li><img src="static/img/图片推荐-3.jpg"></li>
        <li><img src="static/img/图片推荐-2.jpg"></li>
        <li><img src="static/img/图片推荐-1.jpg"></li>
    </ul>
    </div>
</div>
</template>


<script>
export default {
  name: 'pic',
}
</script>


<style scoped>

.return{
    cursor:pointer;
    border:2px solid #666666;
    background-color: #273D4B;
    color:#C9C9C9;
    height:40px;
    width: 140px;
    line-height:40px;
    font-size: 20px;
    text-align: center;
    position: absolute;
    left: 1430px;
    top:25px;
}
.main{
    position: absolute;
    left: 350px;
    top:93px;
    height: 4900px;
    width: 900px;
    background-color: white;
    margin-bottom: 80px;
}
.part{
    position: absolute;
    left: 1280px;
    top:93px;
    height: 4900px;
    width: 300px;
    background-color: white;
    margin-bottom: 80px;
}
.headsculpture{
    position: absolute;
    left: 78px;
    top: 30px;
    height: 62px;
    width: 62px;
}
.username{
    font-size: 20px;
    height: 28px;
    width: 120px;
    position: absolute;
    left:168px;
    top:40px;
}
.btn{
    height: 33px;
    width: 93px;
    line-height: 33px;
    text-align: center;
    background-color: #ffffff;
    color: #66cc33;
    border: 1px solid #66cc33;
    border-radius: 5px;
    font-size: 20px;
    position:absolute;
    left:750px;
    top:40px;
}
.btn:hover{
    cursor:pointer;
    background: #66cc33;
    color: #ffffff;
}
:focus{
    outline: 0;
}
.main ul{
    margin-top: 100px;
    list-style: none;
    margin-left: -40px;
}
.tu img{
    margin-left: 0px;
    width: 900px;
    margin-top:20px;
}
.part ul{
    margin-top: 20px;
    list-style: none;
    margin-left: 10px;
}
.part img{
    margin-left: -35px;
    width: 270px;
    margin-top:20px;
}
.part p{
    margin-left: 30px;
    margin-top: 40px;
    font-size: 20px;
}
</style>
