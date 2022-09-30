<template>
  <div class="bigScreen">
    <!-- Module Head -->
    <div class="flex-start bs_head">
      <div class="inline-block bs_head_left">
        <div class="flex-start bs_head_left_wrap">
          <div class="inline-block img-center bs_hlw_img"></div>

          <span> 天气：晴天 19-29­°C </span>
        </div>

        <div class="inline-block bs_head_left_time">
          <span class="bs_hlt_date"> 2022年9月23日 </span>
          <span class="bs_hlt_time"> 01:21:23 </span>
        </div>
      </div>
      <div class="inline-block bs_head_center">省体育局训科医公共体育服务数据分析</div>
    </div>

    <!-- Module Content -->
    <div class="flex-center bs_content">
      <!-- Module Content Left-->
      <div class="bs_content_left">
        <div class="img-center cw bs_content_left_top">
          <content-title text="粤省市访问统计" />

          <div class="rc bs_clt_info">
            <span class="inline-block bs_clt_info_item">
              访问人数
              <span-wrap :text="['2', '1', '3', '7', '5']"></span-wrap>
              人
            </span>
            <span class="inline-block bs_clt_info_item">
              健身咨询
              <span-wrap :text="['2', '1', '3', '7', '5']"></span-wrap>
              篇
            </span>
            <span class="inline-block bs_clt_info_item">
              赛事
              <span-wrap :text="['2', '1', '3', '7', '5']"></span-wrap>
              场
            </span>
          </div>

          <div class="rc bs_clt_pipe">
            <e-pie></e-pie>
          </div>
        </div>

        <div class="img-center cw bs_content_left_bottom">
          <content-title text="健康咨询点击量分析" />

          <div class="rc bs_clb_info">
            <span class="inline-block bs_clb_info_item">
              点击总量
              <span-wrap :text="['2', '1', '3', '7', '5']"></span-wrap>
              次
            </span>
          </div>

          <div class="ib rc bs_clb_list">
            <choose-item :checkList="['按周', '按月', '按年']" />
          </div>

          <div class="bs_clb_echart">
            <e-bar domId="bs_clb_bar" :option="this.analysisBar" />
          </div>
        </div>
      </div>

      <!-- Module Content Center-->
      <div class="bs_content_center">
        <div class="bs_content_center_top">
          <e-map domId="bs_content_center_top" />
        </div>
        <div class="img-center mw bs_content_center_bottom">
          <match-title text="赛事统计" />

          <e-bar domId="bs_content_center_bottom" :option="this.matchBar" />
        </div>
      </div>

      <!-- Module Content right -->
      <div class="bs_content_right">
        <div class="img-center cw bs_content_right_top">
          <content-title text="热门赛事" />

          <div class="rc bs_crt_info">
            <match-item
              v-for="(item, index) in matchList"
              :key="index"
              :name="item.name"
              :number="item.number"
              :width="item.width"
              :rank="index"
            ></match-item>
          </div>
        </div>

        <div class="img-center cw bs_content_right_bottom">
          <content-title text="月度云服务热词" />

          <div class="rc bs_crb_info">
            <month-circle type="orange" />
            <month-circle type="blue" />
            <month-circle type="purple" />
            <month-circle type="yellow" />
            <month-circle type="green" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EPie from '@/components/Echart/EPie.vue'
