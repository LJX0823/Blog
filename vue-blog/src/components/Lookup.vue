<template>
  <div>
   <Nav></Nav>
	 <div style="margin-left: 740px;margin-top: -18px;">
      <img src="static/img/首页-三角形.png">
    </div>
	 <br><br>
    <div>
      <div id="body">
			<div class="shadow" style="position: absolute;width: 900px; height: 830px; background-color:#ACC5D5;margin-left: 320px;">
				<div id="result" style="width: 850px;height: 800px;margin-left: 25px;margin-top: -5px;background-color: white;font-size: 22px;">
					<p style="padding-left: 30px;padding-top: 30px;">为您搜索到的文章有：</p>
					<div style="width:800px;height:750px;margin-left:30px;">
					<p >1.【谢谢这个少年，新的旅程我们继续同行！李易峰与公司合约到期】#李易峰合约到期#30日，李易峰
						晒出一张自拍，配文称“谢谢这个少年”。随后李易峰工作室转发微博称“谢谢”，疑似宣布李易峰与原经纪公司合约到期后将不续约。​ <a href="#">展开全文</a></p>
					<p>2.李易峰晒出一张自拍，并配文：“谢谢，这个少年”。疑似宣布与原经纪公司合约到期后将不续约。李易峰很有契约精神地走到了现在，靠自己取得电视剧和电影领域的优秀成绩就是对前公司最好的回报，感谢前公司知遇之恩，谢谢这个少年，祝李易峰星途更加灿烂@李易峰
						​</p>
					<p>3.#李易峰疑与公司合约到期# 2014年4月1日到2019年3月30日，这些年@李易峰
						一直秉持良好的契约精神走到今天合约正常结束，感谢知遇之恩，好聚好散。期待李演员接下来的作品《隐秘而伟大》《我在北京等你》，更广阔的事业征程，新征程，一切已蓄势待发[心]</p>
					<p>4.#李易峰疑与公司合约到期#我家的什么时候到期啊[拜拜] </p>
					<p>5.#李易峰疑与公司合约到期#是合约到期 不是解约 祝李易峰星途更加灿烂[心]@李易峰 #李易峰# ​</p>
					<p>6.#李易峰疑与公司合约到期#李易峰称自己为少年[疑问]还谢自己[笑cry] ​</p>
					</div>
				</div>
			</div>



			<div class="shadow" style="position: absolute;width: 310px; height: 290px; background-color:white;margin-left: 1250px;">
				<img src="static/img/首页111.jpg" style="width: 260px; height: 260px;margin-top: 15px;margin-left: 25px;">
        </div>
      <div class="shadow" style="position: absolute;width: 310px; height: 515px; background-color: white;margin-left: 1250px;margin-top: 315px;">
				<div style="width: 260px;height: 370px;padding-left: 15px;padding-top: 15px;">
					<a class="styC" href="/topic">热门话题</a>
					<hr />
					<br />
					1.<a class="styC" style="font-size: 20px;" href="">#我看见的秋色</a>
					<br /><br />
					2.<a class="styC" style="font-size: 20px;" href="">#我是吃货我骄傲</a>
					<br /><br />
					3.<a class="styC" style="font-size: 20px;" href="">#最美的风景在路上</a>
					<br /><br />
					4.<a class="styC" style="font-size: 20px;" href="">#那些戳中你的歌</a>
					<br /><br />
					5.<a class="styC" style="font-size: 20px;" href="">#写个字拍给我</a>
					<br /><br />
					6.<a class="styC" style="font-size: 20px;" href="">#我最亲爱的旅伴</a>
					<br /><br />
					7.<a class="styC" style="font-size: 20px;" href="">#秃头少年</a>
					<br /><br />
					8.<a class="styC" style="font-size: 20px;" href="/topic">#彩妆</a>
				</div>
			</div>
		</div>


		<div class="shadow"
			style="width: 1240px; height: 280px; background-color: white; margin-top:880px;margin-left:313px; position:absolute;"
			id="pict">
			<br />
			<a class="styA" style="margin-left:20px;color: black;" href="">热门图片</a>
			<hr />
			<router-link to="/Picblog">
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
		<br>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Bottom from '@/components/Bottom'
export default {
  name: "Lookup",
  components:{
    Nav,
    Bottom
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
