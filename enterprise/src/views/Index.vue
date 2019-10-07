<template>
  <div id="grouping">
    <!-- 导航栏 -->
    <div class="navigation">
      <div style="line-height: 30px">
         <!-- 上传应用 -->
        <el-button type="text" @click="dialogTableVisible=true">
          <el-button style=" background:#06B2B6;color:#fff;">
            上传应用
          </el-button>
        </el-button>
        <!-- 蒙层 -->
        <el-dialog  :visible.sync="dialogTableVisible">
          <el-steps :active="active" finish-status="success">
            <el-step title="上传ipa包"></el-step>
            <el-step title="填写信息"></el-step>
            <el-step title="选择套餐"></el-step>
            <el-step title="下载签名包"></el-step>
          </el-steps>
          <!--页面 判断 -->
          <div>
            <!-- 在子组件出口上监听儿子发出的自定义事件 activeVal 并触发一个函数 fn  -->
            <Uploading v-if="active ===0" @activeVal="fn" />
            <Fill v-if="active ===1" @message="submit" />
            <Select v-if="active ===2" @go="payment" @previous="before"/>
            <Download v-if="active ===3" />
          </div>
        </el-dialog>

      </div>
      <div class="right">
        <el-button style="background:#F6F6F6; border:none">
          <router-link to="/enterprise">上企业签账单</router-link>
        </el-button>
        <el-button style="padding:0">
          <p style="fontSize:10px">大包剩余次数：100</p>
          <p style="fontSize:10px">小包剩余次数：100</p>
        </el-button>
      </div>
      
    </div>
    <!-- <router-view /> -->
    <div></div>
    <!-- 表格 -->
    <div class="surface">
      <div style="padding:20px;">
        <el-table
          :data="tableData"
          style="width: 100%;"
          table
          :header-cell-style="{background:'#E2F3FD',color:'#000', textAlign: 'center'}"
          @row-click="openDetails"
        >
          <img src="../assets/imgs/cap.png" style=" display: block; width:30px" />
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="version" label="版本号"></el-table-column>
          <el-table-column prop="size" label="大小"></el-table-column>
          <el-table-column prop="site" label="下载地址"></el-table-column>
          <el-table-column prop="install" label="安装地址"></el-table-column>
          <el-table-column prop="download" label="下载量"></el-table-column>
          <el-table-column prop="update" label="更新时间" width="180"></el-table-column>
          <el-table-column prop="state" label="状态"></el-table-column>
          <el-table-column prop="operation" label="操作">
            <template slot-scope="scope">
              <!-- 选择器 -->
              <el-select v-model="scope.row.value" placeholder="请选择" style="width:80px;" @change="openDetails">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="text-align:center;">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Uploading from "./spread/upload/Uploading";
import Fill from "./spread/upload/Fill"
import Select from './spread/upload/Select'
import Download from './spread/upload/Download'

export default {
  data() {  
    return {
      dialogTableVisible:false,//蒙层
      active: 0,
      // 表格
      tableData: [
        {
          img: "",
          name: "公务员考试",
          version: "1.0.0",
          size: "100M",
          site: "100",
          install: "点击安装",
          download: "100",
          update: "2019-10-01 18:51:15",
          state: "正在签名",
          options: ""
        },
        {
          img: "",
          name: "公务员考试",
          version: "1.0.0",
          size: "100M",
          site: "100",
          install: "点击安装",
          download: "100",
          update: "2019-10-01 18:51:15",
          state: "正在签名",
          options: ""
        },
        {
          img: "",
          name: "公务员考试",
          version: "1.0.0",
          size: "100M",
          site: "100",
          install: "点击安装",
          download: "100",
          update: "2019-10-01 18:51:15",
          state: "正在签名",
          options: ""
        }
      ],
      // 选择器
      options: [
        { value: "查看详情", label: "查看详情" },
        { value: "上架", label: "上架" },
        { value: "下架", label: "下架" },
        { value: "删除", label: "删除" }
      ],
      value: ""
    };
  },
  methods: {
    //详情
    openDetails(selVal) {
      if( selVal === '查看详情' ) {
        this.$router.push("/betails");
      }
    },
    a(row){
      alert(1)
    },
    // 上传应用
    // dialogTableVisible(){
    //   this.dialogTableVisible=true;
    //   //  this.$router.push("/uploading");
    // },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    // 此函数的儿子自定义事件触发的函数
    fn(pageNo) {  // 带一个默认参数，就是儿子传过来的值。
      this.active = pageNo //使用儿子传过来的值改变状态条页面。
    },
    //填写信息
    submit(transmit){
        this.active=transmit
    },
    //支付
    payment(Alipay){
      this.active=Alipay
    },
    //返回填写信息
    before(changeBefore){
      this.active=changeBefore
    },
 
  },
  components: {
    Uploading,
    Fill,
    Select,
    Download
  }
};
</script>

<style lang="less">
#grouping {
  width: 95%;
  margin: 0 auto;
  .navigation {
    display: flex;
    justify-content: space-between;
    height: 60px;
    background: #fff;
    margin-bottom: 20px;
  }
  .right {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right p {
    margin: 0;
  }
  .surface {
    background: #fff;
    height: 400px;
  }
  .a {
    color: #000 !important;
  }
  .el-button {
    padding: 0;
    height: 40px;
    padding: 0 20px !important;
    margin-left: 20px !important;
  }
  .el-table td {
    text-align: center !important;
  }
  .el-table_1_column_5 {
    color: red;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 0 !important;
  }
  .el-select-dropdoel-scrollbar__view {
    color: blue !important;
  }
  .el-dialog{
    width: 65%!important;
  }
}
</style>
