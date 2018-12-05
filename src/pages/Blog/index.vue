<template>
  <div class="blog">
    <!-- 标题 -->
    <section class="blog-title">
      <div class="blog-title-name">Full Stack Joseph</div>
    </section>
    <!-- 导航 -->
    <section class="blog-nav">
      <nav-list navName="主 页" navIco="icon-zhuye" navActive="true"></nav-list>
      <!-- <nav-list navName="分 类" navIco="icon-fenlei"></nav-list> -->
      <!-- <nav-list navName="文 章" navIco="icon-24"></nav-list> -->
    </section>
    <!-- 文章列表 -->
    <section class="blog-article">
      <article-list v-for="list in blogList" :key="list.id" :articleMsg="list"></article-list>
      <!-- <article-list></article-list>
      <article-list></article-list>
      <article-list></article-list> -->
    </section>
    <section class="blog-page">
      <!-- <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination> -->
    </section>
  </div>
</template>

<script>
import NavList from './NavList'
import ArticleList from './ArticleList'
import { BLOG_LIST_ALL } from '@/api/blog'
export default{
  name: 'blog',
  components: {
    NavList,
    ArticleList
  },
  data() {
    return {
      blogList: []
    }
  },
  created() {
    this.getBlogList()
  },
  methods: {
    async getBlogList() {
      const blogList = await BLOG_LIST_ALL()
      if (blogList.data.code !== 0) this.$message.error(blogList.data.msg)
      this.blogList = blogList.data.data
    }
  }
}
</script>

<style lang="scss">
.blog{
  &-title{
    width: 180px;
    margin: 80px auto 20px;
    &-name{
      height: 36px;
      line-height: 36px;
      text-align: center;
      background: #000;
      font-size: 20px;
      color: #fff
    }
  }
  &-nav{
    width: 150px; //290px;
    height: 50px;
    margin: 40px auto;
  }
  &-article{
    width: 700px;
    margin: 50px auto 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  &-page{
    text-align: center;
  }
}
</style>
