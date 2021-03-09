const path = require('path')

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash:10].[ext]',
                        outputPath: 'asset/images',
                        limit: 5*1024
                    }
                }
            },
            {
                test: /\.ttf$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash:10].[ext]',
                        outputPath: 'asset/font'
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

