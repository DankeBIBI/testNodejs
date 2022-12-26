const express = require('express')
const app = express()
//跨域
const cors = require('cors')
app.use(cors())
// app.use('/cc',cc)
// app.all("*", function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OP0TIONS");
//     res.header("X-Powered-By", "3.2.1");
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
let data = {
    apiPath:'localhost:8081/get'
}
app.get('/get',(e,r)=>{
    r.status(200)
    r.json(data)
})
const server = app.listen(8081,()=>{
    let host = server.address().address
    let port = server.address().port
   console.log(`服务器启动地址${host}端口${port}`);
})