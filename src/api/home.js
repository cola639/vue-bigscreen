import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function getVistCount() {
  return request({
    url: '/index/getYssVisitCount',
    method: 'get'
  })
}

export function getAnalysisData(type) {
  // return request({
  //   url: '/index/analysisBar',
  //   method: 'get',
  //   type
  // })

  return request({
    url: '/index/getJszxData',
    method: 'get',
    params: { type }
  })
}
