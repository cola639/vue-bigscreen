var uploadedDataURL = '/asset/get/s/data-1602465184603-MDCI9F57V.json'
var data = []
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('广东', geoJson)
  data = geoJson.features.map(item => {
    return {
      value: (Math.random() * 1000).toFixed(0),
      name: item.properties.name
    }
  })
  var gdGeoCoordMap = {
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
  var convertData = function (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = gdGeoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }
  var gzname = ['广州市']
  var gzvalue = [300]
  var gzs = []
  for (var i = 0; i < gzname.length; i++) {
    gzs.push({
      name: gzname[i],
      value: gzvalue[i]
    })
  }
  var gdGeoCoordMap2 = {
    广州市: [113.507649675, 23.5300491021]
  }
  var convertData2 = function (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = gdGeoCoordMap2[data[i].name]
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
    backgroundColor: '#131C38',
    tooltip: {
      backgroundColor: 'rgba(0,0,0,0)',
      trigger: 'axis'
    },
    legend: {
      show: false
    },
    geo: [
      {
        map: '广东',
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '50%'],
        layoutSize: '180%',
        show: true,
        roam: false,
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(192,245,249,.8)',
            borderWidth: 3,
            shadowColor: '#6FFDFF',
            shadowOffsetY: 0,
            shadowBlur: 10,
            areaColor: 'rgba(29,85,139,.6)'
          }
        },
        emphasis: {
          areaColor: 'rgba(29,85,139,.6)'
        }
      },
      {
        map: '广东',
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '50%'],
        layoutSize: '180%',
        show: true,
        roam: false,
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(192,245,249,.8)',
            borderWidth: 3,
            shadowColor: '#2C99F6',
            shadowOffsetY: 0,
            shadowBlur: 120,
            areaColor: 'rgba(29,85,139,.6)'
          }
        },
        emphasis: {
          areaColor: 'rgba(29,85,139,.6)'
        }
      },
      //重影
      {
        type: 'map',
        map: '广东',
        zlevel: -1,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '50.7%'],
        layoutSize: '180%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderColor: 'rgba(172, 122, 255,0.5)',
            shadowColor: 'rgba(172, 122, 255,0.5)',
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: 'rgba(5,21,35,0.1)'
          }
        }
      },
      {
        type: 'map',
        map: '广东',
        zlevel: -2,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '51.4%'],
        layoutSize: '180%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderColor: 'rgba(172, 122, 255,0.4)',
            shadowColor: 'rgba(172, 122, 255,0.6)',
            shadowOffsetY: 5,
            shadowBlur: 15,
            areaColor: 'rgba(5,21,35,0.1)'
          }
        }
      },
      {
        type: 'map',
        map: '广东',
        zlevel: -3,
        aspectScale: 1,
        zoom: 0.65,
        layoutCenter: ['50%', '52.1%'],
        layoutSize: '180%',
        roam: false,
        silent: true,
        itemStyle: {
          normal: {
            borderColor: 'rgba(172, 122, 255,0.3)',
            shadowColor: 'rgba(172, 122, 255,0.8)',
            shadowOffsetY: 15,
            shadowBlur: 8,
            areaColor: 'rgba(5,21,35,0.1)'
          }
        }
      }
    ],
    series: [
      {
        tooltip: {
          trigger: 'item',
          position: 'inside',
          formatter: function (item) {
            var tipHtml = ''
            tipHtml =
              '<div style="font-size: 16px;height: 28px;line-height: 30px;background:#000259;opacity: 0.75;border-radius: 3px;color:#fff">' +
              '&nbsp;&nbsp;' +
              item.data.name +
              '&nbsp;&nbsp;&nbsp;' +
              item.data.value +
              '人&nbsp;&nbsp;' +
              '</span>' +
              '</div>'
            return tipHtml
          }
        },
        name: '广东省数据',
        type: 'map',
        map: '广东', // 自定义扩展图表类型
        aspectScale: 1,
        zoom: 0.65, //缩放
        showLegendSymbol: false,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'RGBA(37,108,190,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'RGBA(15,169,195,1)' // 50% 处的颜色
                }
              ],
              global: true // 缺省为 false
            },
            borderColor: '#4ECEE6',
            borderWidth: 1
          },
          emphasis: {
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'RGBA(37,108,190,1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'RGBA(15,169,195,1)' // 50% 处的颜色
                }
              ],
              global: true // 缺省为 false
            }
          }
        },
        layoutCenter: ['50%', '50%'],
        layoutSize: '180%',
        markPoint: {
          symbol: 'none'
        },
        data: data
      },
      {
        tooltip: {
          show: false
        },
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          brushType: 'stroke'
        },
        showEffectOn: 'render',
        itemStyle: {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(0,255,246,0.1)'
                },
                {
                  offset: 0.6,
                  color: 'rgba(0,255,246,0.4)'
                },
                {
                  offset: 0.85,
                  color: 'transparent'
                },
                {
                  offset: 1,
                  color: '#FFF'
                }
              ],
              global: false // 缺省为 false
            }
          }
        },
        label: {
          normal: {
            color: '#fff'
          }
        },
        symbol: 'circle',
        symbolSize: 18,
        data: convertData(data),
        zlevel: 1
      },
      // 默认不点击 地图显示TooTip
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              return '{fline|' + params.name + '}{tline|' + gzvalue[params.dataIndex] + '人}'
            },
            position: [1, 0, 0, 0],
            backgroundColor: 'rgba(0,2,89,.75)',
            padding: [0, 0],
            borderRadius: [0, 3, 3, 0],
            lineHeight: 28,
            color: '#ffffff',
            rich: {
              fline: {
                padding: [0, 5, 0, 10],
                color: '#ffffff',
                fontSize: 16
              },
              tline: {
                padding: [0, 10, 0, 5],
                color: '#ffffff',
                fontSize: 16
              }
            }
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          color: '#00FFF6'
        },
        symbol: 'rect',
        symbolSize: [1, 50],
        z: 999,
        data: convertData2(gzs)
      }
    ]
  }
  myChart.setOption(option)
  //showTips('广州市');
})

// myChart.on('globalout', () => {
//   setTimeout(() => {
//     showTips('广州市')
//   }, 500)
// })
/*
// 默认鼠标移出canvas后显示广州的tooltip信息
myChart.on("globalout", () => {
    setTimeout(() => {
        showTips('广州市')
    }, 500)
})

function showTips(name) {
    data.forEach((item, i) => {
        if (item.name.includes(name)) {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: i
            });
            myChart.dispatchAction({
                type: 'mapSelect',
                seriesIndex: 0,
                dataIndex: i
            });
        }
    })
}*/
