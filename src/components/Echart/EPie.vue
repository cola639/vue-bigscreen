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
  props: {
    visitData: { type: Object, required: true }
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  watch: {
    // watch value change init echart
    visitData(newV, oldV) {
      this.visitData = newV
      this.initChart()
    }
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('echart-line')
      const myChart = this.$echarts.init(chartDom)
      const { ss, qt, jszx } = this.visitData

      let option
      option = {
        // title: {
        //   text: 'Referer of a Website',
        //   subtext: 'Fake Data',
        //   left: 'center'
        // },
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 'left'
        // },
        series: [
          {
            name: '访问统计',
            type: 'pie',
            radius: '80%',
            data: [
              { value: jszx, name: '健身咨询', label: { color: '#fff' } },
              { value: ss, name: '赛事', label: { color: '#fff' } },
              { value: qt, name: '其他', label: { color: '#fff' } }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped></style>
