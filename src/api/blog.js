import { PostApi, GetApi } from '@/public/request'
// ******** 博客管理接口
// 列表
export const BLOG_LIST = () => {
  return GetApi('/api/blog_list')
}

// 所有列表
export const BLOG_LIST_ALL = () => {
  return GetApi('/api/all_blog_list')
}

// 新增
export const BLOG_ADD = (params) => {
  return PostApi('/api/blog_add', params)
}

// 删除
export const BLOG_DELETE = (params) => {
  return PostApi('/api/blog_delete', params)
}

// 修改
export const BLOG_MODIFY = (params) => {
  return PostApi('/api/blog_modify', params)
}

// 详情
export const BLOG_DETAIL = (params) => {
  return PostApi('/api/blog_detail', params)
}
