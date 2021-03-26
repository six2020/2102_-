const path = require('path')
// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// copy
const CopyPlugin = require("copy-webpack-plugin");
// 压缩拷贝的HTML文件
const minify = require('html-minifier').minify;
// 压缩js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    output: {
        path: path.resolve('./dist/asset'),
        filename: 'scripts/[name].[hash:5].bundle.js',
        publicPath: '/'
    },

    plugins: [

        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../src/web/components'),
                    to: "../components",
                    globOptions: {
                        ignore: ["**/*.js", "**/*.css"]
                    },

                    transform(content) {
                        return minify(content.toString(), {
                            collapseWhitespace: true
                        });
                    },
                },
                {
                    from: path.join(__dirname, '../src/web/views/layout'),
                    to: "../views/layout",

                    transform(content) {
                        return minify(content.toString(), {
                            collapseWhitespace: true
                        });
                    },
                },
            ],
        }),

        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash:5].css'
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
}