<template>
  <span class="inline-block">
    <span
      class="inline-block"
      v-for="(item, index) in formatText"
      :key="index"
      :style="{
        width: '22px',
        height: '28px',
        border: '1px solid #0085E8',
        'font-family': ' DS-Digital-Bold',
        'font-weight': 'Bold',
        'text-align': 'center',
        'margin-left': '4px',
        'font-size': '28px',
        color: '#FFFFFF'
      }"
    >
      {{ item }}
    </span>
  </span>
</template>
<script>
import { formatZero } from '@/utils/number'
export default {
  name: 'SpanWrap',
  components: {},
  data() {
    return {}
  },
  props: {
    text: { type: Number }
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {
    formatText() {
      return formatZero(this.text, 5)
    }
  },
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
