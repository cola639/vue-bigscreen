<template>
  <div class="bigScreen">
    <!-- Module Head -->
    <div class="bs_head">
      <div class="inline-block bs_head_left">
        <!-- <div class="flex-start bs_head_left_wrap">
          <div class="inline-block img-center bs_hlw_img"></div>

          <span> 天气：晴天 19-29­°C </span>
        </div> -->

        <div class="inline-block bs_head_left_time">
          <span class="bs_hlt_date"> {{ time }} </span>
          <!-- <span class="bs_hlt_date"> 2022年9月23日 </span>
          <span class="bs_hlt_time"> 01:21:23 </span> -->
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

          <div class="bs_clt_info">
            <span class="inline-block bs_clt_info_item">
              访问人数
              <span-wrap :text="visitData['visit']"></span-wrap>
              人
            </span>
            <span class="inline-block bs_clt_info_item">
              健身咨询
              <span-wrap :text="visitData['jszx']"></span-wrap>
              篇
            </span>
            <span class="inline-block bs_clt_info_item">
              赛事
              <span-wrap :text="visitData['ss']"></span-wrap>
              场
            </span>
          </div>

          <div class="bs_clt_pipe">
            <e-pie :visitData="visitData"></e-pie>
          </div>
        </div>

        <div class="img-center cw bs_content_left_bottom">
          <content-title text="健康咨询点击量分析" />

          <div class="bs_clb_info">
            <span class="inline-block bs_clb_info_item">
              点击总量
              <span-wrap :text="analysisData['total']"></span-wrap>
              次
            </span>
          </div>

          <div class="ib rc bs_clb_list">
            <choose-item ref="chooseItem" :checkList="checkList" :chooseFun="handleChooseDate" />
          </div>

          <div class="bs_clb_echart">
            <e-bar :type="1" domId="bs_clb_bar" :data="analysisData" />
          </div>
        </div>
      </div>

      <!-- Module Content Center-->
      <div class="bs_content_center">
        <div class="bs_content_center_top">
          <e-map domId="bs_content_center_top" :mapData="mapData" />
        </div>
        <div class="img-center mw bs_content_center_bottom">
          <match-title text="赛事统计" :checkList="typeList" :chooseFun="handleChooseType" />
          <div class="bs_ccb_echart">
            <e-bar :type="2" domId="bs_content_center_bottom" :data="eventsData" />
          </div>
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
              :number="item.num"
              :width="item.width"
              :rank="index"
            ></match-item>
          </div>
        </div>

        <div class="img-center cw bs_content_right_bottom">
          <content-title text="月度云服务热词" />

          <div class="rc bs_crb_info">
            <month-circle v-for="(item, index) in hotWords" :key="index" :hotWord="item" />
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
import {
  getVistCount,
  getAnalysisData,
  getHotEvents,
  getEventsCount,
  getRankCount,
  getHotWords
} from '@/api/home'
import { debounce } from '@/utils/number'

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
      checkList: [
        { name: '按周', value: 'day' },
        { name: '按月', value: 'month' },
        { name: '按年', value: 'year' }
      ],

      typeList: [
        { name: '区域', value: 'area' },
        { name: '运动项', value: 'sport' }
      ],

      time: '',
      timer: null,
      visitData: {},
      analysisData: {},
      eventsData: {},
      mapData: [],
      matchList: [],
      hotWords: []
    }
  },
  mounted() {
    this.getVistCount()
    this.getAnalysisData()
    this.getEventsCount()
    this.getHotEvents()
    this.getRankCount()
    this.getHotWords()
    this.IntervalDate()
    window.addEventListener('resize', debounce(this.resizeWindow, 3 * 1000))
  },
  beforeDestroy() {
    this.timer ? clearInterval(this.timer) : null
    window.removeEventListener('resize')
  },
  methods: {
    getVistCount() {
      getVistCount().then(res => {
        console.log('res', JSON.stringify(res))
        this.visitData = res
      })
    },

    getAnalysisData(type = 'day') {
      getAnalysisData(type)
        .then(res => {
          const { result, total } = res
          const dateArr = []
          const dataArr = []

          result.forEach(item => {
            dateArr.push(item.date)

            dataArr.push(item.num)
          })

          this.analysisData = { dateArr, dataArr, total }
          console.log('🚀 ~ mounted ~ this.analysisData', this.analysisData)
        })
        .catch(() => {})
        .finally(() => {})
    },

    getEventsCount(type = 'area') {
      getEventsCount(type)
        .then(res => {
          const dataArr = []
          const ratioArr = []
          const labelArr = []

          res.forEach(item => {
            dataArr.push(item.cityNum)
            ratioArr.push(item.ratio)
            labelArr.push(item.name)
          })

          this.eventsData = {
            dataArr,
            ratioArr,
            labelArr
          }
          console.log('🚀 ~ getEventsCount ~ eventsData', this.eventsData)
        })
        .catch(() => {})
        .finally(() => {})
    },

    getHotEvents() {
      getHotEvents()
        .then(res => {
          this.mapData = res
        })
        .catch(() => {})
        .finally(() => {})
    },

    getRankCount() {
      getRankCount()
        .then(res => {
          let maxValue = 0
          res.forEach(item => {
            if (item.num > maxValue) maxValue = item.num
          })

          res.forEach(item => {
            item.width = `${(item.num / maxValue) * 100}%`
          })
          console.log('🚀 ~ getRankCount ~ data', res)

          this.matchList = res
        })
        .catch(() => {})
        .finally(() => {})
    },

    getHotWords() {
      const hotWordColors = ['orange', 'blue', 'purple', 'yellow', 'green']
      getHotWords()
        .then(res => {
          res.forEach((item, index) => {
            item.type = hotWordColors[index]
          })
          console.log('🚀 ~ res.forEach ~ res', res)

          this.hotWords = res
        })
        .catch(() => {})
        .finally(() => {})
    },

    IntervalDate() {
      this.timer = setInterval(() => {
        this.time = this.$moment().format('YYYY年MM月DD日 dddd HH:mm:ss')
      }, 1000)
    },

    resizeWindow() {
      location.reload()
    },

    handleChooseDate(index) {
      const type = this.checkList[index]['value']
      this.getAnalysisData(type)
    },

    handleChooseType(index) {
      const type = this.typeList[index]['value']
      this.getEventsCount(type)
    }
  }
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
  margin: 0 auto;
  width: 1920px;
  height: 1086px;
  padding: 0 30px 30px 30px;
  background-image: url('../assets/image/bg.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

/* Module Head */
.bigScreen .bs_head {
  width: 100%;
  height: 80px;
  color: #fff;
}

/* head left */
.bigScreen .bs_head .bs_head_left {
  width: 280px;
  height: 100%;
  line-height: 80px;
  font-family: AlibabaPuHuiTiR;
}

/* head center */
.bs_head_left_wrap {
  flex: 1;
  span {
    white-space: nowrap;
  }
}

.bs_head_left_wrap span {
  margin-left: 19px;
}

.bs_head_left .bs_head_left_time {
  font-weight: 700;
  letter-spacing: 0.3px;
  white-space: nowrap;
  font-family: AlibabaPuHuiTiB;
  font-size: 20px;
}

.bs_head_left .bs_head_left_time .bs_hlt_time {
  margin-left: 10px;
}

/* head center */
.bigScreen .bs_head .bs_head_center {
  width: 1020px;
  height: 100%;
  line-height: 80px;
  margin-left: 138px;
  font-family: AlibabaPuHuiTiH;
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 0.5px 0.5px #135dff;
}

/* Module Content */
.bs_content {
  width: 100%;
  height: 945px;
  margin-top: 12px;
  color: #fff;
  .bs_content_left {
    height: 100%;
    width: 484px;
  }

  .bs_content_center {
    height: 100%;
    width: 862px;
    margin-left: 15px;
  }

  .bs_content_right {
    height: 100%;
    width: 484px;
    margin-left: 15px;
  }
}

.bs_content_left_top,
.bs_content_left_bottom,
.bs_content_right_top,
.bs_content_right_bottom {
  width: 100%;
  height: 465px;
}

/*  Module Content left  */
.bs_content .bs_content_left .bs_content_left_bottom {
  margin-top: 18px;
}

.bs_clt_info,
.bs_clb_info {
  width: 250px;
  text-align: right;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 20px;
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
  height: 200px;
  margin-top: 30px;
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
    margin-top: 20px;
    z-index: 9;
  }

  .bs_clb_echart {
    width: 100%;
    height: 300px;
  }
}

/*  Module Content Center  */
.bs_content_center {
  .bs_content_center_top {
    width: 900px;
    height: 465px;
  }

  .bs_content_center_bottom {
    width: 862px;
    height: 465px;
    margin-top: 18px;

    .bs_ccb_echart {
      width: 862px;
      height: 400px;
      margin-top: 25px;
    }
  }
}
/* content center bottom  */
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
    margin-top: 18px;
    .bs_crb_info {
      margin-top: 15px;
      width: 100%;
      height: 380px;
      position: relative;
    }
  }
}
</style>
