import { request } from '@/plugins/request'

// 用户登录
export const login = data => {
    return request({
        method: 'POST',
        url: '/api/users/login',
        data
    })
}
export const register = data => {
    return request({
        method: 'POST',
        url: '/api/users/',
        data
    })
}
export const updateUser = data => {
    return request({
        method: 'PUT',
        url: '/api/user',
        data
    })
}
// 获取用户信息
export const getProfile = (username) => {
    return request({
      method: 'GET',
      url: `/api/profiles/${username}`
    })
  }