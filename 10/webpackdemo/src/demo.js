export const fn = () => {


    console.log('666 ====>>>>', 666);

    console.log('777 ====>>>>', 777);

    console.log('888 ====>>>>', 888);

    console.log('999 ====>>>>', 999);

    console.log('111 ====>>>>', 111);

    console.log('111 ====>>>>', 111);

    console.log('88888 ====>>>>', 88888);
    
    
    

    // console.log('000 ====>>>>', 000);
    
    
    
    
    
    

    fetch('/index')
        .then(response => response.json())
        .then(msg => {
            console.log('msg ====>>>>', msg);
        })


    fetch('/api/test')
        .then(response => response.json())
        .then(msg => {
            console.log('其他接口 ====>>>>', msg);
        })
}


