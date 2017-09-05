/*window.onload=function(){
    var url="http://localhost:3000/meal_options";
    var request= new XMLHttpRequest();
    request.open("GET",url);
    request.onload = function() {
        if (request.status==200) {
            getOptions(request.responseText);
        }
    };
    request.send(null);
}
/*
function getOptions(responseText) {
    console.log(responseText);
    var mealListDiv= document.getElementById("mealList");
    var table=document.createElement("table");     
    var header = table.createTHead();
    var meals = JSON.parse(responseText);
    for (var i=0; i<meals.length;i++){
        var meal=meals[i];
         // Create an empty <tr> element and add it to the first position of <thead>:
        var row = header.insertRow(i);     
        // Insert a new cell (<td>) at the first position of the "new" <tr> element:
        var cell = row.insertCell(0);
        // Add some bold text in the new cell:
        if (meal.path === null) {
            cell.innerHTML+= '<img src="'+meal.image_path+'" alt="'+meal.name+'" height="42" width="42">';
            cell.innerHTML += '<br>'+meal.name;
        } else {
            cell.innerHTML += "<a href='"+meal.path+"'>"+'<img src="'+meal.image_path+'" alt="'+meal.name+'" height="42" width="42">'+'<br>'+meal.name+"</a>";
        }        
        mealListDiv.appendChild(table);
    }
}
*//*
var validationObj = {
    name: {
        identifier: 'name',
        rules:[
            {
                type: 'empty',
                prompt:'Please enter a Meal Name'
            }
        ]
    },
    fileType: {
        identifier:'fileType',
        rules: [
            {
                type:'empty',
                prompt:'Please enter a File Type'
            }
        ]
    }
};

$('.form').form(validationObj,{
    inline:true
});*/
$('.ui.form')
.form({
  inline : true,
  fields: {
    name: {
      identifier: 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter the Meal Name'
        }
        ]
    },
    fileType: {
        identifier: "fileType",
        rules: [//google for more rules, must be url etc and creating own rules
            {
              type   : 'empty',
              prompt : 'Please enter the File Type'
            }
        ]
    }
  }
});