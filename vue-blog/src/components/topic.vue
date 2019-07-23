<template>
  <div id="hottopic">
    <Nav></Nav>
        <div style="margin-left: 835px;margin-top: -18px;">
      <img src="static/img/首页-三角形.png">
    </div>
    <contain></contain>
    <Bottom class="bottom"></Bottom>
    </div>
</template>



<script>
import  contain from '@/components/contain'
import   Nav from '@/components/Nav'
import   Bottom from '@/components/Bottom'
export default {
  name: 'topic',
  components:{
          contain,
          Nav,
          Bottom
  }
}
</script>
<style scoped>
.bottom{
  margin-top:160px;
}
</style>

