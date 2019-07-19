<template>
<div id="hotposts">
    <star></star>
    <star1></star1>
    <star2></star2>
    <star3></star3>
    <star4></star4>
    <star5></star5>
  </div>
</template>

<script>

import star1 from './star1'
import star2 from './star2'
import star3 from './star3'
import star4 from './star4'
import star5 from './star5'
import star from './star'
export default{
  name:'hotposts',
  components:{
      star1 ,
      star2 ,
      star3 ,
      star4 ,
      star5 ,
      star
  }

}
</script>
<style scoped>
#hotposts {
  width: 1200px;
  height: 1400px;
  background-color: #f8f8f8;
  position: absolute;
  left: -550px;
  top:62px;
  z-index: 0;
}
</style>