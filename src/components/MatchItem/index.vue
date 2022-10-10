<template>
  <div class="flex-space-around matchItem">
    <div class="img-center matchItem_rank" :style="style">
      <span v-if="![0, 1, 2].includes(rank)">{{ rank + 1 }}</span>
    </div>
    <div class="matchItem_name">{{ name }}</div>
    <div class="matchItem_progress">
      <div
        class="matchItem_progress_box"
        :style="{
          width
        }"
      ></div>
    </div>
    <div class="matchItem_num">{{ number }}</div>
  </div>
</template>
<script>
export default {
  name: 'MatchItem',
  components: {},
  data() {
    return {
      style: {}
    }
  },
  props: {
    width: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: Number, required: true },
    rank: { type: Number, required: true }
  },
  created() {},
  mounted() {
    if (this.rank === 0) {
      this.style = {
        'background-image': 'url(' + require('../../assets/image/dp2_no1icon.webp') + ')'
      }
    } else if (this.rank === 1) {
      this.style = {
        'background-image': 'url(' + require('../../assets/image/dp2_no2icon.webp') + ')'
      }
    } else if (this.rank === 2) {
      this.style = {
        'background-image': 'url(' + require('../../assets/image/dp2_no3icon.webp') + ')'
      }
    } else {
      this.style = {
        background: 'rgba(0,177,255,0.40)'
      }
    }
  },
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.matchItem {
  width: 100%;
  color: #ffffff;
  margin-top: 20px;
  &_rank {
    width: 30px;
    height: 30px;
    white-space: nowrap;
    border-radius: 20px;
    line-height: 30px;
    // background-image: url('../../assets/image/dp2_no1icon.webp');
    text-align: center;
  }
  &_name {
    width: 120px;
    height: 30px;
    line-height: 30px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 16px;
  }
  &_progress {
    width: 200px;
    height: 12px;
  }
  &_num {
    width: 30px;
    height: 20px;
    line-height: 20px;
    font-family: PingFangSC-Regular;
    font-weight: 600;
    font-size: 16px;
    padding: 1px 0;
    margin-left: 5px;
  }
}
.matchItem_progress {
  &_box {
    height: 100%;
    background-image: linear-gradient(180deg, #00c7ff 0%, #0095ff 100%);
    border-radius: 4px;
  }
}
</style>
