module.exports = {
    // webpack配置
    // see https://github.com/vuejs/vue-cli/tree/dev/docs/config
    configureWebpack: {
        externals: {
            "BMap": "BMap",
            "jQuery": 'jQuery'
        }
    },
    devServer: {
        proxy: {
            '/api/': {
                target: 'https://h5.ele.me/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}