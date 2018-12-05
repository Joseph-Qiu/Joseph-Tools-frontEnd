
<template>
  <div class="register">
    <div class="register-border">
      <div class="register-title">注 册</div>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="form.user_id" suffix-icon="el-icon-info"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.user_name" suffix-icon="el-icon-info"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.user_pwd" suffix-icon="el-icon-info" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.user_pwd_re" suffix-icon="el-icon-info" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">完成注册</el-button>
          <el-button type="info" @click="back">返  回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ADD_USER } from '@/api/user'
export default{
  data() {
    return {
      form: {
        user_id: null,
        user_name: null,
        user_pwd: null,
        user_pwd_re: null
      }
    }
  },
  methods: {
    async onSubmit() {
      if (this.form.user_pwd !== this.form.user_pwd_re) return this.$message.error('两次输入密码不一致，请确认!')
      const res = await ADD_USER(this.form)
      if (res.data.code !== 0) return this.$message.error(res.data.msg)
      const vueThis = this
      this.$message({
        showClose: true,
        message: res.data.msg,
        type: 'success',
        onClose() {
          vueThis.$router.go(-1)
        }
      })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.register{
  background: url('../../../assets/img/bg3.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  padding: 100px 0;
  &-title{
    width: 100%;
    height: 50px;
    line-height: 40px;
    text-align: center;
    font-size: 30px;
  }
  &-border{
    width: 600px;
    background: rgba(255,255,255,0.3);
    padding: 30px;
    margin: 100px auto;
    .el-form{
      margin-top: 20px;
    }
    .el-input{
      width: 400px;
    }
  }
}
</style>
