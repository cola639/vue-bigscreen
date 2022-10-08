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

const hotEvents = {
  msg: '操作成功',
  code: 0,
  data: [
    {
      num: 2, //次数
      name: '广州市' //地市
    },
    {
      num: 1,
      name: '韶关市'
    },
    {
      num: 0,
      name: '深圳市'
    },
    {
      num: 0,
      name: '珠海市'
    },
    {
      num: 0,
      name: '汕头市'
    },
    {
      num: 0,
      name: '佛山市'
    },
    {
      num: 1,
      name: '江门市'
    },
    {
      num: 0,
      name: '湛江市'
    },
    {
      num: 0,
      name: '茂名市'
    },
    {
      num: 0,
      name: '肇庆市'
    },
    {
      num: 0,
      name: '惠州市'
    },
    {
      num: 0,
      name: '梅州市'
    },
    {
      num: 0,
      name: '汕尾市'
    },
    {
      num: 0,
      name: '河源市'
    },
    {
      num: 0,
      name: '阳江市'
    },
    {
      num: 1,
      name: '清远市'
    },
    {
      num: 0,
      name: '东莞市'
    },
    {
      num: 0,
      name: '中山市'
    },
    {
      num: 0,
      name: '潮州市'
    },
    {
      num: 0,
      name: '揭阳市'
    },
    {
      num: 0,
      name: '云浮市'
    }
  ]
}

const eventsCalculate = {
  msg: '操作成功',
  code: 0,
  data: [
    {
      name: '广州市', //名称
      cityNum: 625, //数量
      ratio: '57.58' //百分比
    },
    {
      name: '韶关市',
      cityNum: 122,
      ratio: '3.06'
    },
    {
      name: '深圳市',
      cityNum: 57,
      ratio: '6.56'
    },
    {
      name: '珠海市',
      cityNum: 9,
      ratio: '0.44'
    },
    {
      name: '汕头市',
      cityNum: 85,
      ratio: '0.58'
    },
    {
      name: '佛山市',
      cityNum: 146,
      ratio: '4.23'
    },
    {
      name: '江门市',
      cityNum: 112,
      ratio: '1.75'
    },
    {
      name: '湛江市',
      cityNum: 91,
      ratio: '0'
    },
    {
      name: '茂名市',
      cityNum: 48,
      ratio: '3.06'
    },
    {
      name: '肇庆市',
      cityNum: 31,
      ratio: '4.23'
    },
    {
      name: '惠州市',
      cityNum: 159,
      ratio: '8.02'
    },
    {
      name: '梅州市',
      cityNum: 53,
      ratio: '1.17'
    },
    {
      name: '汕尾市',
      cityNum: 62,
      ratio: '0.29'
    },
    {
      name: '河源市',
      cityNum: 73,
      ratio: '0.15'
    },
    {
      name: '阳江市',
      cityNum: 6,
      ratio: '0.15'
    },
    {
      name: '清远市',
      cityNum: 145,
      ratio: '0.58'
    },
    {
      name: '东莞市',
      cityNum: 84,
      ratio: '5.54'
    },
    {
      name: '中山市',
      cityNum: 209,
      ratio: '2.62'
    },
    {
      name: '潮州市',
      cityNum: 10,
      ratio: '0'
    },
    {
      name: '揭阳市',
      cityNum: 44,
      ratio: '0'
    },
    {
      name: '云浮市',
      cityNum: 36,
      ratio: '0'
    }
  ]
}

const rankEvents = {
  msg: '操作成功',
  code: 0,
  data: [
    {
      num: 420, //次数
      name: '第十四届省运会' //名称
    },
    {
      num: 150,
      name: '第十六届省运会'
    },
    {
      num: 97,
      name: '第十五届省运会'
    },
    {
      num: 5,
      name: '网球'
    },
    {
      num: 5,
      name: '足球'
    },
    {
      num: 4,
      name: '游泳'
    },
    {
      num: 3,
      name: '蹦床'
    }
  ]
}

const hotWords = {
  msg: '操作成功',
  code: 0,
  data: [
    {
      searchName: '越秀', //名称
      num: 32 //次数
    },
    {
      searchName: '广东省',
      num: 11
    },
    {
      searchName: '广东省青少年',
      num: 8
    },
    {
      searchName: '珠海',
      num: 7
    },
    {
      searchName: '广州',
      num: 7
    }
  ]
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
  },

  {
    url: '/index/getHotItemArea',
    type: 'get',
    response: () => {
      let data = hotEvents

      return {
        code: 200,
        data
      }
    }
  },

  {
    url: '/index/getMatchCount.*',
    type: 'get',
    response: config => {
      const { type } = config.query
      let data
      switch (type) {
        case 'area':
          data = eventsCalculate
          break
        case 'sport':
          data = eventsCalculate
          break

        default:
          break
      }

      return {
        code: 200,
        data
      }
    }
  },

  {
    url: '/index/getHotMatch',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: rankEvents
      }
    }
  },

  {
    url: '/index/getHotWord',
    type: 'get',
    response: () => {
      return {
        code: 200,
        data: hotWords
      }
    }
  }
]
