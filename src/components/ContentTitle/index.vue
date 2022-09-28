<template>
  <div class="flex-start head">
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
  width: 20px;
  height: 20px;
  background-image: url('../../assets/image/icon1.webp');
  /* background-color: yellow; */
}

.head span {
  font-family: AlibabaPuHuiTiB;
  font-weight: 700;
  font-size: 20px;
  margin-left: 5px;
  width: 200px;
}

.head .head_right {
  width: 50px;
  height: 18px;
  background-image: url('../../assets/image/title.webp');
  margin-left: 16px;
}
</style>
