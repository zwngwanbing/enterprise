<template>
  <div id="uploading">
    <div class="immediately">
        <el-button style="margin-top: 12px;background:#02B2B5;color:#fff" @click="next">立即上传</el-button>
      <p style="font-size:10px">点击按钮选择应用的安装包，或拖拽文件到ci区域</p>
      <p style="font-size:10px">(支持ipa文件，支持中断后传输)</p>
    </div>
    <!-- <div>
      <router-view />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //conceal: true, //点击上传后隐藏
    };
  },

  methods: {
    // 触发事件把参数传给父组件 Index
    next() {
      // 发出信息，传递下条状态条页码 1。
      this.$emit( 'activeVal', 1 ) 
    }
  },
  components: {
  }
};
</script>

<style lang="less" scoped>
#uploading {
  width: 300px;
  height:300px;
  background: #fff;
  margin: auto;
  .schedule {
    margin: 0 auto !important;
    margin: 40px !important;
    text-align: center;
  }
  .el-step__line {
    text-align: center !important;
  }
  .immediately {
    width: 250px;
    height: 80px;
    margin: 0 auto;
    text-align: center;
    // margin-top: 200px;
  }
}
</style>