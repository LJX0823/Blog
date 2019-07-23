<template>

<div>
	 <Nav></Nav>
	 <div style="margin-left: 955px;margin-top: -18px;">
      <img src="static/img/首页-三角形.png">
    </div>
        <div class="pic">
            <div class="pic1">
            	<img src="static/img/head sculpture.png" class="headsculpture">
				<span class="username">Historicalpics</span>
				<router-link to="Pic"><img src="static/img/1.png" class="longPicture"></router-link>
            </div>
            <div class="pic1">
				<img src="static/img/head sculpture.png" class="headsculpture">
				<span class="username">Historicalpics</span>
					<router-link to="Pic"><img src="static/img/2.png" class="longPicture"></router-link>
            </div>
            	<div class="pic1">
				<img src="static/img/head sculpture.png" class="headsculpture">
				<span class="username">Historicalpics</span>
					<router-link to="Pic"><img src="static/img/3.jpg" class="longPicture"></router-link>
            </div>
        </div>
        <div class="pic">
				<div class="pic2">
					<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/11.png" class="shortPicture"></router-link>
				</div>
				<div class="pic2">
					<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/22.png" class="shortPicture"></router-link>
				</div>
				<div class="pic2">
					<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/33.png" class="shortPicture"></router-link>
				</div>
				<div class="pic2">
					<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/44.png" class="shortPicture"></router-link>
					</div>
		</div>
		<div class="pic">
				<div class="pic1">
					<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/4.jpg" class="longPicture"></router-link>
				</div>
				<div class="pic1">
					<img src="static/img/head sculpture.png" class="headsculpture">
				<span class="username">Historicalpics</span>
					<router-link to="Pic"><img src="static/img/5.jpg" class="longPicture"></router-link>
				</div>
					<div class="pic1">
					<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/6.jpg" class="longPicture"></router-link>
				</div>
			</div>
			<div class="pic">
					<div class="pic2">
						<img src="static/img/head sculpture.png" class="headsculpture">
						<span class="username">Historicalpics</span>
							<router-link to="Pic"><img src="static/img/55.png" class="shortPicture"></router-link>
					</div>
					<div class="pic2">
						<img src="static/img/head sculpture.png" class="headsculpture">
						<span class="username">Historicalpics</span>
							<router-link to="Pic"><img src="static/img/66.png" class="shortPicture"></router-link>
					</div>
					<div class="pic2">
						<img src="static/img/head sculpture.png" class="headsculpture">
						<span class="username">Historicalpics</span>
							<router-link to="Pic"><img src="static/img/77.png" class="shortPicture"></router-link>
					</div>
					<div class="pic2">
						<img src="static/img/head sculpture.png" class="headsculpture">
						<span class="username">Historicalpics</span>
							<router-link to="Pic"><img src="static/img/88.png" class="shortPicture"></router-link>
						</div>
			</div>
			<div class="pic">
					<div class="pic1">
						<img src="static/img/head sculpture.png" class="headsculpture">
						<span class="username">Historicalpics</span>
							<router-link to="Pic"><img src="static/img/7.jpg" class="longPicture"></router-link>
					</div>
					<div class="pic1">
						<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/8.jpg" class="longPicture"></router-link>
					</div>
						<div class="pic1">
						<img src="static/img/head sculpture.png" class="headsculpture">
					<span class="username">Historicalpics</span>
						<router-link to="Pic"><img src="static/img/9.jpg" class="longPicture"></router-link>
					</div>
				</div>
		<br />
		<br/>
	<bottom></bottom>
</div>
</template>


<script>
import Nav from '@/components/Nav'
import Bottom from '@/components/Bottom'
export default {
	name: 'picblog',
	components:{
    Nav,
    Bottom
  }
}
</script>


<style scoped>
.pic{
            height: 1060px;
            width: 230px;
            float: left;
            margin-top: 50px;
            margin-left: 20px;
            position: relative;
            left:300px;
        }
        .pic1{
            height: 340px;
            width: 230px;
            background-color: #fff;
            margin-bottom: 20px;
            font-size: 10px;
			border:1px solid rgb(218, 212, 212);
		}
		.pic2{
            height: 252.5px;
            width: 230px;
            background-color: #fff;
            margin-bottom: 20px;
            font-size: 10px;
			border:1px solid rgb(218, 212, 212);
		}
		.headsculpture{
			margin-left: 10px;
			margin-top: 5px;
			height: 22px;
			width: 22px;
		}
		.longPicture{
			height:280px;
			width:200px;
			margin-left:15px;
			margin-top:15px
		}
		.shortPicture{
			height:170px; 
			width:200px;
			margin-left:15px;
			margin-top:30px
		}
		.styA{
			color:#ADADAD;
			text-decoration:none;
			padding-left: 35px;
			font-size: 20px;
		}
		.styB{
			color:black;
			text-decoration:none;
			padding-left: 35px;
			font-size: 18px;
		}
		.styC{
			color:black;
			text-decoration:none;
			padding-left: 20px;
			font-size: 18px;
		}
		.shadow{
			-webkit-box-shadow: #CDCDB4 0px 0px 10px;
			-moz-box-shadow: #CDCDB4 0px 0px 10px;
			box-shadow: #CDCDB4 0px 0px 10px;
			background: #EEFF99;
			}
		body{
			background-color: #F2F2F2;
		}
		a:hover{
			color: #CD853F;
		}
</style>
