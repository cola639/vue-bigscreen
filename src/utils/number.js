/**
 * 数字不够x位，前面补0
 * @param {*} num 数字
 * @param {*} len 补零长度
 * @returns  0001
 */
export function formatZero(num, len) {
  if (String(num).length > len) {
    return num
  }
  const res = (Array(len).join(0) + num).slice(-len)
  console.log('🚀 ~ formatZero ~ res', res.split(''))
  return res.split('')
}
