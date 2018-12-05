<template>
  <div class="manage">
    <el-card class="box-card">
      <div class="box-card-top">Joseph Tools</div>
      <el-input v-model="username" placeholder="用户名"></el-input>
      <el-input v-model="password" placeholder="密码" type="password"></el-input>
      <div class="box-card-select">
        <!-- <el-checkbox v-model="checked">记住密码</el-checkbox> -->
        <a href="#/ManageRegister">注册账号</a>
      </div>
      <div class="box-card-button">
        <el-button type="info"  @click="guess">游客</el-button>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
      <!-- <div class="box-card-three">使用第三方账号登录</div>
      <div class="box-card-img">
        <i class="iconfont icon-weixin"  @click="wxLogin"></i>
        <i class="iconfont icon-qq"></i>
      </div> -->
    </el-card>
  </div>
</template>
<script>
import { LOGIN } from '@/api/user'
export default{
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    async login() {
      const data = {
        user_id: this.username,
        user_pwd: this.password
      }
      const res = await LOGIN(data)
      if (res.data.code !== 0) return this.$message.error(res.data.msg)
      const vueThis = this
      this.$message({
        showClose: true,
        message: res.data.msg,
        type: 'success'
        // onClose() {
        //   vueThis.$router.push('/ManageHome')
        // }
      })
      const userName = res.data.user_id + '(' + res.data.user_name + ')'
      sessionStorage.setItem('userName', userName)
      // sessionStorage.setItem('ID', res.data.id)
      vueThis.$router.push('/ManageHome')
    },
    wxLogin() {
    },
    guess() {
      this.$message.error('游客通道建设中...')
    }
  }
}
</script>
<style lang="scss">
.manage{
  background: url('../../assets/img/bg3.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  padding: 300px 0;
  .el-card{
    border: none
  }
  .el-card__body{
    padding: 0;
  }
  .box-card{
    width: 420px;
    height: 420px;
    padding: 0;
    margin: 0 auto;
    &-top{
      background: #999;
      width: 100%;
      height: 75px;
      line-height: 75px;
      color: #fff;
      text-align: center;
      font-size: 32px;
    }
    &-select{
      width: 330px;
      height: 20px;
      line-height: 30px;
      margin: 10px 45px 0;
      a{
        float: right;
        font-size: 14px;
        cursor: pointer;
        color: #333;
      }
    }
    .el-input{
      width: 330px;
      height: 50px;
      margin: 30px 45px 0;
      input{
        height: 50px;
      }
    }
    &-button{
      width: 330px;
      height: 50px;
      margin: 30px 45px 0;
      .el-button{
        width: 140px;
        height: 50px;
        float: left;
        font-size: 18px;
        &:last-child{
          float: right;
        }
      }
    }
    &-three{
      width: 330px;
      height: 20px;
      margin: 20px 45px 0;
      text-align: center;
      font-size: 12px;
    }
    &-img{
      width: 100%;
      text-align: center;
      i{
        color: #999;
        cursor: pointer;
      }
    }
  }
}
</style>
