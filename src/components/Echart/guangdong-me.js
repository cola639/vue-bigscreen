var uploadedDataURL = '/asset/get/s/data-1602465184603-MDCI9F57V.json'
myChart.showLoading()
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('guangdong', geoJson)
  myChart.hideLoading()
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
  var data = [
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

  var convertData = function (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }

  option = {
    backgroundColor: '#020933',
    title: {
      top: 20,
      text: '热门项目运动',
      subtext: '',
      x: 'center',
      textStyle: {
        color: '#ccc'
      }
    },

    // Hover city Tooltip
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if (typeof params.value[2] == 'undefined') {
          return params.name + ' : ' + params.value
        }
      }
    },
    /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
    legend: {
      orient: 'vertical',
      y: 'bottom',
      x: 'right',
      data: ['pm2.5'],
      textStyle: {
        color: '#fff'
      }
    },
    // No much difference
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
        // color: ['#3B5077', '#031525'] // 蓝黑
        // color: ['#ffc0cb', '#800080'] // 红紫
        // color: ['#3C3B3F', '#605C3C'] // 黑绿
        //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
        //color: ['#23074d', '#cc5333'] // 紫红
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#1488CC', '#2B32B2'] // 浅蓝
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
      }
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //             dataView: {readOnly: false},
    //             restore: {},
    //             saveAsImage: {}
    //             }
    // },
    geo: {
      show: true,
      map: 'guangdong',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      roam: true,
      // Each city style
      itemStyle: {
        // each small city shape
        normal: {
          areaColor: 'transparent',
          borderColor: '#3fdaff',
          borderWidth: 2,
          shadowColor: 'rgba(63, 218, 255, 0.5)',
          shadowBlur: 30
        },
        // Hover Each city style
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: [
      // Default each city data
      {
        name: 'light',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
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
      },
      {
        type: 'map',
        map: 'guangdong',
        geoIndex: 0,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#FFFFFF'
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        animation: false,
        data
      },
      // Top 5 item
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(
          data
            .sort(function (a, b) {
              return b.value - a.value
            })
            .slice(0, 5)
        ),
        symbolSize: function (val) {
          return val[2] / 10
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#F4E925',
            shadowBlur: 10,
            shadowColor: '#05C3F9'
          }
        },
        zlevel: 1
      }
    ]
  }
  myChart.setOption(option)
})
