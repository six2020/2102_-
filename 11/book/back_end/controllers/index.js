const router = require('koa-simple-router')

const IndexController = require('./indexController');

const indexController = new IndexController();


/** 
 * GET  /admin                      获取图书
 * POST /add                        添加图书
 * GET  /editpage?editid=id         根据 id 获取图书
 * POST /edit                       编辑图书
 * GET  /delete?deleteid=id         删除图书
 * 
 * 
*/

/** 
 * RESTful 风格 API
 * 
 * GET      http://localhost:8080/books             获取图书
 * POST     http://localhost:8080/books/book        添加图书
 * GET      http://localhost:8080/books/book/1      根据 id 获取图书
 * PUT      http://localhost:8080/books/book        编辑图书
 * DELETE   http://localhost:8080/books/book/1      删除图书
 * 
*/

module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', indexController.index())
        _.get('/index.html', indexController.index())

        // =============================================

        // 获取图书
        // _.get('/admin', indexController.actionAdmin())
        // 添加图书页
        // _.get('/addpage', indexController.actionAddPage())
        // _.post('/add', indexController.actionAdd())
        // 编辑图书
        // _.get('/editpage', indexController.actionEditPage())
        // _.post('/edit', indexController.actionEdit())
        // 删除图书
        // _.get('/delete', indexController.actionDelete())

        // =============================================
        // 获取图书
        _.get('/books', indexController.actionAdmin())
        // 添加图书页
        _.post('/books/book', indexController.actionAdd())
        // 编辑图书
        _.get('/books/book/:id', indexController.actionEditPage())
        _.put('/books/book', indexController.actionEdit())
        // 删除图书
        _.delete('/books/book/:id', indexController.actionDelete())



        _.get('/es', indexController.actionEs())

        // 演示用
        // _.get('/api/:abc/:bcd', ctx => {

        //     console.log('ctx.params ====>>>>', ctx.params);
            

        //     ctx.body = 'ok'
        // })

    }))
}

