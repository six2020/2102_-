const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: 'style-loader',
                    options: {
                        insert: function(element){
                            // console.log('1 ====>>>>', 1);

                            let title = document.querySelector('title');
                            let cache = window.insertStyleCache;

                            if(cache){
                                document.head.insertBefore(element, cache.nextElementSibling)
                            }else{
                                document.head.insertBefore(element, title.nextElementSibling)
                            }

                            window.insertStyleCache = element;
                        }
                    }
                }, 'css-loader']
            }
        ]
    }
}