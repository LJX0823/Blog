//mongoose通过三个模块去创建一个数据库集合,还有定义"集合"的基本组成结构并使其具有相应的操作数据库能力。
//Schema  Model  Entity
var mongoose = require('mongoose');
//这里是连接到我的数据库，默认是mongodb://127.0.0.1:27017/text
mongoose.connect("mongodb://127.0.0.1:27017/blog");
console.log(".......")
//绑定事件
var db = mongoose.connection;
//mongoose.connection的两个方法，error与open 代表连接失败和连接成功
db.on('error',(error) => console.log('Mongo connection error'+error));
db.once('open',() => console.log('Mongo connection successed'));
//1.Schema  数据库集合的模型骨架，或者是数据属性模型传统意义的表结构。
var loginSchema = mongoose.Schema({
  username : String,
  password : String,
});
var AiticelSchema=mongoose.Schema({
  tittle:String,
  content:String,
  author:String,
  date:String
})
//2.Model 通过Schema构造而成，除了具有Schema定义的数据库骨架以外，还可以具体的操作数据库。
//这里表示在zhao数据库中创建了一个users的表，并且格式为loginSchema中所定义的
var Models = {
    Login : mongoose.model('users',loginSchema),
    Home : mongoose.model('articles',AiticelSchema)
}
module.exports = Models;