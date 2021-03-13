const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');


const webpack = require('webpack')


module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'scripts/index_bundle.js',

        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            outputPath: 'images',
                            limit: 4 * 1024,

                            // publicPath: '../images'
                        }
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 抽离 css
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),

        // 清除 dist 目录
        new CleanWebpackPlugin(),

        // 创建 HTML 文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),

        // 热更新
        new webpack.HotModuleReplacementPlugin()
    ],

    optimization: {
        minimizer: [
            // 压缩 css
            new CssMinimizerPlugin(),
        ],
    },

    devServer: {
        port: 8090,
        open: true,
        hot: true,

        // 代理
        proxy: {
            "/api": 'http://localhost:3000/'
        },

        // 模拟数据 express
        before(app){
            app.get('/index', (req, res)=>{
                res.json({
                    code: 0,
                    message: 'hello world'
                })
            })
        }
    },


    // devtool: 'source-map'
    // devtool: 'none'
}