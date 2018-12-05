<template>
  <div class="article-list">
    <div class="article-title" @click="$emit('click')">
      {{articleMsg.title}}
    </div>
    <div class="article-other">
      <div class="article-other-time">
        <i class="iconfont icon-date"></i>
        创建日期: 
        {{articleMsg.edit_date}}
      </div>
      <div class="article-other-cate">
        <i class="iconfont icon-wenjianjia"></i>
        <span>分类:{{articleMsg.category_name}}</span> 
      </div>
      <div class="article-other-comment">
        <i class="iconfont icon-pinglun"></i>
        <span>作者:{{articleMsg.user_name}}</span> 
      </div>
    </div>
    <div class="article-content" @click="$emit('click')" v-html="articleMsg.content"></div>
    <div class="article-more" @click="$emit('click')">Read more <i class="iconfont icon-gengduo"></i></div>
    <div class="article-bottom"></div>
  </div> 
</template>
<script>
export default{
  name: 'article-list',
  props: {
    articleMsg: { type: String, default: '' }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.article{
  &-list{
    width: 100%;
    color: #666;
    margin-top: 80px;
    // border-bottom: 1px solid #ccc;
  }
  &-title{
    width: 100%;
    font-size: 22px;
    text-align: center;
  }
  &-other{
    width: 100%;
    height: 80px;
    line-height: 15px;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    font-size: 12px;
    div{
      display: inline-block;
      span{
        text-decoration: underline;
      }
    }
    &-time{
      padding: 0 10px;
      border-right: 1px solid #ccc;
    }
    &-cate{
      padding: 0 10px;border-right: 1px solid #ccc;
    }
    &-comment{
      padding: 0 10px;
    }
  }
  &-content{
    width: 100%;
  }
  &-more{
    width: 140px;
    line-height: 40px;
    background: #000;
    margin: 50px auto;
    color: #fff;
    border: 2px solid #000;
    cursor: pointer;
    text-align: center;
    &:hover{
       background: #fff;
       color: #000
    }
  }
  &-bottom{
    border: 1px solid #ccc;
    width: 60px;
    margin: 0 auto;
  }
}
</style>
