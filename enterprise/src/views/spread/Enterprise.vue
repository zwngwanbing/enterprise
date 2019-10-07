<template>
  <div id="enterprise">
    <div class="balance">
       <el-button type="primary" round style="background:#02C9CE" >企业签记录</el-button>
    </div>
    <el-table 
     :data="tableData" 
     style="width: 100%"
     table    
     class="statistics" 
     :header-cell-style="{background:'#E2F3FD',color:'#000'}">
      <el-table-column prop="date" label="时间" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="order" label="订单编号" align="center"></el-table-column>
      <el-table-column prop="payment" label="支付方式" align="center"></el-table-column>
      <el-table-column prop="money" label="金额(元)" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02 18:20:00",
          type: "企业签-包月版",
          order: "1231111167781",
          payment: "支付宝",
          money: "100:00",
          state: " 已完成"
        },
        {
          date: "2016-05-02 18:20:00",
          type: "企业签-包月版",
          order: "1231111167781",
          payment: "支付宝",
          money: "100:00",
          state: " 已完成"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#enterprise {
  width: 95%;
  height: 400px;
  margin: 0 auto;
  background: #fff;
  .balance {
   margin: 0 auto;
   display: flex;
   justify-content: center;
    padding: 20px 0;
  }
  .statistics {
    margin-top: 20px;
    border: 1px solid #ccc;
  }
}
</style>