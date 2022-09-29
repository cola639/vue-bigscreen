<template>
  <div :id="domId" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
import guangDong from '@/assets/map/guangDong.json'
export default {
  name: 'EMap',
  components: {},
  data() {
    return {
      myChart: null,
      timer: null
    }
  },
  props: { domId: { type: String, required: true } },
  created() {},
  mounted() {
    this.echarts.registerMap('js', guangDong)
    this.noHoverInit()
  },
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {
    noHoverInit() {
      let center = {
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

      let cityData = [
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
      let option = null

      option = {
        title: {
          top: 20,
          text: '热门项目运动',
          subtext: '',
          x: 'center',
          left: 'left',
          textStyle: {
            color: '#ccc'
          }
        },
        backgroundColor: 'transparent',
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
            // geo city || background city
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
                  // console.log('🚀 ~ params', JSON.stringify(params))
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
                backgroundColor: '#0095ff',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#f7fafb',
                rich: {
                  fline: {
                    padding: [10, 10, 10, 10],
                    color: '#ffffff'
                  },
                  tline: {
                    padding: [10, 10, 10, 10],
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
                borderColor: '#0095ff',
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 30
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            data: Object.keys(center).map(name => {
              // console.log('Object.keys(center)', JSON.stringify(Object.keys(center)))
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

      const chartDom = document.getElementById(this.domId)
      this.myChart = this.echarts.init(chartDom)
      this.myChart.setOption(option)

      let cityIndex = 0
      this.timer = setInterval(() => {
        let coordCity = Object.keys(center)[cityIndex]
        let coord = center[coordCity]

        // TODO:
        option.series[0].data = [
          {
            city: coordCity,
            value: coord
          }
        ]

        cityIndex === 21 ? (cityIndex = 0) : cityIndex++

        this.myChart.setOption(option, true)
      }, 6 * 1000)

      this.myChart.on('mouseover', params => {
        this.timer ? clearInterval(this.timer) : null
        const index = cityData.findIndex(item => item.name === params.name)
        let coordCity = params.name
        let coord = center[coordCity]
        option.series[0].data = [
          {
            city: params.name,
            value: coord
          }
        ]
        this.myChart.setOption(option, true)
      })

      this.myChart.on('mouseout', params => {
        this.timer = setInterval(() => {
          let coordCity = Object.keys(center)[cityIndex]
          let coord = center[coordCity]

          option.series[0].data = [
            {
              city: coordCity,
              value: coord
            }
          ]

          cityIndex === 21 ? (cityIndex = 0) : cityIndex++

          this.myChart.setOption(option, true)
        }, 6 * 1000)
      })
    },

    HoverInit() {
      this.timer = null
      console.log('EMap Hover')

      const geoCoordMap = {
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
      const data = [
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

      const convertData = function (data) {
        let res = []
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }

      const option = {
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

        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },
        // No much difference just background effect
        visualMap: {
          show: false,
          min: 0,
          max: 500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1]
        },

        geo: {
          show: true,
          map: 'js',
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
            map: 'js',
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

      this.myChart.setOption(option, true)
    }
  }
}
</script>
<style lang="scss" scoped></style>
