<template>
  <div class="body">
    <div id="show-blog">
      <br>
      <h2>博客总览</h2>
      <a href="#">
        <button class="btn1" @click="prev" id="report">继续发表</button>
      </a>
      <a href="/">
        <button class="btn1">返回首页</button>
      </a>
      <div>
        <div v-for="(blog,index) in Blogs " :key="index" class="single-blog">
          <h3>{{blog.tittle}}</h3>
          <br>
          <br>
          <article>{{blog.content}}</article>
          <br>
          <h5>{{blog.date}} | 阅读(0) | 评论(0) | 点赞(0)</h5>
          <a id="del" href="#" @click="del(index)">删除</a>
          <a id='put' data-toggle="modal" data-target="#myModal" @click="change(index)">修改</a>
          <!-- 模态框（Modal） -->
          <div
            class="modal fade"
            id="myModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" data-dismiss="modal" aria-hidden="true">×</button>
                  <h4 class="modal-title" id="myModalLabel">修改</h4>
                </div>
                <div class="modal-body">
                  <input type="text" v-model="title" class="change"><br>
                  <hr>
                  <textarea name="" id="" cols="75" rows="5" v-model="content" ></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                  <button type="button" class="btn btn-primary" @click="sumchange(index)">提交更改</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /.modal -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showblog",
  data() {
    return {
      Blogs: [],
      title: "",
      content: ""
    };
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    del(index) {
      console.log(index);
      console.log(this.Blogs);
      let data = {
        id: this.Blogs[index]._id
      };
      this.$axios.post("/api/blog/del", data).then(res => {
        console.log(res);
         window.location.reload()
      });
    },
    sumchange(index) {
      let data = {
        id: this.Blogs[index]._id,
        title: this.title,
        content: this.content
      };
      this.$axios.post("api/blog/change", data).then(res => {
        window.location.reload();
        console.log(res);
      });
    },
    change(index){
       this.title=this.Blogs[index].tittle;
      this.content=this.Blogs[index].content;
    }
  },

  mounted() {
    let data = {
      author: sessionStorage.getItem("username")
    };
    this.$axios.post("/api/blog/Showblog", data).then(res => {
      this.Blogs = res.data;
    });
  }
};
</script>
<style scoped>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.body {
  width: 100%;
  height: 1080px;
  background: url(../../static/img/bg.png);
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: white;
}
.btn1 {
  border: 1px solid red;
  color: brown;
  border-radius: 5px;
  width: 90px;
  height: 25px;
  background-color: white;
  margin-right: 20px;
}
.btn1:hover {
  background-color: rgba(253, 4, 4, 0.1);
}
#del {
  float: right;
  color: brown;
  text-decoration: none
}
#del:hover {
  color: red;
}
h3 {
  display: inline;
}
h5 {
  display: inline;
  color: darkgrey;
}
article {
  color: darkgray;
}
#put{
  float: right;
  cursor: pointer;
  color:brown;
  margin-right: 5px
}
#put:hover{
  color:red
}
.change{
  width: 473px
}
</style>
