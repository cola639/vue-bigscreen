import request from '@/utils/request'

export function getVistCount() {
  return request({
    url: '/index/getYssVisitCount',
    method: 'get'
  })
}

export function getAnalysisData(type) {
  return request({
    url: '/index/getJszxData',
    method: 'get',
    params: { type }
  })
}

// 热门项目运动
export function getHotEvents() {
  return request({
    url: '/index/getHotItemArea',
    method: 'get'
  })
}

// 赛事统计
export function getEventsCount(type) {
  return request({
    url: '/index/getMatchCount',
    method: 'get',
    params: { type }
  })
}

// 热门赛事
export function getRankCount() {
  return request({
    url: '/index/getHotMatch',
    method: 'get'
  })
}

// 热度云词
export function getHotWords() {
  return request({
    url: '/index/getHotWord',
    method: 'get'
  })
}
