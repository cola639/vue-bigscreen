// const path = require('path')

// module.exports = ({ webpack }) => {
//   // const designWidth = webpack.resourcePath.includes(
//   //   path.join('node_modules', 'vant')
//   // )
//   //   ? 375
//   //   : 750

//   return {
//     plugins: {
//       autoprefixer: {},
//       'postcss-px-to-viewport': {
//         unitToConvert: 'px', // unit convert
//         viewportWidth: 1270, // window.innerWidth
//         unitPrecision: 6, // unit precision
//         propList: ['*'], // convert all css unit
//         viewportUnit: 'vw', // unit view port
//         fontViewportUnit: 'vw', // unit font size
//         selectorBlackList: [], // ignore class
//         exclude: [/node_modules/], // ignore files
//         minPixelValue: 1, // ignore <= 1px
//         mediaQuery: true, // ignore media
//         landscape: false // ignore landscape
//       }
//     }
//   }
// }
