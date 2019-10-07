<template>
  <div id="particulars">
    <!-- 导航栏 -->
    <div class="navigation">
      <div style="line-height: 60px">
        <span style="font-weight: 600">企业签名</span>>
        <span>公务员考试</span>
      </div>
      <div class="right">
        <el-button type="primary" style=" background:#06B2B6;color:#fff;">下载签名包</el-button>
        <el-button type="primary" style=" background:#06B2B6;color:#fff;">续费</el-button>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 公务员考试 -->
      <div class="navigation" style="  border-bottom: 1px solid #ccc;padding-top:20px">
        <div style=" display: flex;">
          <img src="../../assets/imgs/cap.png" width="70px" height="70px" />
          <div class="size">
            <p style="font-size:16px;font-weight: 600">公务员考试</p>
            <p>版本：1.0</p>
            <p>大小：10m</p>
            <p>更新时间：2019-10-01 18:51:15</p>
          </div>
        </div>
        <div class="right">
          <el-button type="primary" style=" background:#F6F6F6;color:#000; border:none">下载签名包</el-button>
          <el-button type="primary" style=" background:#F6F6F6;color:#000; border:none">续费</el-button>
        </div>
      </div>
      <!-- 正在签名 -->
      <div class="signature">
        <div>
          <p>
            状态：
            <span style="font-weight: 600">正在签名</span>
          </p>
          <p>
            到期时间：
            <span style="font-weight: 600">2019-10-01 18:51:15</span>
          </p>
          <p>
            包名(BindleID)：
            <span style="font-weight: 600">com.dcliu.DMGJBCYBOA</span>
            <el-button>复制</el-button>
          </p>
        </div>
      </div>
      <!-- 版本发布记录 -->
      <!-- <div class="edition">
        <div class="record">版本发布记录</div>
        <el-table :data="tableData" >
          <el-table-column prop="date" label="更新日期" align="center"></el-table-column>
          <el-table-column prop="versions" label="版本" align="center"></el-table-column>
          <el-table-column prop="size" label="大小"  align="center"></el-table-column>
          <el-table-column prop="update" label="更新说明" align="center">
            <template slot-scope="scope" >
              <el-input v-model="scope.row.roleName"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" align="center">
            <img src="../../assets/imgs/download.png" style="width:30px;heiht:30px" />
          </el-table-column>
        </el-table>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02 18:51:15",
          versions: "1.0.0",
          size: "10M",
          size: "10M",
          size: "10M"
        }
      ],
      input: "11"
    };
  },
  methdos: {
  }
};
</script>

<style lang="less" scoped>
#particulars {

  .navigation {
    display: flex;
    justify-content: space-between;
    margin: 0 80px;
  }
  .right {
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 5px;
  }
  .surface {
    background: #fff;
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
  .content {
    margin: 0 auto;
    background: #fff;
    width: 95%;
    height: 600px;
  }
  .size {
    font-size: 10px;
    margin: 0 15px;
  }
  .signature {
    margin-top:50px; 
    margin-left:100px; 
    height: 200px;
    line-height: 50px;
  }
  // .edition {
  //   margin: 0 auto;
  //   width: 95%;
  //   border: 1px solid #ccc;
  // }
  // .record {
  //   height: 40px;
  //   background: #f9f9f9;
  //   border-bottom: 1px solid #ccc;
  //   color: #02b2b5;
  //   line-height: 40px;
  //   font-weight: 600;
  //   padding: 0 30px;
  // }
  .el-table_1_column_1{
    text-align: center!important
  }
}
</style>