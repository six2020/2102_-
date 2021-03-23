const fs = require('fs')
const path = require('path')
// let data = require('../data.json');

const db = require('./db_promise')

class SafeRequest {
    constructor(){}

    getData(){

        return db.query(`SELECT * FROM t_book`);

        // return new Promise((resolve, reject)=>{
        //     resolve(data)
        // })
    }

    async addData(opt){

        // console.log('opt ====>>>>', opt);

        let result = {
            code: 0,
            message: '',
            data: []
        }
        
        try{
            let data = await db.query(`INSERT INTO t_book SET ?`, opt);

            if(data.affectedRows > 0){
                result.message = '添加成功';

                return Promise.resolve(result)
            }else{
                result.message = '添加失败'
                result.code = 1

                return Promise.reject(result)
            }

           
            // console.log('data ====>>>>', data);
            
        }catch(err){
            // console.log('err ====>>>>', err);
            result.message = '添加失败'
            result.code = 1
            result.status = 500

            return Promise.reject(result)
        }

        




        // let arr = [];
        // data.forEach(item=>{
        //     arr.push(item.id)
        // })

        // let max = Math.max.apply(null, arr)

        // // console.log('arr ====>>>>', arr);
        // // console.log('max ====>>>>', max);
        

        // opt.id = ++max;
        // data.push(opt);

        // let result = {
        //     code: 0,
        //     message: '',
        //     data: []
        // }

        // // console.log('data ====>>>>', data);

        // return new Promise(( resolve, reject ) => {
        //     fs.writeFile(path.join(__dirname, '..', 'data.json'), JSON.stringify(data), err=>{
        //         if(err){
        //             // console.log('err ====>>>>', err);
        //             result.code = 1;
        //             result.message = "添加失败";
        //             reject(result)
        //         }else{
        //             result.message = "添加成功";
        //             resolve(result)
        //         }
        //     })
        // })

        

        
    }

    // 获取修改的图书数据
    async getEditData(id){
        // console.log('id ====>>>>', id);


        let result = {
            code: 0,
            message: '',
            data: []
        }
        
        try{
            let data = await db.query(`SELECT * FROM t_book WHERE id=?`, [id]);

            if(data.length > 0){
                result.message = '获取成功';
                result.data = data[0];

                return Promise.resolve(result)
            }else{
                result.message = '获取失败'
                result.code = 1

                return Promise.reject(result)
            }

           
            // console.log('data ====>>>>', data);
            
        }catch(err){
            // console.log('err ====>>>>', err);
            result.message = '获取失败'
            result.code = 1
            result.status = 500

            return Promise.reject(result)
        }
        
        // ----------------------

        // let obj = {};
        // let flag = false;

        // data.forEach(item=>{
        //     if(item.id == id){
        //         obj = item;
        //         flag = true;
        //         return
        //     }
        // })

        // ------------------------
    //     let obj = null;
    //     obj = data.find(item=>item.id == id);



    //     let result = {
    //         code: 0,
    //         message: '',
    //         data: []
    //     }
        
    //     return new Promise(( resolve, reject ) => {
    //         if(obj){
    //             result.message = '获取成功';
    //             result.data = obj;

    //             resolve(result)
    //         }else{
    //             result.code = 1;
    //             result.message = '获取失败';

    //             reject(result)
    //         }
    //     })
    }

    // 修改图书
    async editData(opt){

        let result = {
            code: 0,
            message: '',
            data: []
        }
        console.log(' ====>>>>', opt);
        
        try{
            let data = await db.query(`UPDATE t_book SET name=?, author=?, category=?, description=? WHERE id=?`, [opt.name, opt.author, opt.category, opt.description, opt.id]);

            if(data.affectedRows > 0){
                result.message = '修改成功';

                return Promise.resolve(result)
            }else{
                result.message = '修改失败'
                result.code = 1

                return Promise.reject(result)
            }

           
            // console.log('data ====>>>>', data);
            
        }catch(err){
            // console.log('err ====>>>>', err);
            result.message = '修改失败'
            result.code = 1
            result.status = 500

            return Promise.reject(result)
        }


        // ======================

        // data.forEach(item=>{
        //     if(item.id == opt.id){
        //         for(let key in item){
        //             item[key] = opt[key]
        //         }
        //     }
        // })

        // let result = {
        //     code: 0,
        //     message: '',
        //     data: []
        // }

        // // console.log('data ====>>>>', data);

        // return new Promise(( resolve, reject ) => {
        //     fs.writeFile(path.join(__dirname, '..', 'data.json'), JSON.stringify(data), err=>{
        //         if(err){
        //             // console.log('err ====>>>>', err);
        //             result.code = 1;
        //             result.message = "修改失败";
        //             reject(result)
        //         }else{
        //             result.message = "修改成功";
        //             resolve(result)
        //         }
        //     })
        // })
    }

    // 删除图书
    async deleteData(id){

        let result = {
            code: 0,
            message: '',
            data: []
        }
        // console.log(' ====>>>>', opt);
        
        try{
            let data = await db.query(`DELETE FROM t_book WHERE id=?`, [id]);

            if(data.affectedRows > 0){
                result.message = '删除成功';

                return Promise.resolve(result)
            }else{
                result.message = '删除失败'
                result.code = 1

                return Promise.reject(result)
            }

           
            // console.log('data ====>>>>', data);
            
        }catch(err){
            // console.log('err ====>>>>', err);
            result.message = '删除失败'
            result.code = 1
            result.status = 500

            return Promise.reject(result)
        }

        // ================================

        // data.forEach((item, index)=>{
        //     if(id == item.id){
        //         data.splice(index, 1);

        //         return
        //     }
        // })

        // let index = data.findIndex(item=>item.id==id)
        // data.splice(index, 1);
        // data.splice(data.findIndex(item=>item.id==id), 1);

        // let result = {
        //     code: 0,
        //     message: '',
        //     data: []
        // }

        // // console.log('data ====>>>>', data);

        // return new Promise(( resolve, reject ) => {
        //     fs.writeFile(path.join(__dirname, '..', 'data.json'), JSON.stringify(data), err=>{
        //         if(err){
        //             // console.log('err ====>>>>', err);
        //             result.code = 1;
        //             result.message = "删除失败";
        //             reject(result)
        //         }else{
        //             result.message = "删除成功";
        //             resolve(result)
        //         }
        //     })
        // })
    }
}

module.exports = SafeRequest