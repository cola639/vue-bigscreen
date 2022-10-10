<template>
  <div class="flex-space-around head">
    <div class="img-center head_left"></div>
    <span class="ib">{{ text }}</span>
    <div class="head_right"></div>
  </div>
</template>
<script>
export default {
  name: 'ContentTitle',
  components: {},
  data() {
    return {}
  },
  props: {
    text: { type: String, required: true }
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
.head {
  margin-top: 8px;
}

.head .head_left {
  width: 30px;
  height: 30px;
  background-image: url('../../assets/image/icon1.webp');
  background-repeat: no-repeat;
  background-position: top center;
}

.head span {
  font-family: AlibabaPuHuiTiB;
  font-weight: 700;
  font-size: 24px;
  margin-left: 20px;
  width: 300px;
  padding-top: 3px;
}

.head .head_right {
  width: 150px;
  height: 30px;
  background-image: url('../../assets/image/title.webp');
  margin-left: 40px;
  background-repeat: no-repeat;
  background-position: center left;
}
</style>
