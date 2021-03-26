const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    watch: true,

    output: {
        path: path.resolve('./dist/asset'),
        filename: 'scripts/[name].bundle.js',
        publicPath: '/'
    },

    plugins: [
        
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        }),

        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, '../src/web/components'),
                    to: "../components",
                    globOptions: {
                        ignore: ["**/*.js", "**/*.css"]
                    }
                },
                {
                    from: path.join(__dirname, '../src/web/views/layout'),
                    to: "../views/layout"
                },
            ],
        }),
    ],
}