import EBar from '@/components/Echart/EBar.vue'
import EMap from '@/components/Echart/EMap.vue'
import ContentTitle from '@/components/ContentTitle'
import ChooseItem from '@/components/ChooseItem'
import MatchItem from '@/components/MatchItem'
import MatchTitle from '@/components/MatchTitle'
import SpanWrap from '@/components/SpanWrap'
import MonthCircle from '@/components/Circle'
import { getVistCount } from '@/api/home'
import { login } from '@/api/user'
export default {
  name: 'Home',
  components: {
    EMap,
    EPie,
    EBar,
    ContentTitle,
    SpanWrap,
    ChooseItem,
    MatchItem,
    MonthCircle,
    MatchTitle
  },
  data() {
    return {
      matchList: [
        {
          name: '国际马拉松',
          width: '50%',
          number: 1000
        },
        {
          name: '国际马拉松',
          width: '30%',
          number: 1000
        },
        {
          name: '花样游泳锦标赛',
          width: '100%',
          number: 1000
        },
        {
          name: '国际马拉松',
          width: '60%',
          number: 1000
        },
        {
          name: '国际马拉松',
          width: '15%',
          number: 1000
        },
        {
          name: '国际马拉松',
          width: '10%',
          number: 1000
        },
        {
          name: '国际马拉松',
          width: '25%',
          number: 1000
        }
      ],

      analysisBar: {
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
          data: ['10-21', '10-22', '10-23', '10-24', '10-25', '10-26'],
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
          interval: 20,
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
              color: '#fff', //更改坐标轴文字颜色
              fontSize: 12 //更改坐标轴文字大小
            },
            formatter: '{value} '
          }
        },
        series: [
          {
            data: [20, 60, 50, 40, 35, 50, 20],
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
      },

      matchBar: {
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
          end: 100,
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
            data: ['广州', '深圳', '佛山', '东莞', '汕头', '清远', '肇庆'],
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
                return value + ' %'
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
            data: [80, 60, 40, 60, 80, 60, 40]
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
            data: [80, 60, 40, 60, 80, 60, 40]
          }
        ]
      }
    }
  },
  mounted() {
    getVistCount().then(res => {
      console.log('res', JSON.stringify(res))
    })

    const params = {
      name: '123',
      passWord: '123'
    }
    login(params)
      .then(res => {
        console.log('🚀 ~ mounted ~ res', res)
      })
      .catch(() => {})
      .finally(() => {})
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.cw {
  width: 100%;
  height: 307px;
  padding: 10px 20px;
  background-image: url('../assets/image/kuang1.webp');
}
.mw {
  width: 100%;
  height: 227px;
  padding: 10px 20px;
  background-image: url('../assets/image/kuang3.webp');
}

.bigScreen {
  width: 1270px;
  height: 718px;
  padding: 0 20px 20px 20px;
  background-image: url('../assets/image/bg.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

/* Module Head */
.bigScreen .bs_head {
  width: 100%;
  height: 48.5px;
  color: #fff;
}

/* head left */
.bigScreen .bs_head .bs_head_left {
  width: 186px;
  height: 100%;
  margin-top: 3px;
  font-family: AlibabaPuHuiTiR;
}

.bs_head_left_wrap {
  flex: 1;
  span {
    white-space: nowrap;
  }
}

.bs_head_left_wrap .bs_hlw_img {
  width: 24px;
  height: 24px;
  background-image: url('../assets/image/sunny.webp');
}

.bs_head_left_wrap span {
  margin-left: 19px;
}

.bs_head_left .bs_head_left_time {
  font-weight: 700;
  margin-top: 3px;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.bs_head_left .bs_head_left_time .bs_hlt_time {
  margin-left: 10px;
}

/* head center */
.bigScreen .bs_head .bs_head_center {
  width: 675px;
  height: 100%;
  line-height: 48.5px;
  margin-left: 90px;
  font-family: AlibabaPuHuiTiH;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 0.5px 0.5px #135dff;
}

/* Module Content */
.bs_content {
  width: 100%;
  height: 630px;
  margin-top: 12px;
  color: #fff;
  .bs_content_left {
    height: 100%;
    width: 320px;
  }

  .bs_content_center {
    height: 100%;
    width: 570px;
    margin-left: 10px;
  }

  .bs_content_right {
    height: 100%;
    width: 320px;
    margin-left: 10px;
  }
}

/*  Module Content left  */
.bs_content .bs_content_left .bs_content_left_bottom {
  margin-top: 10px;
}

.bs_clt_info,
.bs_clb_info {
  margin-top: 15px;
  width: 220px;
  text-align: right;
}

.bs_clt_info .bs_clt_info_item {
  height: 28px;
  line-height: 28px;
  font-family: PingFangSC-S0pxibold;
  font-weight: 600;
  color: #ffffff;
  margin-top: 12px;
}

.bs_content_left_top .bs_clt_pipe {
  width: 100%;
  margin-top: 15px;
}

.bs_clb_info .bs_clb_info_item {
  height: 28px;
  line-height: 28px;
  font-family: PingFangSC-S0pxibold;
  font-weight: 600;
  color: #ffffff;
  margin-top: 12px;
}

.bs_content_left_bottom {
  .bs_clb_list {
    margin-top: 12px;
    z-index: 9;
  }

  .bs_clb_echart {
    width: 300px;
    height: 230px;
    margin-top: -20px;
  }
}

/*  Module Content Center  */
.bs_content_center {
  .bs_content_center_top {
    width: 650px;
    height: 387px;
  }

  .bs_content_center_bottom {
    width: 570px;
    margin-top: 11px;
  }
}
/*  Module Content Center  */
.bs_ccb_bar {
  width: 532px;
  height: 171px;
}

/*  Module Content Right  */
.bs_content_right {
  .bs_crt_info {
    margin-top: 18px;
  }

  .bs_content_right_bottom {
    margin-top: 10px;
    .bs_crb_info {
      margin-top: 7px;
      width: 100%;
      height: 250px;
      position: relative;
    }
  }
}
</style>
