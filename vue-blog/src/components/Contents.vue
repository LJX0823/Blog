<template>
    

<div>
<div id="body">

		<div class="shadow"
			style="position: absolute;width: 310px; height: 370px; background-color: white;margin-left: 320px;display: flex;">
			<div style="width: 260px;height: 350px;padding-left: 25px;padding-top: 25px;overflow: hidden;">
				<Lbt></Lbt>
			</div>
		</div>


		<div class="shadow"
			style="position: absolute;width: 550px; height: 450px; background-color: white;margin-left: 665px;">
			<div style="width: 500px;height: 350px;padding-left: 25px;padding-top: 15px;">
				<a class="styC" href="/hotposts">热门文章</a>
				<hr />
				<img style="width:480px;height:300px;margin-left:10px;" src="static/img/热门文章1.jpeg">

				<p style="font-size: 20px;text-indent:2em;margin-top: -1px;">
					从委内瑞拉这场内乱爆发至今，俄方一直各个方面给予委莫大的支持和帮助。而美国却在这场内乱背后推波助澜，是这场内乱中反对派的<a
						style="color: #CD853F;text-decoration: NONE;" href="/hotposts">“查看全文”</a></p>
			</div>
		</div>


		<div class="shadow"
			style="position: absolute;width: 310px; height: 290px; background-color:white;margin-left: 1250px;">
			<img src="static/img/首页111.jpg" style="width: 260px; height: 260px;margin-top: 15px;margin-left: 25px;">
			
		</div>	<br />
	<div class="shadow"
		style="position: absolute;width: 310px; height: 430px; background-color: white;margin-left: 320px;margin-top: 375px;">
		<div style="width: 260px;height: 350px;padding-left: 15px;padding-top: 15px;">
			<a class="styC" href="/topic">最新话题</a>
			<hr />
			<a class="styC" style="font-size: 18px;" href="/topic">
				【惊险！公交司机昏迷前紧急拉手刹停车[吃惊]】28日，安徽合肥一辆11路公交车从火车站开往盛大社区，当车行驶到祁门路青年塘站附近时，驾驶员曹跃华！ ​​​​...
				<br />
				<br />
				在香港深水埗，有一家老牌蛇羹店，@箭厂视频
				跟拍了人称#香港蛇女王#的店主周嘉玲。每天抓蛇、杀蛇，煮了48年蛇羹的她，曾两度被毒蛇咬到，差点丧命。周嘉玲最大的愿望，就是把父亲当年赌上全部身家做起来的招牌继续下去。</a>
		</div>
	</div>


	<div class="shadow"
		style="position: absolute;width: 550px; height: 350px; background-color: white;margin-left: 665px;margin-top: 455px;">
		<div style="width: 500px;height: 280px;padding-left: 25px;padding-top: 15px; font-size: 18px;">
			<a class="styC" href="/picblog">热门视频</a>
			<hr />
			<a class="styC" style="font-size: 20px;" href="/picblog">
				<img style="padding-top: 10px;width: 300px;height: 170px;float: left;" src="static/img/首页-精彩图片.png" /></a>
			<span style="width:150px;float: left;padding-left: 20px;padding-top: 50px;"><a class="styC"
					href="/topic">#彩妆#</a><a class="styC" href="/picblog">这世道连彩妆都要靠性感噱头搏出位了!!!</a></span>
		</div>
		<a style="color:darkorange;text-decoration: none;font-size:20px;margin-left: 150px;margin-top: 200px;"
			href="#">更多精彩内容，点击查看</a>
	</div>


	<div class="shadow"
		style="position: absolute;width: 310px; height: 515px; background-color: white;margin-left: 1250px;margin-top: 290px;">
		<div style="width: 260px;height: 370px;padding-left: 15px;padding-top: 15px;">
			<a class="styC" href="/topic">热门话题</a>
			<hr />
			<br />
			1.<a class="styC" style="font-size: 20px;" href="/topic">#我看见的秋色</a>
			<br /><br />
			2.<a class="styC" style="font-size: 20px;" href="/topic">#我是吃货我骄傲</a>
			<br /><br />
			3.<a class="styC" style="font-size: 20px;" href="/topic">#最美的风景在路上</a>
			<br /><br />
			4.<a class="styC" style="font-size: 20px;" href="/topic">#那些戳中你的歌</a>
			<br /><br />
			5.<a class="styC" style="font-size: 20px;" href="/topic">#写个字拍给我</a>
			<br /><br />
			6.<a class="styC" style="font-size: 20px;" href="/topic">#我最亲爱的旅伴</a>
			<br /><br />
			7.<a class="styC" style="font-size: 20px;" href="/topic">#秃头少年</a>
			<br /><br />
			8.<a class="styC" style="font-size: 20px;" href="/topic">#彩妆</a>
		</div>
	</div>


	<div class="shadow"
		style="width: 1240px; height: 280px; background-color: white; margin-top:850px;margin-left:320px; position:absolute;"
		id="pict">
		<br />
		<a class="styA" style="margin-left:20px;color: black;" href="">热门图片</a>
		<hr />
		<router-link to="Picblog">
			<table>
				<th>
				<td style="padding-left: 15px;padding-top: 15px;"><img style="width: 250px;height: 180px;"
						src="static/img/图片推荐-1.jpg" /></td>
				<td style="padding-left:20px;padding-top: 15px;"><img style="width: 80px;height: 180px;"
						src="static/img/图片推荐-4.jpg" /></td>
				<td style="padding-left:20px;padding-top: 15px;"><img style="width: 110px;height: 180px;"
						src="static/img/图片推荐-5.jpg" /></td>
				<td style="padding-left:20px;padding-top: 15px;"><img style="width: 120px;height: 180px;"
						src="static/img/图片推荐-6.jpg" /></td>
				<td style="padding-left:20px;padding-top: 15px;"><img style="width: 120px;height: 180px;"
						src="static/img/图片推荐-7.jpg" /></td>
				<td style="padding-left: 20px;padding-top: 0px;">
					<img style="width: 190px;height: 170px;" src="static/img/图片推荐-2.jpg" />
					<img style="width: 190px;height: 170px; padding-left:20px;padding-top: 15px;"
						src="static/img/图片推荐-3.jpg" />
				</td>
				</th>
			</table>
		</router-link>
	</div>
	</div>
</div>
    </template>


		<script>
		import Lbt from '@/components/Lbt'
export default {
	name:'Contents',
	components:{
    Lbt
  }
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
