<template> 
 <div id="moon">
   <div id="tittle">
   </div>
     <moon1></moon1>
     <moon2></moon2>
     <moon3></moon3>
     <moon4></moon4>
     <moon5></moon5>
     <moon6></moon6>
</div>
</template>

<script>
import moon1 from './moon1'
import moon2 from './moon2'
import moon3 from './moon3'
import moon4 from './moon4'
import moon5 from './moon5'
import moon6 from './moon6'

export default{
  name:'moon',
  components:{
    moon1,
    moon2,
    moon3,
    moon4,
    moon5,
    moon6,
  }
}
</script>
<style scoped>
#moon{
    width:1200px ;
    height: 1400px;
    background-color:white;
    position: absolute;
    left: 350px;
    top:80px;
}
button{
  float: left;
  margin-left: 60px;
  margin-top:40px;
}
#tittle{
   float: left;
   margin:30px 50px;
}
</style>

