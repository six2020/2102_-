const HtmlWebpackPlugin = require('html-webpack-plugin');

function createUrl(type, arrayData){
    let result = '';
    if(type === 'js'){
        arrayData.forEach(url=>{
            result += `<script defer src="${url}"></script>`
        })
    }
    if(type === 'css'){
        arrayData.forEach(url=>{
            result += `<link rel="stylesheet" href="${url}">`
        })
    }

    return result
}

class HtmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap('HtmlAfterWebpackPlugin', (compilation) => {
            // console.log('The compiler is starting a new compilation...')
            // console.log('插件执行了')
            
            // 取得 js css
            HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync( 'HtmlAfterWebpackPlugin',  (data, cb) => {
                    
                    // data.assets
                    console.log(' data.assets ====>>>>', data.assets );

                    this._js = data.assets.js

                    this._css = data.assets.css
                    
                    cb(null, data)
                }
            )

            // 取得 html
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync( 'HtmlAfterWebpackPlugin',  (data, cb) => {
                    
                    // data.html += '这是我自己加的'
                    console.log(' data.html ====>>>>', data.html );
                    
                    data.html = data.html.replace(/components:/g, '../../../components')
                    data.html = data.html.replace(/injectjs:/g, createUrl('js', this._js))
                    data.html = data.html.replace(/injectcss:/g, createUrl('css', this._css))
                   
                    cb(null, data)
                }
            )


        })
    }
}

module.exports = HtmlAfterWebpackPlugin