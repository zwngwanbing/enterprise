<template>
  <div id="fill">
    <!-- 表单 -->
    <div class="message">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="应用名称">
          <el-input v-model="form.name" placeholder="公务员考试"></el-input>
        </el-form-item>
        <el-form-item label="版本号">
          <el-input v-model="form.versions" placeholder="1.0"></el-input>
        </el-form-item>
        <el-form-item label="包名">
          <el-input v-model="form.package" placeholder="csewgiuiwbc"></el-input>
        </el-form-item>
        <el-form-item label="是否启用">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" placeholder="请输入内容"></el-input>
        </el-form-item>
        <!-- 上传图片 -->
        <div class="box">
          <el-form-item label="应用截图"></el-form-item>
          <div>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <span style="margin:10px;color:#ccc">建议横图上传2208*1242，坚图1242*2208</span>
        </div>

        <el-form-item label="应用介绍">
          <el-input type="textarea" v-model="form.use" placeholder="请输入200字以内的应用介绍"></el-input>
        </el-form-item>
        <el-form-item label="功能介绍">
          <el-input type="textarea" v-model="form.function" placeholder="请输入200字以内的应用介绍"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" style=" background:#02B2B5;">立即提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "", //y应用名称
        versions: "", //版本号
        package: "", //包名
        remark: "", //备注
        delivery: true,
        use: "", //应用介绍
        function: "" //功能介绍
      },
      imageUrl: ""
    };
  },
  methods: {
    //   添加图片
    onSubmit() {
      this.$emit("message",2)
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less" scoped>
#fill {
  .message { 
    width: 500px;
    margin: 0 auto;
    padding-top:20px;
  }
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border:1px solid #ccc;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .box {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }
  .el-input{
      width: 300px;
  }
}
</style>