(function() {
    
    angular.module('app')
        .controller('AutoFillController', AutoFillController);

    AutoFillController.$inject = ['$scope','$rootScope','$q', 'typeService', '$log', '$route', 'sharedData', 'dataService'];

    function AutoFillController($scope, $rootScope, $q, typeService, $log, $route, sharedData, dataService) {
        var vm = this;

        hideShowButtons(true);

        vm.meatTypes = [];
        vm.mealTypes = [];
        vm.allMeals = [];            
        
        if (!sharedData.meatTypes) {
            typeService.getMeatTypes()
                .then(getMeatTypesSuccess, null, getMeatTypesNotification)
                .catch(errorCallback)
                .finally(getAllMeatTypesComplete);
    
            function getMeatTypesSuccess(meatTypes) {
                sharedData.meatTypes = meatTypes;
                vm.meatTypes = meatTypes;
            }
    
            function getMeatTypesNotification(notification) {
                //console.log('Promise Notification: ' + notification);
            }
    
            function errorCallback(errorMsg) {
                console.log('Error Message: ' + errorMsg);
            }
    
            function getAllMeatTypesComplete() {
                //console.log('getAllBooks has completed');
            }
        }
        else 
        {
            vm.meatTypes = sharedData.meatTypes;
        }

        if (!sharedData.mealTypes) {
            typeService.getMealTypes()
                .then(getMealTypesSuccess, null, getMealTypesNotification)
                .catch(errorCallback)
                .finally(getAllMealTypesComplete);
    
            function getMealTypesSuccess(mealTypes) {
                sharedData.mealTypes = mealTypes;
                vm.mealTypes = mealTypes;
                
            }
    
            function getMealTypesNotification(notification) {
                //console.log('Promise Notification: ' + notification);
            }
    
            function errorCallback(errorMsg) {
                console.log('Error Message: ' + errorMsg);
            }
    
            function getAllMealTypesComplete() {
                //console.log('getAllBooks has completed');
            }
        }
        else 
        {
            vm.mealTypes = sharedData.mealTypes;
        }
        
        vm.autoFill = function () {
            hideShowButtons();
            autoFillMeals(false);
        };

        $rootScope.$on("RemoveAutoFilledMeal", function(event, mealId){
            console.log(mealId)
            $scope.parentmethod(mealId);
         });
 
         $scope.parentmethod = function(mealId) {
            autoFillMeals(mealId);
         }

        function autoFillMeals(mealId) {

            if (!sharedData.allMeals) {
                dataService.getAllMeals()
                    .then(getMealsSuccess, null, getMealsNotification)
                    .catch(errorCallback)
                    .finally(getAllMealsComplete);

                function getMealsSuccess(meals) {
                    sharedData.allMeals = meals;
                    vm.allMeals = meals;
                    generatePlan();
                    
                }
                
                function getMealsNotification(notification) {
                    //console.log('Promise Notification: ' + notification);
                }

                function errorCallback(errorMsg) {
                    console.log('Error Message: ' + errorMsg);
                }

                function getAllMealsComplete() {
                    //console.log('getAllBooks has completed');
                }
            }
            else{
                generatePlan();
            }

            function generatePlan () {

                var tempMeals = sharedData.allMeals;
                var autoFilledMeals = [];
                
                if (!mealId){
                    //check if called by modal
                    for (var y = 0; y < vm.meatTypes.length; y++) {
                        if (vm.meatTypes[y].noMeats>0) {
                            Array.prototype.push.apply(autoFilledMeals,generate(vm.meatTypes[y].id, vm.meatTypes[y].noMeats, 'meat'));
                        }
                    }
                    for (var z = 0; z < vm.mealTypes.length; z++) {
                        if (vm.mealTypes[z].noMeals>0) {
                            Array.prototype.push.apply(autoFilledMeals,generate(vm.mealTypes[z].id, vm.mealTypes[z].noMeals, 'meal'));
                        }
                    }
                    
                }
                else
                {
                    autoFilledMeals = sharedData.autoFilledMeals.filter(function( obj ) {
                        return obj.id !== mealId.id;
                      });
                    if (mealId.whyGenerated == 'meat'){
                        mType = findMeatTypeId(mealId.heading);
                    }
                    else {
                        mType = findMealTypeId(mealId.heading); 
                    }
                    Array.prototype.push.apply(autoFilledMeals,generate(mType, 1, mealId.whyGenerated));
                    vm.meatTypes = sharedData.requestedMeals;
                }
                vm.autoMeals = autoFilledMeals;
                sharedData.autoFilledMeals = autoFilledMeals;
                sharedData.requestedMeals = vm.meatTypes;

                function generate (mType, NoMeatTypes, typeOption){
                    var autoGeneratedMeals = [];

                    var filteredMeals = tempMeals.reduce(function (filteredMeals, meal) {
                        if (typeOption == 'meat' ){
                            if (meal.meat_type !== null && meal.meat_type_id.search(mType)) {
                            return filteredMeals.concat(meal);
                            } else {
                                return filteredMeals;
                            }
                        }
                        if (typeOption == 'meal' ){
                            if (meal.meal_type !== null && meal.meal_type_id.search(mType)) {
                            return filteredMeals.concat(meal);
                            } else {
                                return filteredMeals;
                            }
                        }
                    }, []);
                    if (autoFilledMeals) { //want to make sure meals are not repeated
                        filteredMeals = filteredMeals.filter(function(e){return this.indexOf(e)<0;},autoFilledMeals);
                    }
                    for (x = 0; x < NoMeatTypes; x++) {
                        var rowIndex = autoGeneratedMeals.push(filteredMeals[Math.floor(Math.random()*filteredMeals.length)])- 1;;
            //            console.log(autoGeneratedMeals);
                        if (typeOption == 'meat') {
                            autoGeneratedMeals[rowIndex].whyGenerated = 'meat';
                            autoGeneratedMeals[rowIndex].heading = findMeatTypeDesc(mType);
                        } else if (typeOption == 'meal') {
                            autoGeneratedMeals[rowIndex].heading = findMealTypeDesc(mType);
                            autoGeneratedMeals[rowIndex].whyGenerated = 'meal';
                        }
                        //remove from potential meals array to make sure meals are not repeated
                        filteredMeals = filteredMeals.filter(function(e){return this.indexOf(e)<0;},autoGeneratedMeals);
                    }
                    return autoGeneratedMeals;
                }
            }
        }

        vm.hideShowButtons = function (){   
            hideShowButtons(true);
        };
        
        function hideShowButtons(state) {
            $scope.showFillForm = state;
            $scope.showButton = !state;
        };
        
        vm.savePlan = function () {
            savePlan();
        };

        
        function savePlan() {
            var mealsToSave=[];
            var today = new Date();
            for (var x=0; x<vm.autoMeals.length;x++){
                mealsToSave.push({
                    "meal_option_id": vm.autoMeals[x].id,
                    "date_eaten": today.toISOString(),
                    "liked": "n"
                });
            }
            dataService.addToPlan(mealsToSave)
                .then(addPlanSuccess)
                .catch(addPlanError);
    
        }
    
        function addPlanSuccess(message) {
            $log.info(message);
            $rootScope.$emit("refreshCurrentPlan");
        }

        function addPlanError(errorMessage) {
            $log.error(errorMessage);
        }

        function findMealTypeDesc(id){
            for (var i=0; i<sharedData.mealTypes.length; i++) {
                    if (sharedData.mealTypes[i].id == id) {
                        return sharedData.mealTypes[i].meal_type;
                    }
            }
        
        }
        
        function findMeatTypeDesc(id){
            for (var i=0; i<sharedData.meatTypes.length; i++) {
                if (sharedData.meatTypes[i].id == id) {
                    return sharedData.meatTypes[i].meat_type;
                }
            }
        }

        function findMealTypeId(description) {
            for (var i=0; i<sharedData.mealTypes.length; i++) {
                if (sharedData.mealTypes[i].meal_type.toUpperCase() == description.toUpperCase()) {
                    return sharedData.mealTypes[i].id;
                }
            }
        
        }
        function findMeatTypeId(description){
            for (var i=0; i<sharedData.meatTypes.length; i++) {
                if (sharedData.meatTypes[i].meat_type.toUpperCase() == 
                    description.toUpperCase()) {
                    return sharedData.meatTypes[i].id;
                }
            }
        }

    }
}());