var db=require('../dbconnection');

var Eaten={

addEaten:function(Eaten,callback){
    var eatenDate="";
    var sql ="INSERT INTO eaten (meal_option_id, date_eaten, liked) VALUES ";
    if (Eaten.constructor === Array) 
    {
        for (var x=0;x<Eaten.length;x++){
            if (x>0){
                sql += ',';
            }
            eatenDate = Eaten[x].date_eaten.substring(0,Eaten[x].date_eaten.indexOf("T"));
            sql += "('"+Eaten[x].meal_option_id+"',STR_TO_DATE('"+eatenDate+"','%Y-%m-%d'),'"+Eaten[x].liked+"')";    
       }
    }
    else{
        eatenDate = Eaten.date_eaten.substring(0,Eaten.date_eaten.indexOf("T"));
        sql = "INSERT INTO eaten (meal_option_id, date_eaten, liked) VALUES ('"+Eaten.meal_option_id+"',STR_TO_DATE('"+eatenDate+"','%Y-%m-%d'),'"+Eaten.liked+"')";
    }
    return (db.query(sql, callback));
},
deleteEaten:function(id,callback){
    return db.query("delete from eaten where Id=?",[id],callback);
},
getHistory:function(callback){
    
    return db.query("Select * from meal_history",callback);
    
    }
};
module.exports=Eaten;