var db=require('../dbconnection');

var MealOptions={

getAllOptions:function(callback){

return db.query("SELECT * FROM meals",callback);

},
getOptionById:function(id,callback){

    return db.query("SELECT * FROM meals WHERE Id=?",[id],callback);
},
addOption:function(MealOptions,callback){
    var newId;
    var sql = "INSERT INTO meal_options SET ?";
    var insertObject = {
        name: MealOptions.name, 
        file_type: MealOptions.file_type.id, 
        path: MealOptions.path, 
        image_path: MealOptions.image_path
    };
    db.query(sql, insertObject, function (error, results, fields) {
        if (error) throw error;
        newId = results.insertId;

        var sql = "INSERT INTO meat_type_options (meal_option_id, meat_type_id) VALUES";
        for (var x=0;x<MealOptions.meat_type.length;x++){
            if (x>0){
                sql += ',';
            }
            sql += "("+newId+","+MealOptions.meat_type[x].id+")";    
        }
        db.query(sql, function (error, results, fields) {
            if (error) throw error;
            var sql = "INSERT INTO meal_type_options SET ?";
            var insertObject = {
                meal_option_id:newId, 
                meal_type_id: MealOptions.meal_type.id
            };
            return (db.query(sql, insertObject, callback));
        });
      });
},
deleteOption:function(id,callback){
    return db.query("delete from meal_options where Id=?",[id],callback);
},
updateOption:function(id,MealOptions,callback){
    var sql = "update meal_options set name='"+MealOptions.name+"', file_type="+MealOptions.file_type.id;
    sql += ", path= '"+MealOptions.path+"', image_path= '"+MealOptions.image_path+"' where Id="+id;
    db.query(sql, function (error, results, fields) {
        if (error) throw error;
        var sql = "DELETE FROM meat_type_options WHERE meal_option_id = "+id;
        db.query(sql, function (error, results, fields) {
            if (error) throw error;
            var sql = "INSERT INTO meat_type_options (meal_option_id, meat_type_id) VALUES";
            for (var x=0;x<MealOptions.meat_type.length;x++){
                if (x>0){
                    sql += ',';
                }
                sql += "("+id+","+MealOptions.meat_type[x].id+")";    
            }
            db.query(sql, function (error, results, fields) {
                if (error) throw error;
                var sql = "DELETE FROM meal_type_options WHERE meal_option_id ="+id;
                db.query(sql, function (error, results, fields) {
                    if (error) throw error;
                
                    var sql = "INSERT INTO meal_type_options SET ?";
                    var insertObject = {
                        meal_option_id:id, 
                        meal_type_id: MealOptions.meal_type.id
                    };
                    return (db.query(sql, insertObject, callback));
                });
            });
        });
      });


},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from meal_options where Id in (?)",[delarr],callback);
}
};
module.exports=MealOptions;