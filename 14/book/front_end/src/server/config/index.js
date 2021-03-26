import {assignIn} from 'lodash'
import path from 'path'

let config = {
    "staticDir": path.join(__dirname, '..', 'asset'),
    "templateDir": path.join(__dirname, '..', 'views/books/pages')
}


if(false){
    console.log(' ====>>>>', '66666666666666666666666668888888888888888');
}


if(process.env.NODE_ENV == 'development'){
    let localPort = {
        port: 8080,
        baseURL: `http://localhost:8088`
    };

    assignIn(config, localPort)
}

if(process.env.NODE_ENV == 'production'){
    let prodPort = {
        port: 80
    };

    assignIn(config, prodPort)
}

export default config;