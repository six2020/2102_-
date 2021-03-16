const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// js
const TerserPlugin = require("terser-webpack-plugin");



// =====================


// console.log('process.argv ====>>>>', process.argv);

// 获取环境参数
const {argv} = require('yargs');
const mode = argv.mode || 'production';
const modeFlag = (mode === 'production' ? true : false)

// 动态引入不同的环境的配置
const mergeConfig = require(`./config/webpack.${mode}.js`);
// 合并配置
const { merge } = require('webpack-merge');





// ====================

// 公共环境的配置
const webpackConfig = {
    entry: './src/index.js',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // {
                    //     loader: 'style-loader'
                    // },

                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: modeFlag ? '[name].[hash:5].[ext]' : '[name].[ext]',
                            outputPath: 'images',
                            limit: 4 * 1024
                        }
                    }
                ]
            }
        ]
    },


    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            inject: 'body'
        }),

        new MiniCssExtractPlugin({
            filename: modeFlag ? 'css/[name].[hash:5].css' : 'css/[name].css'
        })
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ]
    }
}


module.exports = merge(webpackConfig, mergeConfig)


