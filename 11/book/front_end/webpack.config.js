const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    if( /.+\/([a-zA-z]+-[a-zA-Z]+)\.entry\.js$/g.test(item) === true ){
        let entryKey = RegExp.$1;

        let [pageName, actionName] = entryKey.split('-');

        _entrys[entryKey] = `./src/web/views/${pageName}/${entryKey}.entry.js`,

        _htmlPlugins.push(
            new HtmlWebpackPlugin({
                filename: `../web/views/${pageName}/pages/${actionName}.html`,
                template: `./src/web/views/${pageName}/pages/${actionName}.html`,
                inject: 'body',
                chunks: [entryKey]
            })
        )
        
    }
})




let baseConfig =  {
    entry: _entrys,
    output: {
        path: path.resolve('./dist/asset'),
        filename: '[name].bundle.js'
    },

    plugins: [
        ..._htmlPlugins,
    ]

}

module.exports = merge(baseConfig, mergeConfig)