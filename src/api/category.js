import { PostApi, GetApi } from '@/public/request'
// ******** 分类接口
// 列表
export const CATEGORY_LIST = (params) => {
  return GetApi('/api/category_list', params)
}

// 新增
export const CATEGORY_ADD = (params) => {
  return PostApi('/api/category_add', params)
}

// 删除
export const CATEGORY_DELETE = (params) => {
  return PostApi('/api/category_delete', params)
}

// 修改
export const CATEGORY_MODIFY = (params) => {
  return PostApi('/api/category_modify', params)
}

// 详情
export const CATEGORY_DETAIL = (params) => {
  return PostApi('/api/category_id_detail', params)
}
