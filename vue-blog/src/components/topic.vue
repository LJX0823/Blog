<template>
  <div id="hottpoic">
       <Nav></Nav>
        <div style="margin-left: 835px;margin-top: -18px;">
      <img src="static/img/首页-三角形.png">
    </div>
 <contain1></contain1>
    </div>
</template>



<script>
import  contain1 from '@/components/contain1'
import   Nav from '@/components/Nav'
export default {
  name: 'topic',
  components:{
          contain1,
          Nav
  }
}
</script>
<style scoped>
#hottpoic {
}
</style>

