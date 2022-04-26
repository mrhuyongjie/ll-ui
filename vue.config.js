// vue.config.js
module.exports = {
  devServer: {
    overlay: {
        warnings: false, //不显示警告
        errors: false //不显示错误
    }
  },
  lintOnSave: false, //关闭eslint检查
  css: { // 给sass配置全局变量
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        prependData: `
            @import "./package/scss/variable.scss";        
          `
      }
    }
  }
}
