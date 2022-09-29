<template>
  <div id="echart-line" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  name: 'Eip',
  components: {},
  data() {
    return {}
  },
  props: {},
  created() {},
  mounted() {
    this.initChart()
  },
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {
    initChart() {
      var uploadedDataURL = '/asset/get/s/data-1482909784051-BJgwuy-Sl.json'
      myChart.showLoading()
      $.getJSON(uploadedDataURL, function (geoJson) {
        echarts.registerMap('jiangxi', geoJson) // register map
        myChart.hideLoading()
        var geoCoordMap = {
          珠海市: [113.353986, 21.924979],
          广州市: [113.480637, 23.125178],
          湛江市: [110.264977, 21.274898],
          茂名市: [110.919229, 21.659751],
          阳江市: [111.825107, 21.859222],
          云浮市: [112.044439, 22.629801],
          肇庆市: [112.472529, 23.051546],
          江门市: [112.894942, 22.090431],
          中山市: [113.382391, 22.321113],
          佛山市: [113.022717, 22.828762],
          清远市: [113.051227, 23.685022],
          韶关市: [113.591544, 24.501322],
          河源市: [114.897802, 23.746266],
          梅州市: [116.117582, 24.099112],
          潮州市: [116.692301, 23.661701],
          揭阳市: [116.255733, 23.143778],
          汕头市: [116.708463, 22.87102],
          汕尾市: [115.364238, 22.774485],
          深圳市: [114.085947, 22.347],
          东莞市: [113.746262, 22.746237],
          惠州市: [114.412599, 23.079404]
        }
        var mydata = [
          { name: '珠海市', value: 250973 },
          { name: '广州市', value: 453088 },
          { name: '中山市', value: 424302 },
          { name: '佛山市', value: 1135329 },
          { name: '揭阳市', value: 30035 },
          { name: '梅州市', value: 47148 },
          { name: '汕头市', value: 65920 },
          { name: '东莞市', value: 428881 },
          { name: '惠州市', value: 300025 },
          { name: '汕尾市', value: 20154 },
          { name: '江门市', value: 231140 },
          { name: '清远市', value: 136351 },
          { name: '肇庆市', value: 126912 },
          { name: '河源市', value: 37704 },
          { name: '韶关市', value: 44550 },
          { name: '云浮市', value: 31672 },
          { name: '潮州市', value: 26802 },
          { name: '阳江市', value: 3114 },
          { name: '茂名市', value: 39238 },
          { name: '湛江市', value: 48422 }
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

          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if (typeof params.value[2] == 'undefined') {
                return params.name + ' : ' + params.value
              } else {
                return params.name + ' : ' + params.value[2]
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
            }
          },
          series: [
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
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#F4E925'
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
    }
  }
}
</script>
<style lang="scss" scoped></style>
