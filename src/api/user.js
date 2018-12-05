import { PostApi } from '@/public/request'
// ******** 注册，登录接口
// 登录
export const LOGIN = (params) => {
  return PostApi('/api/login_in', params)
}

// 注册
export const ADD_USER = (params) => {
  return PostApi('/api/add_user', params)
}
