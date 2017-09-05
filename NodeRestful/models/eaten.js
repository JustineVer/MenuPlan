var db=require('../dbconnection');

var Eaten={

addEaten:function(Eaten,callback){
    var eatenDate = Eaten.date_eaten.substring(0,Eaten.date_eaten.indexOf("T"));
    var sql = "INSERT INTO eaten (meal_option_id, date_eaten, liked) VALUES ('"+Eaten.meal_option_id+"',STR_TO_DATE('"+eatenDate+"','%Y-%m-%d'),'"+Eaten.liked+"')";
    
    db.query(sql, callback);
},
deleteEaten:function(id,callback){
    return db.query("delete from eaten where Id=?",[id],callback);
},
getHistory:function(callback){
    
    return db.query("Select * from meal_history",callback);
    
    }
};
module.exports=Eaten;