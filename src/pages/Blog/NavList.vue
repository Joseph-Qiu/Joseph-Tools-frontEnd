<template>
  <div class="nav-list" :class="{'nav-list-active': navActive === 'true'}" @click="$emit('click')">
    <div class="blog-nav-border">
      <div class="blog-nav-img"><i class="iconfont" :class="navIco"></i></div>
      <div class="blog-nav-text">{{navName}}</div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'nav-list',
  props: {
    navName: { type: String, default: '' },
    navIco: { type: String, default: '' },
    navActive: { type: String, default: '' }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.nav-list{
  width: 30px;
  height: 50px;
  margin-left: 50px;
  cursor: pointer;
  color: #666;
  float: left;
  &:hover{
    color: #000;
    border-bottom: 1px solid #000
  }
  &-active{
    &:hover{
      color: #000;
      border-bottom: 1px solid #000
    }
    color: #000;
    border-bottom: 1px solid #000  
  }
  .blog-nav{
    &-img{
      padding-left: 5px;
      line-height: 20px;
    }
    &-text{
      font-size: 12px;
      line-height: 30px;
    }
  }
}
</style>
