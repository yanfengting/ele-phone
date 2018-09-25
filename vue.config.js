var proEnv = require('./config/pro.env'); // 生产环境
var uatEnv = require('./config/uat.env'); // 测试环境
var devEnv = require('./config/dev.env'); // 本地环境
const env = process.env.NODE_ENV;
const devProxy = ['/api'];
let target = '';
// 根据不同的环境设置主机名称
if (env === 'production') { // 生产环境
    target = proEnv.host;
} else if (env === 'test') { // 测试环境
    target = uatEnv.host;
} else { // 本地环境
    target = devEnv.host;
}
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value) => {
    proxyObj[value] = {
        target: target,
        changeOrigin: true,
        pathRewrite: {
            [`^${value}`]: ''
        }
    };
});
console.log(env);
console.log(target);
console.log(proxyObj);
module.exports = {
    baseUrl: '/',
    outputDir: 'dist',
    // webpack配置
    // see https://github.com/vuejs/vue-cli/tree/dev/docs/config
    configureWebpack: {
        externals: {
            "BMap": "BMap",
            "jQuery": 'jQuery',
            "$": 'jQuery'
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        proxy: proxyObj,
        before: app => {
            app.get('/getRecommands', function (req, res) {
                var recommands = [{
                    name: '品质套餐',
                    desc: '搭配齐全吃得好',
                    count: null,
                    img: `https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/`
                }, {
                    name: '限量抢购',
                    desc: '超值美味 9.9元起',
                    count: 2824,
                    img: `https:////fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/`
                }]
                res.send({
                    code: 200,
                    message: '成功',
                    recommands
                })
            });
        }
    }
}