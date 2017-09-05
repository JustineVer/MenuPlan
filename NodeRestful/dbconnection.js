var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'astra21',
database:'menu_plan'


});
module.exports=connection;