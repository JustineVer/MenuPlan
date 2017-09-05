"use strict";
var unfilteredMeals;
var selectedMeal;
var selectedMeals =[];
//var unfilteredHistory;

window.onload=function(){
    var url="http://localhost:3000/meal_options";
    var request= new XMLHttpRequest();
    request.open("GET",url);
    request.onload = function() {
        if (request.status==200) {
            unfilteredMeals = JSON.parse(request.responseText);            
            getOptions(unfilteredMeals);
            getHistory();            
        }
    };
    request.send(null);
}
function clicking () {
    $('.selectMeal').on('click', function(e){
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        populateModal($(this).attr('id'));
        $( "#deleteFromPlan" ).hide();
        $( "#addToPlan" ).show();
        
        $('.ui.mini.modal').modal('show');
    });

    $('.plannedMeal').on('click', function(e){
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        populateModal($(this).attr('id'),$(this).attr('eaten_id'));
        $( "#addToPlan" ).hide();
        $( "#deleteFromPlan" ).show();
        $('.ui.mini.modal').modal('show');
    });
    
    $('#viewButton').on('click', function(){
        window.open(selectedMeal[0].path,'height=768,width=1366,left=10,top=10,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no');    
    });

    $('#addToPlan').on('click', function(e){
        e.stopImmediatePropagation();
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        $('.ui.mini.modal').modal('hide');
        addMeal(selectedMeal[0]);
    });

    $( "#deleteFromPlan" ).on('click',function(e){
        e.stopImmediatePropagation();
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        $('.ui.mini.modal').modal('hide');
        deleteMeal(selectedMeal[0]);
    });
    
}

$('.ui.dropdown.meatType').dropdown({
  values: [
    {
      name: 'Male',
      value: 'male'
    },
    {
      name     : 'Female',
      value    : 'female',
      selected : true
    }]
});


$('.ui.dropdown.mealType').dropdown({
    values: [
        {
            name: 'Select...',
            value: '',
            selected : true
        },    
        {
            name: 'Dinner',
            value: 'Dinner'
        },

        {
            name     : 'Lunch soup',
            value    : 'Lunch soup'
        },
        {
            name     : 'School Snack',
            value    : 'School Snack'
        }]
  });

function getOptions(responseText) {
    createMainContainer();
    var mealListDiv= document.getElementById("mealList");

    var row, column1, column2, column3, column4, image1, image2, image3, image4;
    row =document.createElement("div");   
    var meals = responseText;
    for (var i=0; i<meals.length;i++){
        var meal=meals[i];
        var imageHolder;
        imageHolder= '<a href="#" class="selectMeal" id="'+meal.id+'"><img src="'+meal.image_path+'" alt="'+meal.name+'">';
        imageHolder += '<br>'+meal.name+'</a>';
        
        if ((i+1)%4==1){
            column1=document.createElement("row");   
            column1.classList.add("column");  
            image1=document.createElement("div")
            image1.classList.add("ui");  
            image1.classList.add("image");  
            image1.classList.add("small");  
            image1.innerHTML = imageHolder;
        } else if ((i+1)%4==2){
            column2=document.createElement("row");   
            column2.classList.add("column");  
            image2=document.createElement("div")
            image2.classList.add("ui");  
            image2.classList.add("image");  
            image2.classList.add("small");  
            image2.innerHTML = imageHolder;
        } else if ((i+1)%4==3){
            column3=document.createElement("row");   
            column3.classList.add("column");  
            image3=document.createElement("div")
            image3.classList.add("ui");  
            image3.classList.add("image");  
            image3.classList.add("small");  
            image3.innerHTML = imageHolder;
        } else if ((i+1)%4==0){
            column4=document.createElement("row");   
            column4.classList.add("column");  
            image4=document.createElement("div")
            image4.classList.add("ui");  
            image4.classList.add("image");  
            image4.classList.add("small");  
            image4.innerHTML = imageHolder;
            
            row =document.createElement("div");   
            row.classList.add("row");  
            row.classList.add("four");  
            row.classList.add("column");  
            mealListDiv.appendChild(row);
            row.appendChild(column1);
            column1.appendChild(image1);
            row.appendChild(column2);
            column2.appendChild(image2);
            row.appendChild(column3);
            column3.appendChild(image3);
            row.appendChild(column4);
            column4.appendChild(image4);            
        }
    }
    clicking();
    
}
function searchMeals(unfilteredMeals){

    if ($('#selectMealType').dropdown('get value').length > 0){
    var filteredMeals = unfilteredMeals.reduce(function (filteredMeals, meal) {
            if (meal.meal_type !== null && meal.meal_type.toUpperCase() == $('#selectMealType').dropdown('get value').toUpperCase()) {
            return filteredMeals.concat(meal);
            } else {
                return filteredMeals;
            }
      }, []);
    }
      else {
        var filteredMeals=unfilteredMeals;    
      }
    
    return(filteredMeals);      
}
$('.ui.primary.button.search').click(function() {
    $('.ui.four.column.doubling.stackable.grid.container').remove();
    var meals = searchMeals(unfilteredMeals);
    getOptions(meals);
  });

