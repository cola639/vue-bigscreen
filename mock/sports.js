const data = {
  ss: 1428, // 赛事
  qt: 0, // 其他
  jszx: 381, // 健身资讯
  visit: 1 // 访问人数
}

module.exports = [
  // user login
  {
    url: '/index/getYssVisitCount',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data
      }
    }
  }
]
