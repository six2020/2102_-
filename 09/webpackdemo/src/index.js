import {fn} from './demo'
fn();

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