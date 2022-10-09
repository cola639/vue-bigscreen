// vue.config.js
const path = require('path')
const name = 'BigScreen' // page title

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',

  devServer: {
    disableHostCheck: true,
    open: false,
    // before: require('./mock/mock-server.js')
    // host: "127.0.0.1",   //指定端口
    // https: true, //开启 https
    proxy: {
      '/dev-api': {
        target: 'https://test.sports.fabaogd.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': '' // clear prefix
        }
      }
    }
  },

  configureWebpack(config) {
    // title
    config.name = name

    // dev source map
    config.devtool = process.env.NODE_ENV === 'production' ? '' : 'inline-source-map'

    // cancel  console.log
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    }

    // provide the app's title in webpack's name field, so that
    config.externals = {
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
  },

  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // visualization webpack only local develop analyzer
    // if (process.env.NODE_ENV === 'production') {
    //   config
    //     .plugin('webpack-bundle-analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // }

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          vantUI: {
            name: 'chunk-vantUI', // split vantUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?vant-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single')
    })
  },

  // define css module
  css: {
    loaderOptions: {
      // less: {
      //   modifyVars: {
      //     // overide with less vars
      //     'overlay-background-color': 'rgba(0, 0, 0, 0.2)'
      //     // or override with less file
      //     // hack: `true; @import "your-less-file-path.less";`
      //   }
      // },
      scss: {
        /* scss版本:若版本低于7，则使用data；高于8，则使用prependData */
        prependData: "@import './src/styles/index.scss';"
      }
    }
  }
}
