const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlAfterWebpackPlugin = require('./config/HtmlAfterWebpackPlugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 动态拉取配置
const argv = require('yargs').argv;
let mode = argv.mode || 'production';   // production
let mergeConfig = require(`./config/webpack.${mode}.js`);
const { merge } = require('webpack-merge');

// console.log('mode ====>>>>', mode);

// 找到入口文件 glob
const glob = require('glob');
let files = glob.sync('./src/web/views/**/*.entry.js');

// console.log('files ====>>>>', files);

let _entrys = {}
let _htmlPlugins = [];

files.forEach(item => {
    if (/.+\/([a-zA-z]+-[a-zA-Z]+)\.entry\.js$/g.test(item) === true) {
        let entryKey = RegExp.$1;

        let [pageName, actionName] = entryKey.split('-');

        _entrys[entryKey] = `./src/web/views/${pageName}/${entryKey}.entry.js`,

            _htmlPlugins.push(
                new HtmlWebpackPlugin({
                    filename: `../views/${pageName}/pages/${actionName}.html`,
                    template: `./src/web/views/${pageName}/pages/${actionName}.html`,
                    inject: false,
                    chunks: [entryKey]
                })
            )

    }
})

let baseConfig = {
    entry: _entrys,

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlAfterWebpackPlugin(),  
        ..._htmlPlugins,
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/web/components')
        },
    },

}



module.exports = merge(baseConfig, mergeConfig)