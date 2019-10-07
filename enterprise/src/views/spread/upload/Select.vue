<template>
  <div id="select">
    <!-- 订单信息 -->
    <div style="border-bottom:1px solid #ccc">
      <p style="font-size:10px; font-weight: 600">订单信息</p>
      <p class="order">
        <img src="../../../assets//imgs/cap.png" width="30px" height="30px" />
        <span style="font-size:10px;font-weight:600">公务员考试</span>
      </p>
    </div>
    <!-- 版本 -->
    <div style="border-bottom:1px solid #ccc ;">
      <p>版本</p>
      <p class="order">
        <el-radio v-model="radio" label="1">升级版</el-radio>
      </p>
    </div>
    <!-- 选择到期时间 -->
    <div style="border-bottom:1px solid #ccc ;">
      <span>
        选择到期时间
        <span class="attention">注意：使用第一次企业签持续时间为一个月，服务器开头期间掉签免费不签。</span>
      </span>

      <p class="order">
        <el-radio-group v-model="radio2">
          <el-radio :label="3">1个月</el-radio>
          <el-radio :label="6">3个月</el-radio>
        </el-radio-group>
      </p>
    </div>
    <!-- 选择支付方式 -->
    <div style="border-bottom:1px solid #ccc ; margin-bottom:20px">
      <p>选择支付方式</p>
      <p class="order">
        <el-radio-group v-model="radio3">
          <el-button plain>使用企业签3次</el-button>
        </el-radio-group>
        <span style="margin-left:20px;font-size:10px">账户剩余企业签：10次</span>
      </p>
    </div>
    <!-- 支付金额 -->
    <!-- <p>
      支付金额：
      <span style="font-weight: 600;color:red">￥100</span>
    </p>-->
    <div>
      <el-button style="background:#E8E8E8 ;margin:0 20px" @click="previous">上一页</el-button>
      <el-button style="background:#02B2B5 ;color:#fff" @click="payment">去支付</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      radio2: 3,
      radio3: 3
    };
  },
  methods: {
    payment() {
      this.$emit("go", 3);
    },
    previous() {
      this.$emit("previous", 1);
    }
  }
};
</script>

<style lang="less" scoped>
#select {
  width: 600px;
  margin: 0 auto;
  .order {
    display: flex;
    align-items: center;
    margin-top: 0;
  }
  .attention {
    font-size: 10px;
    color: red;
    margin-left: 20px;
  }
  .payment {
    width: 100px;
    height: 30px;
    border: 1px solid #ccc;
    line-height: 30px;
    text-align: center;
  }
}
</style>