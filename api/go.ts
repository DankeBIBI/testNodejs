import { NowRequest, NowResponse } from '@vercel/node';
module.exports = async (req: NowRequest, res: NowResponse) => {
    var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'datadb'
});

connection.connect();

var sql = 'SELECT * FROM datatable';
//查
let addSql = ' INSERT INTO datatable(username) VALUES ("鸡哥")'
connection.query(sql, function (err, result) {
    if (err) {
        res.status(300).json('数据库链接失败');
        return;
    }
    res.status(200).json(result[0]);
});
connection.end();
   
}
