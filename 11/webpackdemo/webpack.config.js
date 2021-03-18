const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        "index": './src/index.js',
        "demo": './src/demo.js'
    },
    output: {

    },
     plugins: [
         new HtmlWebpackPlugin({
             filename: 'index.html',
             template: './src/index.html',
             chunks: ["index"]
         }),
         new HtmlWebpackPlugin({
             filename: 'demo.html',
             template: './src/demo.html',
             chunks: ["demo", "index"]
         })
     ]
}