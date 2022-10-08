<template>
  <div class="flex-start head">
    <div class="img-center head_left"></div>
    <span class="ib">{{ text }}</span>
    <div class="head_img"></div>
    <div class="head_choose"><choose-item :checkList="checkList" :chooseFun="chooseFun" /></div>
    <!-- <el-select v-model="value" clearable placeholder="选择赛事名称" size="mini" class="head_select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select> -->
  </div>
</template>
<script>
import ChooseItem from '../ChooseItem'
export default {
  name: 'MatchTitle',
  components: { ChooseItem },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  props: {
    text: { type: String, required: true },
    checkList: { type: Array, required: true },
    chooseFun: { type: Function, required: true }
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
  margin-top: 5px;
  margin-bottom: 5px;
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
  width: 80px;
}

.head .head_img {
  width: 50px;
  height: 18px;
  background-image: url('../../assets/image/title.webp');
  margin-left: 16px;
}

.head_choose {
  margin-left: 230px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.head_btn {
  background-color: transparent;
  width: 124px;
  height: 24px;
  line-height: 24px;
}
.el-select {
  width: 124px;
  margin-left: 20px;
  background-color: #409eff;
  .el-input__inner {
    height: 20px;
  }
}
// .head_select {
//   .el-input__inner {
//     height: 50px;
//     line-height: 50px;
//     color: #0095ff;
//     background-color: rgb(4, 14, 49);
//   }
// }

:deep(.el-input__inner) {
  color: #0095ff;
  background-color: rgb(4, 14, 49);
  border: 1px solid #0095ff;
  border-radius: 5px;
  width: 128px;
  &::placeholder {
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #18537e;
  }
  &:active {
    border: none;
  }
}
</style>
