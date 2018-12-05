<template>
    <el-dialog
    :title="titleName"
    :visible.sync="show"
    class="blog-manage"
    width="60%"
    :before-close="handleClose">
      <!-- 博客列表 -->
      <template v-if="showList">
        <!-- 顶部按钮 -->
        <div class="top-button">
          <el-button type="primary" @click="addBlog('新增博文')">新增博文</el-button>
        </div>
        <!-- 内容 -->
        <el-table :data="blogList" border style="width: 100%" height="500" v-loading="tableLoading">
          <el-table-column type="index"         label="序号"     width="60"></el-table-column>
          <el-table-column prop="title"         label="标题"     width="120"></el-table-column>
          <el-table-column prop="content"       label="内容"     width="500"></el-table-column>
          <el-table-column prop="user_name"     label="作者"     width="120"></el-table-column>
          <el-table-column prop="category_name" label="分类"     width="120"></el-table-column>
          <el-table-column prop="edit_date"     label="编辑日期"  width="120"></el-table-column>
          <!-- <el-table-column prop="read_num"    label="阅读量"    width="120"></el-table-column>
          <el-table-column prop="comment_num" label="评论量"    width="120"></el-table-column> -->
          <el-table-column fixed="right"      label="操作"      width="100">
            <template slot-scope="scope">
              <el-button @click="deleteBlog(scope.row)" type="text" size="small">删除</el-button>
              <el-button @click="editBlog(scope.row)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40">
        </el-pagination>
      </template>
      <!-- 博文详情 -->
      <template v-else>
        <el-form :model="formList" status-icon :rules="rules" ref="formList" label-width="100px" class="demo-ruleForm">
          <el-form-item label="标题" prop="title">
            <el-input v-model="formList.title" autocomplete="off" style="width: 240px"></el-input>
          </el-form-item>
          <el-form-item label="分类" prop="category_id">
            <el-select v-model="formList.category_id" placeholder="请选择">
              <el-option
                v-for="category in categories"
                :key="category.id"
                :label="category.name"
                :value="category.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <markdown-editor v-model="content" ref="markdownEditor"></markdown-editor>
            <!-- <quill-editor v-model="formList.content"
              ref="myQuillEditor"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)">
            </quill-editor> -->
          </el-form-item>
          <el-form-item>
            <el-button @click="back">返 回</el-button>
            <el-button @click="previewMd">预 览</el-button>
            <el-button @click="resetForm('formList')">重 置</el-button>
            <el-button type="primary" @click="sure('formList')">保 存</el-button>
          </el-form-item>
        </el-form>
      </template>
  </el-dialog>
</template>
<script>
import { BLOG_ADD, BLOG_LIST, BLOG_DELETE, BLOG_DETAIL, BLOG_MODIFY } from '@/api/blog'
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import 'simplemde/dist/simplemde.min.css'
import { CATEGORY_LIST } from '@/api/category'
// import _ from 'lodash'
export default {
  name: 'blog-manage',
  props: {
    dialogVisible: { Type: Boolean, default: false }
  },
  components: { markdownEditor },
  computed: {
    show() {
      if (this.dialogVisible) {
        this.getBlogList()
      }
      return this.dialogVisible
    }
  },
  data() {
    return {
      titleName: '博客管理',
      tableLoading: false,
      showList: true,
      currentPage: 1,
      categories: [],
      blogList: [],
      blogType: 'add',
      formList: {
        title: '',
        content: '',
        category_id: null,
        edit_date: null
        // read_num: null,
        // comment_num: null
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        category_id: [
          { required: true, message: '请输入分类', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  async created() {
    const categoryList = await CATEGORY_LIST()
    if (categoryList.data.code !== 0) return this.$message.error(categoryList.data.msg)
    this.categories = categoryList.data.data
  },
  methods: {
    close() {
      this.$emit('close')
    },
    // 预览
    previewMd() {
      this.$alert(this.compiledMarkdown, {
        dangerouslyUseHTMLString: true
      })
    },
    // 重置
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields()
    },
    // 保存
    sure(ruleForm) {
      this.$refs[ruleForm].validate(async(valid) => {
        if (valid) {
          if (this.blogType === 'add') {
            const blogAdd = await BLOG_ADD(this.formList)
            if (blogAdd.data.code !== 0) this.$message.error('msg')
            this.$message.success(blogAdd.data.msg)
          } else {
            const blogUpt = await BLOG_MODIFY(this.formList)
            if (blogUpt.data.code !== 0) this.$message.error('msg')
            this.$message.success(blogUpt.data.msg)
          }
          this.back()
          this.getBlogList()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    back() {
      this.showList = true
      this.titleName = '博客管理'
      this.formList = {
        title: '',
        content: '',
        category_id: null
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.$emit('close')
        })
    },
    // 添加博文
    addBlog(titleName) {
      this.showList = false
      this.blogType = 'add'
      this.titleName = titleName
    },
    // update: _.debounce(function(e) {
    //   this.input = e.target.value
    // }, 300),
    // 获取博文列表
    getBlogList() {
      this.tableLoading = true
      BLOG_LIST().then(res => {
        if (res.data.code !== 0) this.$messagr.error(res.data.msg)
        this.blogList = res.data.data
        this.tableLoading = false
      })
    },
    // 删除博文
    deleteBlog(val) {
      const req = { id: val.id }
      this.$confirm('确认删除吗?')
        .then(_ => {
          BLOG_DELETE(req).then(res => {
            if (res.data.code !== 0) this.$messagr.error(res.data.msg)
            this.getBlogList()
            this.$messagr.success(res.data.msg)
          })
        })
    },
    // 编辑博文
    editBlog(val) {
      const req = { id: val.id }
      BLOG_DETAIL(req).then(res => {
        if (res.data.code !== 0) this.$messagr.error(res.data.msg)
        this.addBlog('编辑博文')
        this.blogType = 'edit'
        this.formList = {
          id: res.data.data.id,
          title: res.data.data.title,
          content: res.data.data.content,
          category_id: res.data.data.category_id
        }
      })
    },
    onEditorBlur($event) {
      console.log($event, 'onEditorBlur')
    },
    onEditorFocus($event) {
      console.log($event, 'onEditorFocus')
    },
    onEditorReady($event) {
      console.log($event, 'onEditorReady')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="scss">
.blog-manage{
  .el-dialog__body{
    padding: 10px 20px 30px;
  }
  .top-button{
    padding-bottom: 20px;
  }
  .el-pagination{
    padding-top: 10px;
  }
  .el-textarea{
    width: 300px;
    min-height: 300px;
    textarea{
      border: none;
      min-height: 300px !important;
      border-right: 1px solid #ccc;
      resize: none;
      outline: none;
      background-color: #f6f6f6;
      font-size: 14px;
      font-family: 'Monaco', courier, monospace;
      padding: 20px;
    }
  }
  .preview{
    display: inline-block;
    width: 300px;
    min-height: 300px;
    vertical-align: top;
    box-sizing: border-box;
    padding: 20px;
  }
  .ql-snow .ql-picker{
    height: 40px;
  }
}
</style>
