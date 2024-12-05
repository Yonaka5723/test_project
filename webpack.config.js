const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js', //從哪裡打包
    },
    output: {
        filename: 'bundle.js', // 打包成什麼
        path: path.resolve('./build'), //打包在哪裡
    },
    module:{
        rules:[
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './build'), // 本來打包完的檔案位置
        },
        port: 8080, // 預覽網頁要跑在哪個port
    },
    mode: 'development'
};