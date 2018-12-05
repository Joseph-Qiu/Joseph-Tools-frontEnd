import axios from 'axios'
import stringify from 'qs-stringify'
// import router from '@/router'
const api = '/develop' // 开发环境
// const api = '' // 生产环境
export const GetApi = (url, params) => {
  const getData = axios({
    method: 'get',
    url: api + url,
    params: params
  })
  return getData
}
export const PostApi = (url, data) => {
  const getData = axios({
    method: 'post',
    url: api + url,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    data: stringify(data)
  })
  return getData
}
