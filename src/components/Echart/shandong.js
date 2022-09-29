/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = '/asset/get/s/data-1482909892121-BJ3auk-Se.json'
myChart.showLoading()
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('jiangxi', geoJson)
  myChart.hideLoading()
  var geoCoordMap = {
    济南市: [117.121225, 36.66466],
    菏泽市: [115.480656, 35.23375],
    济宁市: [116.59, 35.38],
    德州市: [116.39, 37.45],
    聊城市: [115.97, 36.45],
    泰安市: [117.13, 36.18],
    临沂市: [118.35, 35.05],
    淄博市: [118.05, 36.78],
    枣庄市: [117.57, 34.86],
    滨州市: [118.03, 37.36],
    潍坊市: [119.1, 36.62],
    东营市: [118.49, 37.46],
    青岛市: [120.3, 36.62],
    烟台市: [120.9, 37.32],
    威海市: [122.1, 37.2],
    日照市: [119.1, 35.62],
    济宁市: [116.7, 35.42],
    莱芜市: [117.7, 36.28]
  }
  var data = [
    { name: '济南市', value: 390 },
    { name: '菏泽市', value: 158 },
    { name: '德州市', value: 252 },
    { name: '聊城市', value: 99 },
    { name: '泰安市', value: 189 },
    { name: '临沂市', value: 52 },
    { name: '淄博市', value: 158 },
    { name: '枣庄市', value: 152 },
    { name: '滨州市', value: 189 },
    { name: '潍坊市', value: 160 },
    { name: '东营市', value: 80 },
    { name: '青岛市', value: 180 },
    { name: '烟台市', value: 190 },
    { name: '威海市', value: 290 },
    { name: '日照市', value: 190 },
    { name: '济宁市', value: 190 },
    { name: '莱芜市', value: 290 }
  ]
  var max = 480,
    min = 9 // todo
  var maxSize4Pin = 100,
    minSize4Pin = 20

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
      text: '“会员活跃度” - 山东省',
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
      map: 'jiangxi',
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
        map: 'jiangxi',
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
        data: data
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
