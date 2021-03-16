const path = require('path')

module.exports = {
    output: {
        filename: 'scripts/[name].[hash:5].bundle.js',
        path: path.resolve('dist'),
        publicPath: '/'
    }
}