function createMainContainer(){
    var uiContainers = document.getElementsByClassName("ui container");
    var uiContainer = uiContainers[0];
    var mealList=document.createElement("div")
    mealList.classList.add("ui");  
    mealList.classList.add("four");  
    mealList.classList.add("column");  
    mealList.classList.add("doubling");  
    mealList.classList.add("stackable");  
    mealList.classList.add("grid");  
    mealList.classList.add("container");  
    mealList.classList.add("image");  
    mealList.setAttribute("id", "mealList")
    uiContainer.appendChild(mealList);
}

function populateModal(id, eaten_id){
    selectedMeal = unfilteredMeals.filter(function (meal) { return meal.id == id });
    var miniModal = document.getElementById('uiMiniModal');
    var miniModalDescription = $('#uiMiniModalDescription');
    if (miniModalDescription.innerHTML !== null){
        $('#uiMiniModalImage').remove();
        $('#uiMiniModalDescription').remove();
    }
    var image=document.createElement("div")
    image.classList.add("image");  
    image.classList.add("content");  
    image.setAttribute("id", "uiMiniModalImage");
    image.setAttribute("eaten_id", eaten_id);

    var smallImage= document.createElement("div");  
    smallImage.classList.add("ui");  
    smallImage.classList.add("small");  
    smallImage.classList.add("image"); 
    smallImage.innerHTML = '<img src="'+selectedMeal[0].image_path+'" alt="'+selectedMeal[0].name+'">'; 

    var description = document.createElement("div");
    description.classList.add("description");
    description.setAttribute("id", "uiMiniModalDescription")
    var uiHeader = document.createElement("div");
    uiHeader.classList.add("ui");
    uiHeader.classList.add("header");
    uiHeader.innerHTML=selectedMeal[0].name;

    var meatMealType = document.createElement("p");
    meatMealType.innerHTML = selectedMeal[0].meal_type+" "+selectedMeal[0].meat_type;
    miniModal.insertBefore(image,miniModal.childNodes[miniModal.childNodes.length-2]);

    image.appendChild(smallImage);

    image.appendChild(description);
    description.appendChild(uiHeader);
    description.appendChild(meatMealType);
    
    if  (typeof selectedMeal[0].path === "undefined" || selectedMeal[0].path === null) {
        $( "#viewButton" ).addClass( "disabled" );
    } else {
        $( "#viewButton" ).removeClass( "disabled" );
    }; 
}

function addMeal(selectedMeal){
    var url="http://localhost:3000/eaten";
    var request= new XMLHttpRequest();
    request.open("POST",url,true);

    //Send the proper header information along with the request
    request.setRequestHeader("Content-type", "application/json");
    request.onreadystatechange = function() {//Call a function when the state changes.
        if(request.readyState == XMLHttpRequest.DONE && request.status == 200) {
            // Request finished. Do processing here.
            $('#uiImagesRightFloatedMini').remove();
            getHistory();
        }
    }
    var eaten=    {
        "meal_option_id": selectedMeal.id,
        "date_eaten": todaysDate(),
        "liked": ""};
        request.send(JSON.stringify(eaten));
}

function deleteMeal(selectedMeal){
    var url="http://localhost:3000/eaten/"+$('#uiMiniModalImage').attr("eaten_id");
    var request= new XMLHttpRequest();
    request.open("DELETE",url);
    request.onload = function() {
        if (request.status==200) {
            $('#uiImagesRightFloatedMini').remove();
            getHistory();
        }
    };
    request.send(null);
}

function todaysDate(){
    var today = new Date();
    return today.toISOString();
}

function getHistory(){

    var url="http://localhost:3000/eaten";
    var request= new XMLHttpRequest();
    request.open("GET",url);
    request.onload = function() {
        if (request.status==200) {
            var unfilteredHistory = JSON.parse(request.responseText);
            var filteredHistory = filterHistory(unfilteredHistory);
            displayCurrentMeals(filteredHistory);
        }
    };
    request.send(null);

}

function filterHistory(unfilteredHistory){
    var filteredHistory = unfilteredHistory.reduce(function (filteredHistory, historyRecord) {
        if (historyRecord.date_eaten !== null) {
            var currentPlanDate = new Date();
            var dateEaten = new Date(historyRecord.date_eaten);
            currentPlanDate.setDate(currentPlanDate.getDate()-7);
            if (dateEaten>currentPlanDate) {
                return filteredHistory.concat(historyRecord);
            } else {
                return filteredHistory;
            }
        }
        else{
            return filteredHistory;
        }
        }, []);
    return(filteredHistory);      
}

function displayCurrentMeals(filteredHistory){
    var imageDiv = document.createElement("div");
    imageDiv.classList.add("ui");
    imageDiv.classList.add("images");
    imageDiv.classList.add("right");
    imageDiv.classList.add("floated");
    imageDiv.classList.add("mini");
    imageDiv.setAttribute("id", "uiImagesRightFloatedMini")
    var meals = "";
    for (var i=0; i<filteredHistory.length;i++){            
        var meal=filteredHistory[i];    
        meals += "<a href='#' class='plannedMeal' id='"+filteredHistory[i].id+"' eaten_id='"+filteredHistory[i].eaten_id+"'>";
        meals += "<img src='"+filteredHistory[i].image_path+"' title='"+filteredHistory[i].name;
        meals += "'></a>";
        imageDiv.innerHTML = meals;
    }
    var h1 = document.getElementById('h1');
    h1.appendChild(imageDiv);
    clicking();
}
