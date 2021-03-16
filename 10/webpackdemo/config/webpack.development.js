const path = require('path')

module.exports = {
    output: {
        filename: 'scripts/[name].bundle.js',
        path: path.resolve('dist'),
        // publicPath: '/'
    },

    // devServer: {
    //     // open: true
    // }
}