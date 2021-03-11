const path = require('path');
const glob = require('glob')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// css tree shaking
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

// html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            outputPath: 'images',
                            // publicPath: '/'
                        }
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // {
                    //     loader: 'style-loader',
                    // }, 
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/index.html')),
        }),

        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    }
}