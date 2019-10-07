<template>
  <div id="information">
    <!-- 订单信息 -->
    <p style="margin-left:100px;margin-bottom:0 ;font-weight: 600">订单信息</p>
    <div class="navigation" style="  border-bottom: 1px solid #ccc;padding-top:20px">
      <div class="order">
        <img src="../../../assets/imgs/cap.png" width="70px" height="60px" />
        <div class="size">
          <p style="font-size:16px;font-weight: 600 ;">公务员考试</p>
          <p>版本：1.0</p>
          <p>大小：10m</p>
        </div>
      </div>
    </div>
    <!-- 到期时间 -->
    <div class="time">
      <p style="font-weight: 600;margin:0!important">到期时间</p>
      <p style="margin:0!important">2019-10-01 18:51:15</p>
    </div>
    <!-- 状态 -->
    <div class="time">
      <p style="font-weight: 600;margin:0!important">状态</p>
      <p style="margin:0!important">处理中</p>
    </div>
    <!-- 信息提示 -->
    <div class="hint">
      <div>当前系统处理中，预计十分钟后完成处理，请勿关闭当前页面</div>
      <div>有问题请及时与客服联系</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
#information {
  .navigation {
    height: 90px;
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    margin: 0 80px;
    border-bottom: 1px solid #ccc;
  }
  .size {
    font-size: 10px;
    margin: 0 15px;
    p {
      margin: 0 !important;
    }
  }
  .order {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  .time {
    margin-left: 80px;
    padding: 10px 0;
  }
  .hint {
    width: 500px;
    height: 40px;
    border: 1px solid red;
    font-size: 10px;
    text-align: center;
    margin-left: 80px;
    color: red;
    line-height: 20px;
    margin-top: 20px;
  }
}
</style>