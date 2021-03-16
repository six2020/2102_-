import {fn} from './demo'
fn();

import {myfn} from './test'



if(module.hot){
    module.hot.accept('./demo', ()=>{
        fn();
    })

    // module.hot.decline('./demo')
}



import './static/css/index.css'
import './static/css/test.css'



console.log('aa ====>>>>', aa);




alert(111)