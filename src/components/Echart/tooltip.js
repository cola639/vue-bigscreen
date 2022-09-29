var uploadedDataURL = '/asset/get/s/data-1592366734603-Z-iQwIHJk.json'
var center = {
  南京市: [118.767413, 32.041544],
  无锡市: [120.301663, 31.574729],
  徐州市: [117.184811, 34.261792],
  常州市: [119.946973, 31.772752],
  苏州市: [120.619585, 31.299379],
  南通市: [120.864608, 32.016212],
  连云港市: [119.178821, 34.600018],
  淮安市: [119.021265, 33.597506],
  盐城市: [120.139998, 33.377631],
  扬州市: [119.421003, 32.393159],
  镇江市: [119.452753, 32.204402],
  泰州市: [119.915176, 32.484882],
  宿迁市: [118.275162, 33.963008]
}
var option = null
$.get(uploadedDataURL, function (json) {
  echarts.registerMap('js', json)
  option = {
    visualMap: {
      show: false,
      max: 100,
      seriesIndex: [3],
      inRange: {
        color: ['#A5DCF4', '#006edd']
      }
    },
    geo: [
      {
        map: 'js',
        roam: false, //是否允许缩放
        zoom: 1.1, //默认显示级别
        scaleLimit: {
          min: 0,
          max: 3
        }, //缩放级别
        itemStyle: {
          normal: {
            areaColor: '#013C62',
            shadowColor: '#013C62',
            shadowBlur: 20,
            shadowOffsetX: -5,
            shadowOffsetY: 15
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
              return (
                '{fline|地点：' +
                params.data.city +
                '}\n{tline|' +
                (params.data.info || '发生xx集件') +
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
              return (
                '{fline|地点：' +
                params.data.city +
                '}\n{tline|' +
                (params.data.info || '发生xx集件') +
                '}'
              )
            },
            position: 'top',
            backgroundColor: 'rgba(233,63,66,.9)',
            padding: [0, 0],
            borderRadius: 3,
            lineHeight: 32,
            color: '#ffffff',
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
          color: '#e93f42'
        }
      },
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
              return (
                '{fline|地点：' +
                params.data.city +
                '}\n{tline|' +
                (params.data.info || '发生xx集件') +
                '}'
              )
            },
            position: 'top',
            backgroundColor: 'rgba(8,186,236,.9)',
            padding: [0, 0],
            borderRadius: 3,
            lineHeight: 32,
            color: '#ffffff',
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
          color: '#08baec'
        }
      },
      //地图
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
        itemStyle: {
          normal: {
            borderColor: '#2980b9',
            borderWidth: 1,
            areaColor: '#12235c'
          },
          emphasis: {
            areaColor: '#FA8C16',
            borderWidth: 0,
            color: 'green'
          }
        },
        data: Object.keys(center).map(name => {
          return {
            name: name,
            value: Math.random() * 100
          }
        })
      }
    ]
  }
  myChart.setOption(option)
})
var timer = setInterval(() => {
  //数据情况重绘，清除formatter移动效果，也可根据自身需求是否需要，删除这两行代码
  /*option.series[seriesjson[runidx].createType-1].data = [];
    myChart.setOption(option, true);*/
  for (var i = 0; i < 3; i++) {
    option.series[i].data = []
  }
  var cityIndex = Math.floor(Math.random() * 13)
  var runidx = Math.floor(Math.random() * 3)
  var coordCity = Object.keys(center)[cityIndex]
  var coord = center[coordCity]
  option.series[runidx].data = [
    {
      city: coordCity,
      value: coord
    }
  ]
  // console.log(option.series[runidx].data)
  // option.series[4].data = option.series[4].data.sort(function(a,b){
  //     return b.value-a.value;
  // });
  myChart.setOption(option, true)
}, Math.floor(Math.random() * 10000) + 3000)
