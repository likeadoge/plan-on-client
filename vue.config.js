module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/plan-on-client/' : '/',
    publicPath: '/',
    runtimeCompiler: true,
    devServer: {
        port: 8081,
        // proxy: {
        //     '/dmbox-boot': {
        //         target: 'http://192.168.111.5:8080', //请求本地 需要jeecg-boot后台项目
        //         ws: false,
        //         changeOrigin: true
        //     },
        // }
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#13c2c2',
                        'link-color': '#13c2c2',
                        'border-radius-base': '4px',
                        'theme': '#13c2c2'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
}