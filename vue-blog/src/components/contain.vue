<template> 
 <div >
    <moon></moon>
    <daohang></daohang>
</div>
</template>

<script>
import moon from './moon'
import Bottom from './Bottom'
import daohang from '@/components/daohang'
export default{
  name:'contain',
  components:{
      moon,
      Bottom,
      daohang
  }

}
</script>
<style scoped>
div {
    width: 100%;
    height: 1800px;
    background-color:#f8f8f8;
    margin-top: 0px;
    position: relative;
   
}

</style>