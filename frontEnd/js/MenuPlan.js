"use strict";
var unfilteredMeals;
var selectedMeal;
var selectedMeals =[];
//var unfilteredHistory;

window.onload=function(){
    var url="http://localhost:3000/meal_options";
    
    $.ajax({
        type: "GET",                                            // GET or POST
        url: url,                                               // Path to file
        timeout: 2000,                                          // Waiting time
/*        beforeSend: function() {                                // Before Ajax 
          $content.append('<div id="load">Loading</div>');      // Load message
        },
        complete: function() {                                  // Once finished
          $('#load').remove();                                  // Clear message
        },*/
        success: function(data) {                               // Show content
            unfilteredMeals = (data);            
            getOptions(unfilteredMeals);
            getHistory();  
        },
        error: function() {                                     // Show error msg 
         // $content.html('<div class="container">Please try again soon.</div>');
         console.log('error');
        }
      });

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
    var $mealListDiv= jQuery("#mealList");
    var $column1, $column2, $column3, $column4, $image1, $image2, $image3, $image4, $row;
    var meals = responseText;
    for (var i=0; i<meals.length;i++){
        var meal=meals[i];
        var imageHolder="<p></p>";
        imageHolder= '<a href="#" class="selectMeal" id="'+meal.id+'"><img src="'+meal.image_path+'" alt="'+meal.name+'">';
        imageHolder += '<br>'+meal.name+'</a>';
        if ((i+1)%4==1){
            $column1=$("<row>", {"class":"column"});  
            $image1=$("<div>",{"class": "ui image small"}).html(imageHolder);
        } else if ((i+1)%4==2){
            $column2=$("<row>", {"class":"column"});  
            $image2=$("<div>",{"class": "ui image small"}).html(imageHolder);
        } else if ((i+1)%4==3){
            $column3=$("<row>", {"class":"column"});  
            $image3=$("<div>",{"class": "ui image small"}).html(imageHolder);
        } else if ((i+1)%4==0){
            $column4=$("<row>", {"class":"column"});  
            $image4=$("<div>",{"class": "ui image small"}).html(imageHolder);
        }
        if (((i+1)%4==0) || (i==(meals.length-1))){
            $row = $("<div/>", {"class": "row four column"});
            $mealListDiv.append($row);
            $row.append($column1);
            $column1.append($image1);

            if ((i+1)%4>2 && (i==(meals.length-1))||((i+1)%4==0))
            {
                $row.append($column2);
                $column2.append($image2);
                if ((i+1)%4>3 && (i==(meals.length-1))|| ((i+1)%4==0))
                {
                    $row.append($column3);
                    $column3.append($image3);
                    if ((i+1)%4>4 && (i==(meals.length-1))|| ((i+1)%4==0))
                    {
                        $row.append($column4);
                        $column4.append($image4);            
                    }
                }
            }
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
    var $uiContainer = $( "#uiContainer" );
    var $mealList=$("<div>", {"class":"ui four column doubling stackable grid container image", "id":"mealList"});
    $uiContainer.append($mealList);
}

function populateModal(id, eaten_id){
    selectedMeal = unfilteredMeals.filter(function (meal) { return meal.id == id });
    var $miniModal = $('#uiMiniModal');
    var $miniModalDescription = $('#uiMiniModalDescription');
    if ($miniModalDescription.html() !== null){
        $('#uiMiniModalImage').remove();
        $('#uiMiniModalDescription').remove();
    }
    var $image=$("<div>", {"class":"image content", "id": "uiMiniModalImage", "eaten_id": eaten_id});
    var $smallImage= $("<div>", {"class": "ui small image"}).html('<img src="'+selectedMeal[0].image_path+'" alt="'+selectedMeal[0].name+'">'); 

    var $description = $("<div>", {"class": "description", "id":"uiMiniModalDescription"});
    var $uiHeader = $("<div>", {"class": "ui header"}).html(selectedMeal[0].name);

    var $meatMealType = $("<p>").html(selectedMeal[0].meal_type+" "+selectedMeal[0].meat_type);
    
    $image.insertBefore($miniModal.children(".actions"));
    $image.append($smallImage);
    $image.append($description);
    $description.append($uiHeader);
    $description.append($meatMealType);
    
    if  (typeof selectedMeal[0].path === "undefined" || selectedMeal[0].path === null) {
        $( "#viewButton" ).addClass( "disabled" );
    } else {
        $( "#viewButton" ).removeClass( "disabled" );
    }; 
}

function addMeal(selectedMeal){
    var url="http://localhost:3000/eaten";
    var eaten=    {
        "meal_option_id": selectedMeal.id,
        "date_eaten": todaysDate(),
        "liked": ""};
    
    $.post(url,                                               // Path to file
        eaten)
        .done(function(data) {                               // Show content
            $('#uiImagesRightFloatedMini').remove();
            getHistory();
        })
        .fail(function() {
            console.log( "error" );
        })
        .always(function() {
            console.log( "finished" );
        });
    
}

function deleteMeal(selectedMeal){
    var url="http://localhost:3000/eaten/"+$('#uiMiniModalImage').attr("eaten_id");
    $.ajax({
        type: "DELETE",                                            // GET or POST
        url: url,                                               // Path to file
        timeout: 2000,                                          // Waiting time
        success: function(data) {                               // Show content
            $('#uiImagesRightFloatedMini').remove();
            getHistory();
        },
        error: function() {                                     // Show error msg 
         // $content.html('<div class="container">Please try again soon.</div>');
         console.log('error');
        }
      });
}

function todaysDate(){
    var today = new Date();
    return today.toISOString();
}

function getHistory(){
    var url="http://localhost:3000/eaten";
    $.ajax({
        type: "GET",                                            // GET or POST
        url: url,                                               // Path to file
        timeout: 2000,                                          // Waiting time
/*        beforeSend: function() {                                // Before Ajax 
          $content.append('<div id="load">Loading</div>');      // Load message
        },
        complete: function() {                                  // Once finished
          $('#load').remove();                                  // Clear message
        },*/
        success: function(data) {                               // Show content
            var unfilteredHistory = data;
            var filteredHistory = filterHistory(unfilteredHistory);
            displayCurrentMeals(filteredHistory);
        },
        error: function() {                                     // Show error msg 
         // $content.html('<div class="container">Please try again soon.</div>');
         console.log('error');
        }
      });

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
    var $imageDiv = $("<div>", {"class": "ui images right floated mini", "id": "uiImagesRightFloatedMini"});
    var meals = "";
    for (var i=0; i<filteredHistory.length;i++){            
        var meal=filteredHistory[i];    
        meals += "<a href='#' class='plannedMeal' id='"+filteredHistory[i].id+"' eaten_id='"+filteredHistory[i].eaten_id+"'>";
        meals += "<img src='"+filteredHistory[i].image_path+"' title='"+filteredHistory[i].name;
        meals += "'></a>";
        $imageDiv.html(meals);
    }
    var $h1 = $('#h1');
    $h1.append($imageDiv);
    clicking();
}
