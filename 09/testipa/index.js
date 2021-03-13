const express = require('express');

let app = express();

app.get('/api/test', ( req, res ) => {
    res.json({
        name: 'six',
        code: 0,
        message: 'six six six'
    })
})

app.listen(3000, (  ) => {
    console.log(' ====>>>>', 'server run 3000 .....');
    
})