const models = require('./db');
const express = require('express');
const router = express.Router();//这里用到了express的路由级中间件
// var sd = require('silly-datetime')

//注册账号的接口
//  /api为代理的服务
router.post('/api/user/register', (req, res) => {
    //这里的req.body 其实使用了body-parser中间件 用来对前端发送来的数据进行解析
    //查询数据库中name= req.body.name 的数据
    models.Login.find({ username: req.body.username }, (err, data) => {
        if (err) {
            res.send({ 'status': 1002, 'message': '查询失败', 'data': err });
       

        
        } 
        else if(req.body.username==''||req.body.password==''){
            res.send({'message':'不可为空'});

        }
        else {
            console.log('查询成功' + data)
            //data为返回的数据库中的有相同name的集合
            if (data.length > 0) {
                res.send({ 'status': 1001, 'message': '该用户名已经注册！' });
            } else {
                let newName = new models.Login({
                    username: req.body.username,
                    password: req.body.password
                });
                //newName.save 往数据库中插入数据
                newName.save((err, data) => {
                    if (err) {
                        res.send({ 'status': 1002, 'message': '注册失败！', 'data': err });
                    } else {
                        res.send({ 'status': 1000, 'message': '注册成功!' });
                    }
                });
            }
        }
    })
})
router.post('/api/user/login', (req, res) => {
    models.Login.find({ username: req.body.username, password: req.body.password  }, (err, data) => {
        if (err) {
            // res.send(err);
            res.send({ 'status': 1002, 'message': '查询数据库失败!', 'data': err });
        } else {
            console.log(data)
            if (data.length > 0) {
                res.send({ 'status': 1000, 'message': '登录成功!', 'username': data[0].username });
            } else {
                res.send({ 'status': 1001, 'message': '登录失败，该用户没有注册!', 'data': err });
            }
        }
    })
})

router.post('/api/blog/Home', (req, res) => {
    let newArticle = new models.Home({
        author: req.body.author,
        tittle: req.body.tittle,
        content: req.body.content,
        date: req.body.date
    });
    newArticle.save((err, data) => {
        if (err) {
            res.send({ 'status': 1002, 'message': '添加失败！', 'data': err });
        } else {
            res.send({ 'status': 1000, 'message': '添加成功!' });
        }
    });
})
router.post("/api/blog/Showblog", (req, res) => {
    models.Home.find({ author: req.body.author }, (err, data) => {
        console.log(data)
        res.send(data.reverse())
    });
})
router.post("/api/blog/Lookup", (req, res) => {
    let search=req.body.search;
    var reg= new RegExp(search,'i');
    models.Home.find({tittle:{$regex:reg}}, (err, data) => {
        console.log(data)
        res.send(data)
    });

})
router.post("/api/blog/del",(req,res)=>{
    console.log(req.body.id)
    models.Home.remove({_id:req.body.id},(err,data)=>{
        console.log(data);
        res.send(data);
    })
})
router.post("/api/blog/change",(req,res)=>{
    models.Home.update({_id:req.body.id},{tittle:req.body.title,content:req.body.content},(err,data)=>{
        console.log(data);
        res.send(data);
    })
})
module.exports = router; 