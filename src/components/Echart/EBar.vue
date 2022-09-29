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
    domId: { type: String, required: true },
    option: { type: Object, required: true }
  },
  created() {},
  mounted() {
    this.initChart()
    // this.$nextTick(() => {
    //   this.initChart()
    // })
  },
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {
    // left bottom
    // initChart() {
    //   console.log('domId', this.domId)
    //   const chartDom = document.getElementById(this.domId)
    //   const myChart = this.echarts.init(chartDom)
    //   let option

    // option = {
    //   xAxis: {
    //     type: 'category',
    //     boundaryGap: false,
    //     data: ['10-21', '10-22', '10-23', '10-24', '10-25', '10-26']
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [
    //     {
    //       data: [20, 60, 50, 40, 35, 50, 20],
    //       type: 'line',
    //       areaStyle: {
    //         color: '#f316'
    //       }
    //     }
    //   ]
    // }

    //   option && myChart.setOption(option)
    // }

    // center bottom
    initChart() {
      console.log('domId', this.domId)
      const chartDom = document.getElementById(this.domId)
      const myChart = this.echarts.init(chartDom)
      myChart.setOption(this.option)

      // option = {
      //   tooltip: {
      //     trigger: 'axis',
      //     axisPointer: {
      //       type: 'cross',
      //       crossStyle: {
      //         color: '#3851AD'
      //       }
      //     }
      //   },
      //   toolbox: {
      //     feature: {
      //       // dataView: { show: true, readOnly: false },
      //       // magicType: { show: true, type: ['line', 'bar'] },
      //       // restore: { show: true },
      //       // saveAsImage: { show: true }
      //     }
      //   },
      //   dataZoom: {
      //     show: true,
      //     type: 'inside',
      //     realtime: true,
      //     height: 10,
      //     start: 0,
      //     end: 100,
      //     textStyle: true
      //   },
      //   legend: {
      //     // data: ['Evaporation', 'Precipitation', 'Temperature']
      //     data: ['参与率', '点击率'],
      //     align: 'left',
      //     textStyle: {
      //       color: '#fff'
      //     },
      //     itemWidth: 10,
      //     itemHeight: 10,
      //     itemGap: 35
      //   },
      //   xAxis: [
      //     {
      //       type: 'category',
      //       data: ['广州', '深圳', '佛山', '东莞', '汕头', '清远', '肇庆'],
      //       axisPointer: {
      //         type: 'shadow'
      //       },
      //       axisLabel: {
      //         show: true,
      //         textStyle: {
      //           color: '#fff', //更改坐标轴文字颜色
      //           fontSize: 14 //更改坐标轴文字大小
      //         }
      //       }
      //     }
      //   ],
      //   yAxis: [
      //     {
      //       type: 'value',
      //       name: '参与率',
      //       nameTextStyle: {
      //         color: '#fff'
      //       },
      //       min: 0,
      //       max: 100,
      //       interval: 20,
      //       axisLabel: {
      //         show: true,
      //         textStyle: {
      //           color: '#fff', //更改坐标轴文字颜色
      //           fontSize: 12 //更改坐标轴文字大小
      //         },
      //         formatter: '{value} '
      //       }
      //     },
      //     {
      //       type: 'value',
      //       name: '点击率',
      //       nameTextStyle: {
      //         color: '#fff'
      //       },
      //       min: 0,
      //       max: 100,
      //       interval: 20,

      //       axisLabel: {
      //         show: true,
      //         textStyle: {
      //           color: '#fff', //更改坐标轴文字颜色
      //           fontSize: 12 //更改坐标轴文字大小
      //         },
      //         formatter: '{value} '
      //       }
      //     }
      //   ],
      //   series: [
      //     {
      //       name: '参与率',
      //       type: 'bar',
      //       tooltip: {
      //         valueFormatter: function (value) {
      //           return value + ' %'
      //         }
      //       },
      //       itemStyle: {
      //         color: this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //           { offset: 0, color: '#00C7FF' },
      //           { offset: 1, color: '#0095FF' }
      //         ]),
      //         barBorderRadius: [6, 6, 0, 0] // （顺时针左上，右上，右下，左下）
      //       },
      //       barWidth: 15,
      //       data: [80, 60, 40, 60, 80, 60, 40]
      //     },
      //     {
      //       name: '点击率',
      //       type: 'line',
      //       yAxisIndex: 1,
      //       tooltip: {
      //         valueFormatter: function (value) {
      //           return value + ' %'
      //         }
      //       },
      //       symbol: 'none',
      //       itemStyle: {
      //         normal: {
      //           lineStyle: {
      //             color: '#F8C700',
      //             width: 3
      //           }
      //         }

      //       },
      //       barWidth: 2,
      //       data: [80, 60, 40, 60, 80, 60, 40]
      //     }
      //   ]
      // }
      // option && myChart.setOption(option)
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
