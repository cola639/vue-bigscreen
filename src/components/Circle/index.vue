<template>
  <!-- <div class="flex-column monthCircle"> -->
  <div :class="[!hotWord.length ? `monthCircle-${hotWord.type}` : 'monthCircle', 'flex-column']">
    <span>{{ hotWord.num }}</span>
    <span>{{ hotWord.searchName }}</span>
  </div>
</template>
<script>
export default {
  name: 'MonthCircle',
  components: {},
  data() {
    return {}
  },
  props: {
    hotWord: { type: Object, required: true }
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.monthCircle-orange {
  border-radius: 50%;
  border: 1px solid #ff8b37;
  box-shadow: inset 0 0 22px 0 #ff8b37;
  height: 80px;
  text-align: center;
  width: 80px;
  span {
    color: #ffffff;
    font-family: AlibabaPuHuiTiB;
    font-size: 14px;
    font-weight: 700;
    height: 26px;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0.5px 0.5px #135dff;
  }
}

.monthCircle-blue {
  border-radius: 50%;
  border: 1px solid #0095ff;
  box-shadow: inset 0 0 22px 0 #0095ff;
  height: 147px;
  text-align: center;
  width: 147px;
  position: absolute;
  top: 50px;
  left: 40px;
  span {
    color: #ffffff;
    font-family: AlibabaPuHuiTiB;
    font-size: 24px;
    font-weight: 700;
    height: 26px;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0.5px 0.5px #135dff;
  }
}
.monthCircle-purple {
  border-radius: 50%;
  border: 1px solid #a043ff;
  box-shadow: inset 0 0 22px 0 #a043ff;
  height: 117px;
  text-align: center;
  width: 117px;
  position: absolute;
  top: 0;
  left: 170px;
  span {
    color: #ffffff;
    font-family: AlibabaPuHuiTiB;
    font-size: 16px;
    font-weight: 700;
    height: 26px;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0.5px 0.5px #135dff;
  }
}
.monthCircle-yellow {
  border-radius: 50%;
  border: 1px solid #c8ae06;
  box-shadow: inset 0 0 22px 0 #c8ae06;
  height: 79px;
  text-align: center;
  width: 79px;
  position: absolute;
  bottom: 0;
  left: 0;
  span {
    color: #ffffff;
    font-family: AlibabaPuHuiTiB;
    font-size: 14px;
    font-weight: 700;
    height: 26px;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0.5px 0.5px #135dff;
  }
}
.monthCircle-green {
  border-radius: 50%;
  border: 1px solid #00ffdf;
  box-shadow: inset 0 0 22px 0 #00ffdf;
  height: 100px;
  text-align: center;
  width: 100px;
  position: absolute;
  bottom: 10px;
  left: 170px;
  span {
    color: #ffffff;
    font-family: AlibabaPuHuiTiB;
    font-size: 15px;
    font-weight: 700;
    height: 26px;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0.5px 0.5px #135dff;
  }
}
</style>
