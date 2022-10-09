<template>
  <div :id="domId" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
import { debounce } from '@/utils/number'
export default {
  name: 'EBar',
  components: {},
  data() {
    return {
      timeTicket: null
    }
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
    data(newV) {
      this.timeTicket && clearInterval(this.timeTicket)
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
              fontSize: 10 //更改坐标轴文字大小
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
      const chartDom = document.getElementById(this.domId)
      const myChart = this.$echarts.init(chartDom)
      const { dataArr, ratioArr, labelArr } = this.data
      // console.log('🚀 ~ initEventsChart ~ labelArr', labelArr)
      // console.log('🚀 ~ initEventsChart ~ ratioArr', ratioArr)
      // console.log('🚀 ~ initEventsChart ~ dataArr', dataArr)

      let option

      option = {
        tooltip: {
          trigger: 'axis',
          position: ['80%', '10%'],
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#3851AD'
            }
          }
        },
        // toolbox: {
        //   feature: {
        //     // dataView: { show: true, readOnly: false },
        //     // magicType: { show: true, type: ['line', 'bar'] },
        //     // restore: { show: true },
        //     // saveAsImage: { show: true }
        //   }
        // },
        // slider
        dataZoom: {
          show: true,
          type: 'inside',
          realtime: true,
          height: 10,
          startValue: 0,
          endValue: 5,
          textStyle: true
        },
        legend: {
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

      // setTimeout(() => {
      //   // myChart.dispatchAction({
      //   //   type: 'showTip',
      //   //   seriesIndex: 1,
      //   //   dataIndex: 0
      //   // })

      //   clearInterval(this.timeTicket)
      // }, 5 * 1000)

      /*轮播展示数据*/

      let count = 0
      // let timeTicket = null
      // let startIndex = 0
      // let endIndex = 25
      const intervalSecs = 3 * 1000 // each item show time interval
      // const intervalZoom = 25 // each item slider interval
      const dataLength = option.xAxis[0].data.length
      // const quarterLen = Math.floor(dataLength / 4)

      this.timeTicket && clearInterval(this.timeTicket)

      // dataZoom切换展示
      // 控制dataZoom显示 0-25 25-50 50-75 75-100

      this.timeTicket = setInterval(function () {
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: count % dataLength
        })
        // myChart.dispatchAction({
        //   type: 'showTip',
        //   seriesIndex: 1,
        //   dataIndex: count % dataLength
        // })

        count++

        let x0 = option.xAxis[0].data[0]
        let s0 = option.series[0].data[0]
        option.xAxis[0].data.shift()
        option.xAxis[0].data.push(x0)
        option.series[0].data.shift()
        option.series[0].data.push(s0)
        myChart.setOption(option)
      }, intervalSecs)

      myChart.on('mouseover', () => {
        this.timeTicket && clearInterval(this.timeTicket)
        // myChart.dispatchAction({
        //   type: 'downplay',
        //   seriesIndex: 0
        // })
        // myChart.dispatchAction({
        //   type: 'highlight',
        //   seriesIndex: 0,
        //   dataIndex: params.dataIndex
        // })
        // myChart.dispatchAction({
        //   type: 'showTip',
        //   seriesIndex: 0,
        //   dataIndex: params.dataIndex
        // })
      })

      myChart.on('click', () => {
        this.timeTicket && clearInterval(this.timeTicket)
        // myChart.dispatchAction({
        //   type: 'downplay',
        //   seriesIndex: 0
        // })
        // myChart.dispatchAction({
        //   type: 'highlight',
        //   seriesIndex: 0,
        //   dataIndex: params.dataIndex
        // })
        // myChart.dispatchAction({
        //   type: 'showTip',
        //   seriesIndex: 0,
        //   dataIndex: params.dataIndex
        // })
      })

      myChart.on('mouseout', debounce(this.initEventsChart, 3 * 1000))
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
