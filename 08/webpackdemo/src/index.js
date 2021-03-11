import {fn} from './demo'

import './static/css/index.css'
import './static/css/test.css'

import './static/less/index.less'

document.onclick = function(){
    document.body.classList.add('demo');
}

fn();