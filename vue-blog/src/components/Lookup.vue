<template>
  <div>
   <Nav></Nav>
	 <div style="margin-left: 740px;margin-top: -18px;">
      <img src="static/img/首页-三角形.png">
    </div>
	 <br><br>
    <div>
      <div id="body">
			<div class="shadow" style="position: absolute;width: 900px; height: 850px; background-color:#ACC5D5;margin-left: 320px;">
				<div id="result" style="width: 850px;height: 800px;margin-left: 25px;margin-top:20px;background-color: white;font-size: 22px;">
					<p style="padding-left: 30px;padding-top: 30px;">为您搜索到的文章有：</p>
					<div style="width:800px;height:750px;margin-left:30px;">
					          <div  v-for="(blog,index) in Blogs " :key="index"  class="single-blog">
                                   <h2 style="color:rgb(24, 30, 114);margin-left:10px;">{{blog.tittle}}</h2>
                                   <h4 class="author">博主:{{blog.author}}</h4>
                                   <p class="content">
                                       {{blog.content}}
                                    </p>
                                   <h4 class="date">{{blog.date}}</h4>
                                   
                                    
                              </div>
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
  },
  data:function(){
	  return{
        Blogs:[],
	  }
  },
    mounted(){
      let data={
          search:sessionStorage.getItem('search')
      }
    this.$axios.post('/api/blog/Lookup',data).then(res=>{
           this.Blogs=res.data;
       })
  },

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
.single-blog{
  padding:5px;
  border:2px solid black;
  background-color:rgb(231, 244, 248);
  border-radius: 5px;
  margin-top: 10px;
}
.author{
  position:relative;
  left: 650px;
  top:-45px;
}
.content{
  text-indent: 2em;
  font-size: 16px;
  margin-left: 20px;
  margin-top: -37px;
}
.date{
  color:#666;
  margin-left: 600px;
  font-size: 16px;
}
</style>
