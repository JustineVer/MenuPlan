var db=require('../dbconnection');

var MealOptions={

getAllOptions:function(callback){

return db.query("Select * from meals",callback);

},
getOptionById:function(id,callback){

    return db.query("select * from meals where Id=?",[id],callback);
},
addOption:function(MealOptions,callback){
   console.log("inside service");
   console.log(MealOptions);
   console.log(MealOptions.Id);
   return db.query("Insert into meal_options (name) values(?)",[MealOptions.name,MealOptions.file_type],callback);
//return db.query("insert into task(Id,name,file_type) values(?,?,?)",[Task1.Id,Task1.name,Task1.file_type],callback);
},
deleteOption:function(id,callback){
    return db.query("delete from meal_options where Id=?",[id],callback);
},
updateOption:function(id,MealOptions,callback){
    return  db.query("update meal_options set name=? where Id=?",[MealOptions.name,MealOptions.file_type,id],callback);
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