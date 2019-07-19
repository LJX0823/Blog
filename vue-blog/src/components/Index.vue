<!-- <template>
  <div id="app">
    <!-- <router-view></router-view> -->
<!-- <Nav></Nav>
    <div style="margin-left: 740px;margin-top: -18px;">
      <img src="static/img/首页-三角形.png">
    </div>
    <br>
    <br>
    <Contents></Contents>
    <Bottom></Bottom> -->
<!-- <el-row type="flex" justify="center" class="row-bg">
      <el-col :xs="8" sm="12" md="16" lg="20" xl="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" sm="12" md="16" lg="20" xl="24">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <el-checkbox :indeterminate="isIndeterminate">全选</el-checkbox>


  </div>
</template> -->
<!-- <template>
  <div>
    <div class="block">
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader
        v-model="value"
        :options="options"
        :props="{checkStrictly: true }"
        clearable
        :show-all-levels="false"
        filterable
        @change="handleChange">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </el-cascader>
    </div>
  </div>
  </template>
  <script>
 
    export default {
      data() {
      return {
        value: [],
        options: [{
          value:'PG',
          label:'控卫',
          children:[{
            value:'okc',
            label:'雷霆队',
            children:[{
              value:'CP3',
              label:'克里斯·保罗'
            }]
          }]
        },{
          value:'SF',
          label:'小前锋',
          children:[{
            value:'LAC',
            label:'快船队',
            children:[{
              value:'KL2',
              label:'科怀·伦纳德'
              
            },{
              value:'PG13',
              label:'保罗·乔治'
            }]
          }]
        }]
    }
      },
    methods:{
      handleChange(value) {
        console.log(value);
      }
    }
  }
  </script> -->
<!-- <template>
  <div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <el-switch
  v-model="value1"
  active-text="按月付费"
  inactive-text="按年付费">
</el-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: true,
        value1:true
      }
    }
  };
</script> -->
<template>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script>
    export default {
      methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
  </script>

<!-- <script>
  import Nav from '@/components/Nav'
  import Bottom from '@/components/Bottom'
  import Contents from '@/components/Contents'
  import Lbt from '@/components/Lbt'
  export default {
    name: "app",
    components: {
      Nav,
      Bottom,
      Contents,
      Lbt,
    }

  };
</script> -->

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

  .bg-red {
    background: red;
  }

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
</style>