<template>
  <div class="manage-home">
    <div class="manage-home-nav">
      <div class="manage-home-user-head">
        <img src="../../../assets/img/1.jpg" alt="">
      </div>
      <div class="manage-home-user-name">{{userName}}</div>
      <el-button type="primary" @click="loginOut">退出登录</el-button>
    </div>
    <div class="manage-home-list">
      <!-- <div class="manage-home-list-app" @click="open">压缩图片</div>
      <div class="manage-home-list-app" @click="open">ORC识别</div> -->
      <div class="manage-home-list-app" @click="BlogManage">博客管理</div>
      <div class="manage-home-list-app" @click="open('self')">个人网站</div>
    </div>
    <BlogManage :dialogVisible="dialogVisibleBlog" @close="blogClose" @sure="blogSure"></BlogManage>
  </div>
</template>
<script>
import BlogManage from './components/BlogManage'
export default{
  name: 'manage-home',
  components: { BlogManage },
  data() {
    return {
      dialogVisibleBlog: false,
      userName: ''
    }
  },
  created() {
    this.userName = sessionStorage.getItem('userName')
  },
  methods: {
    open(type) {
      if (type === 'blog') this.$router.push('/Blog')
      else if (type === 'self') this.$router.push('/')
      else this.$message.error('开发中...')
    },
    BlogManage() {
      this.dialogVisibleBlog = true
    },
    blogClose() {
      this.dialogVisibleBlog = false
    },
    blogSure() {
      this.dialogVisibleBlog = false
    },
    loginOut() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.manage-home{
  background: url('../../../assets/img/bg3.jpg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  &-nav{
    height: 80px;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    .el-button{
      margin: 20px;
      float: right;
    }
  }
  &-user-head{
    float: left;
    line-height: 80px;
    margin-left: 20px;
    img{
      width: 40px;
      height: 40px;
      border-radius: 20px;
      border: 1px solid #ccc;
    }
  }
  &-user-name{
    line-height: 80px;
    float: left;
    margin-left: 10px;
    font-size: 14px;
    color: #333;
  }
  &-list{
    margin-top: 20px;
    &-app{
      float: left;
      margin-left: 20px;
      width: 100px;
      height: 100px;
      cursor: pointer;
      text-align: center;
      line-height: 100px;
      border-radius: 50px;
      border:1px solid #ccc;
      background: rgba(255, 255, 255, 0.5);
      -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
      &:hover{
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>
