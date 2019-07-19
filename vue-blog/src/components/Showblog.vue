<template>
  <div id="show-blog">
      <h2>博客总览</h2>
        <button @click='prev' id="report">继续发表</button> 
        <a href="/"><button class="return">返回首页</button></a>
      <div  v-for="(blog,index) in Blogs " :key="index"  class="single-blog">
         <h2>{{blog.tittle}}</h2>
         <article>
             {{blog.content}}
         </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Showblog',
  data(){
      return{
      Blogs:[],
      }
  },methods:{
      prev(){
    		this.$router.go(-1)
        },
    },
  
  mounted(){
      let data={
          author:sessionStorage.getItem('username')
      }
    this.$axios.post('/api/blog/Showblog',data).then(res=>{
           this.Blogs=res.data
       })
  },
}
</script>
<style scoped>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
.report{
    
}
</style>
