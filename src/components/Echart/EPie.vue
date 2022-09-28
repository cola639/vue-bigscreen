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
      const chartDom = document.getElementById('echart-line')
      const myChart = this.echarts.init(chartDom)
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
            name: 'Vist Count',
            type: 'pie',
            radius: '80%',
            data: [
              { value: 1048, name: '健身咨询', label: { color: '#fff' } },
              { value: 735, name: '赛事', label: { color: '#fff' } },
              { value: 580, name: '其他', label: { color: '#fff' } }
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
