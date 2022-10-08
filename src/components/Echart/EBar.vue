<template>
  <div :id="domId" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  name: 'EBar',
  components: {},
  data() {
    return {}
  },
  props: {
    type: { type: Number, required: true }, // render type
    domId: { type: String, required: true },
    data: { type: Object, required: true }
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  watch: {
    data(newV, oldV) {
      this.data = newV
      this.type === 1 ? this.initAnalysisChart() : this.initEventsChart()
    }
  },
  methods: {
    // left bottom
    initAnalysisChart() {
      console.log('domId', this.domId)
      const chartDom = document.getElementById(this.domId)
      const myChart = this.$echarts.init(chartDom)
      const { dataArr, dateArr } = this.data

      let option

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#3851AD'
            }
          }
        },

        xAxis: {
          type: 'category',
          data: dateArr,
          boundaryGap: false, // 距离

          axisPointer: {
            type: 'shadow'
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //更改坐标轴文字颜色
              fontSize: 12 //更改坐标轴文字大小
            }
          }
        },
        yAxis: {
          type: 'value',
          min: 0,
          // max: 90,
          // interval: 20,
          splitLine: {
            show: true,
            // yAxis 穿透线
            lineStyle: {
              color: '#0095ff'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', // 更改坐标轴文字颜色
              fontSize: 10 // 更改坐标轴文字大小
            },
            formatter: '{value} '
          }
        },
        series: [
          {
            data: dataArr,
            type: 'line',
            areaStyle: {
              color: 'rgb(24,41,76)'
            },

            tooltip: {
              valueFormatter: function (value) {
                return ' 点击量 ' + value
              }
            },
            // symbol: 'circle',
            symbolSize: 7,
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#0095FF',
                  width: 2
                }
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    },

    // center bottom
    initEventsChart() {
      console.log('domId', this.domId)
      const chartDom = document.getElementById(this.domId)
      const myChart = this.$echarts.init(chartDom)
      const { dataArr, ratioArr, labelArr } = this.data
      console.log('🚀 ~ initEventsChart ~ ratioArr', ratioArr)
      console.log('🚀 ~ initEventsChart ~ dataArr', dataArr)
      let option

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#3851AD'
            }
          }
        },
        toolbox: {
          feature: {
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ['line', 'bar'] },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        dataZoom: {
          show: true,
          type: 'inside',
          realtime: true,
          height: 10,
          start: 0,
          end: 30,
          textStyle: true
        },
        legend: {
          // data: ['Evaporation', 'Precipitation', 'Temperature']
          data: ['项目数', '点击率'],
          align: 'left',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 35
        },
        xAxis: [
          {
            type: 'category',
            data: labelArr,
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff', //更改坐标轴文字颜色
                fontSize: 14 //更改坐标轴文字大小
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '项目数',
            nameTextStyle: {
              color: '#fff'
            },
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              },
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '点击率',
            nameTextStyle: {
              color: '#fff'
            },
            min: 0,
            max: 100,
            interval: 20,

            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff', //更改坐标轴文字颜色
                fontSize: 12 //更改坐标轴文字大小
              },
              formatter: '{value} '
            },
            splitLine: {
              show: true,
              // yAxis 穿透线
              lineStyle: {
                color: '#0095ff'
              }
            }
          }
        ],
        series: [
          {
            name: '项目数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value
              }
            },
            itemStyle: {
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#00C7FF' },
                { offset: 1, color: '#0095FF' }
              ]),
              barBorderRadius: [6, 6, 0, 0] // （顺时针左上，右上，右下，左下）
            },
            barWidth: 15,
            data: dataArr
          },
          {
            name: '点击率',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %'
              }
            },
            symbol: 'none',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#F8C700',
                  width: 3
                }
              }
              // 0.1的线条是非常细的了
              // normal: {
              //   lineStyle: {

              //   }
              // }
            },
            barWidth: 2,
            data: ratioArr
          }
        ]
      }
      option && myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
canvas {
  width: 276px;
  height: 147px;
}
</style>
