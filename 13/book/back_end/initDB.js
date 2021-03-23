const data = require('./data.json');

const db = require('./models/db_promise');


// console.log('data ====>>>>', data);


// data

// 插入多条数据
// db.query(`
//     INSERT INTO t_book (name, author, category, description) 
//     VALUES ('', '', '', ''), ('', '', '', ''), ('', '', '', ''), ('', '', '', '')
// `)

let str = 'INSERT INTO t_book (name, author, category, description) VALUES ';

let arr = data.map(item=>{
    return `('${item.name}', '${item.author}', '${item.category}', '${item.desc}')`
});

let sql = str + arr.join(',') + ';';

console.log('sql ====>>>>', sql);


db.query(sql)