var express=require("express");
var app=express();

// 使用express创建静态服务器
app.use(express.static("./"));


// 路由的path方法，即直接填入文件路径

app.listen(8012,function afterListen(){
    console.log("express running on http://localhost:8012");
});