const data = {
  ss: 1428, // 赛事
  qt: 100, // 其他
  jszx: 381, // 健身资讯
  visit: 100 // 访问人数
}

const dayData = {
  msg: '操作成功',
  code: 0,
  data: {
    result: [
      {
        date: '09-20', //时间
        num: 0 //次数
      },
      {
        date: '09-21',
        num: 37
      },
      {
        date: '09-22',
        num: 43
      },
      {
        date: '09-23',
        num: 11
      },
      {
        date: '09-24',
        num: 0
      },
      {
        date: '09-25',
        num: 0
      },
      {
        date: '09-26',
        num: 0
      }
    ],
    total: 91 //总数
  }
}

const monthData = {
  msg: '操作成功',
  code: 0,
  data: {
    result: [
      {
        date: '07-20', //时间
        num: 0 //次数
      },
      {
        date: '08-21',
        num: 37
      },
      {
        date: '09-22',
        num: 43
      },
      {
        date: '10-23',
        num: 11
      },
      {
        date: '11-24',
        num: 0
      },
      {
        date: '12-25',
        num: 0
      },
      {
        date: '01-26',
        num: 0
      }
    ],
    total: 91 //总数
  }
}

const yearData = {
  msg: '操作成功',
  code: 0,
  data: {
    result: [
      {
        date: '2016', //时间
        num: 0 //次数
      },
      {
        date: '2017',
        num: 37
      },
      {
        date: '2018',
        num: 43
      },
      {
        date: '2019',
        num: 11
      },
      {
        date: '2020',
        num: 110
      },
      {
        date: '2021',
        num: 20
      },
      {
        date: '2022',
        num: 110
      }
    ],
    total: 91 //总数
  }
}

module.exports = [
  {
    url: '/index/getYssVisitCount',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data
      }
    }
  },

  {
    url: '/index/getJszxData.*',
    type: 'get',
    response: config => {
      const { type } = config.query
      let data
      switch (type) {
        case 'day':
          data = dayData
          break
        case 'month':
          data = monthData
          break
        case 'year':
          data = yearData
          break

        default:
          break
      }

      return {
        code: 200,
        data
      }
    }
  }
]
