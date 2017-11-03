var db=require('../dbconnection');

var listValues={

getlistValues:function(id,callback){

    if (id == "meat_type"){
        return db.query("select * from meat_type",callback);
    } else if (id =="meal_type"){
        return db.query("select * from meal_type",callback);
    } else if (id =="file_type"){
        return db.query("select * from file_type",callback);        
    };
}
};
module.exports=listValues;