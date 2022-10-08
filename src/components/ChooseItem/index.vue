<template>
  <div>
    <div
      v-for="(item, index) in checkList"
      :class="[index === currentIndex ? 'checked' : '', 'ib default']"
      :key="index"
      @click="onCheck(index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChooseItem',
  components: {},
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    checkList: { type: Array, required: true },
    chooseFun: { type: Function, required: true }
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {
    onCheck(index) {
      console.log('index', index)
      this.currentIndex = index

      this.chooseFun(index)
    }
  }
}
</script>
<style lang="scss" scoped>
.default {
  width: 60px;
  height: 24px;
  line-height: 24px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid #0095ff;
  border-radius: 0 2px 2px 0;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #0095ff;
  cursor: pointer;
}
.checked {
  background: #0095ff;
  border-radius: 2px 0 0 2px;
  color: #fff;
}
</style>
