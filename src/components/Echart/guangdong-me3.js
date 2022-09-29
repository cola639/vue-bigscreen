var uploadedDataURL = '/asset/get/s/data-1602465184603-MDCI9F57V.json'
var geoCoordMap = {
  广州市: [113.507649675, 23.3200491021],
  东莞市: [113.863433991, 22.9430238154],
  中山市: [113.422060021, 22.5451775145],
  云浮市: [111.750945959, 22.9379756855],
  佛山市: [113.034025635, 23.0350948405],
  惠州市: [114.41065808, 23.1135398524],
  揭阳市: [116.079500855, 23.3479994669],
  梅州市: [116.126403098, 24.304570606],
  汕头市: [116.588650288, 23.2839084533],
  汕尾市: [115.572924289, 22.9787305002],
  江门市: [112.678125341, 22.2751167835],
  河源市: [114.913721476, 23.9572508505],
  深圳市: [114.025973657, 22.5960535462],
  清远市: [113.040773349, 23.9984685504],
  湛江市: [110.165067263, 21.2574631038],
  潮州市: [116.830075991, 23.7618116765],
  珠海市: [113.362447026, 22.1369146461],
  肇庆市: [112.37965337, 23.5786632829],
  茂名市: [110.931245331, 21.9682257188],
  阳江市: [111.777009756, 21.9715173045],
  韶关市: [113.594461107, 24.8029603119]
}

var center = {
  广州市: [113.507649675, 23.3200491021],
  东莞市: [113.863433991, 22.9430238154],
  中山市: [113.422060021, 22.5451775145],
  云浮市: [111.750945959, 22.9379756855],
  佛山市: [113.034025635, 23.0350948405],
  惠州市: [114.41065808, 23.1135398524],
  揭阳市: [116.079500855, 23.3479994669],
  梅州市: [116.126403098, 24.304570606],
  汕头市: [116.588650288, 23.2839084533],
  汕尾市: [115.572924289, 22.9787305002],
  江门市: [112.678125341, 22.2751167835],
  河源市: [114.913721476, 23.9572508505],
  深圳市: [114.025973657, 22.5960535462],
  清远市: [113.040773349, 23.9984685504],
  湛江市: [110.165067263, 21.2574631038],
  潮州市: [116.830075991, 23.7618116765],
  珠海市: [113.362447026, 22.1369146461],
  肇庆市: [112.37965337, 23.5786632829],
  茂名市: [110.931245331, 21.9682257188],
  阳江市: [111.777009756, 21.9715173045],
  韶关市: [113.594461107, 24.8029603119]
}

var cityData = [
  { name: '广州市', value: 390 },
  { name: '东莞市', value: 158 },
  { name: '中山市', value: 252 },
  { name: '云浮市', value: 99 },
  { name: '佛山市', value: 189 },
  { name: '惠州市', value: 52 },
  { name: '揭阳市', value: 158 },
  { name: '梅州市', value: 152 },
  { name: '汕头市', value: 189 },
  { name: '汕尾市', value: 160 },
  { name: '江门市', value: 80 },
  { name: '河源市', value: 180 },
  { name: '深圳市', value: 190 },
  { name: '湛江市', value: 290 },
  { name: '潮州市', value: 190 },
  { name: '珠海市', value: 190 },
  { name: '肇庆市', value: 290 },
  { name: '清远市', value: 290 },
  { name: '茂名市', value: 190 },
  { name: '阳江市', value: 190 },
  { name: '韶关市', value: 290 }
]
var option = null

$.get(uploadedDataURL, function (json) {
  echarts.registerMap('js', json)

  option = {
    backgroundColor: '#020933',
    // background
    // visualMap: {
    //     show: false, // left-bottom legend
    //     max: 100,
    //     seriesIndex: [3],
    //     inRange: {
    //         color: ['#A5DCF4', '#006edd']
    //     }
    // },
    // geo city background city, swipe necessary
    geo: [
      {
        map: 'js',
        roam: false, //是否允许缩放
        zoom: 1.1, //默认显示级别
        scaleLimit: {
          min: 0,
          max: 3
        }, //缩放级别
        // geo city background city
        itemStyle: {
          normal: {
            areaColor: 'transparent',
            borderColor: '#3fdaff',
            borderWidth: 2,
            shadowColor: 'rgba(63, 218, 255, 0.5)',
            shadowBlur: 30
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        tooltip: {
          show: false
        }
      }
    ],
    series: [
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        z: 5,
        data: [],
        symbolSize: 14,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              console.log('🚀 ~ params', JSON.stringify(params))
              const cityName = params.data.city
              const index = cityData.findIndex(item => item.name === cityName)

              return (
                '{fline|地点：' +
                cityName +
                '}\n{tline|' +
                '数量：' +
                cityData[index]['value'] +
                '}'
              )
            },
            position: 'top',
            backgroundColor: 'rgba(254,174,33,.8)',
            padding: [0, 0],
            borderRadius: 3,
            lineHeight: 32,
            color: '#f7fafb',
            rich: {
              fline: {
                padding: [0, 10, 10, 10],
                color: '#ffffff'
              },
              tline: {
                padding: [10, 10, 0, 10],
                color: '#ffffff'
              }
            }
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          color: '#feae21'
        }
      },

      // each city shape
      {
        type: 'map',
        mapType: 'js',
        geoIndex: -1,
        zoom: 1.1, //默认显示级别
        label: {
          show: true,
          color: '#ffffff',
          emphasis: {
            color: 'white',
            show: false
          }
        },
        // Each city style
        itemStyle: {
          normal: {
            areaColor: 'transparent',
            borderColor: '#3fdaff',
            borderWidth: 2,
            shadowColor: 'rgba(63, 218, 255, 0.5)',
            shadowBlur: 30
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: Object.keys(center).map(name => {
          console.log('Object.keys(center)', JSON.stringify(Object.keys(center)))
          return {
            name: name,
            value: Math.random() * 100
          }
        })
      },

      // tooltip circle
      {
        name: 'light',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: function (val) {
          return val[2] / 10
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          emphasis: {
            show: true // hover each city tootip show
          }
        },
        itemStyle: {
          normal: {
            color: '#F4E925' // default state but not include big
          }
        }
      }
    ]
  }
  myChart.setOption(option)
})
var timer = setInterval(() => {
  //   for (var i = 0; i < 3; i++) {
  //     option.series[i].data = []
  //   }
  var cityIndex = Math.floor(Math.random() * 21)
  //   var runidx = Math.floor(Math.random() * 3)
  var coordCity = Object.keys(center)[cityIndex]
  var coord = center[coordCity]
  console.log('🚀 ~ timer ~ coordCity', coordCity)
  console.log('🚀 ~ timer ~ coord', coord)

  option.series[0].data = [
    {
      city: coordCity,
      value: coord
    }
  ]

  myChart.setOption(option, true)
}, 5 * 1000)
