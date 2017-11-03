(function() {
    'use strict';

    angular.module('app')
        .controller('EditMealController', EditMealController);

    EditMealController.$inject = ['$routeParams','$q','$location', 'dataService', '$log', 'sharedData', 'typeService'];

    function EditMealController($routeParams, $q, $location, dataService, $log, sharedData, typeService) {

        var vm = this;
        vm.currentMeal = {};
        currentMeal = {};

        if (!sharedData.meatTypes) {
            typeService.getMeatTypes()
                .then(getMeatTypeSuccess, null, getMeatTypeNotification)
                .catch(errorCallback)
    
            function getMeatTypeSuccess(meatTypes) {
                //console.log(meatTypes);
                sharedData.meatTypes = meatTypes;
                vm.meatTypes = meatTypes;
                populateItems();
            }
    
            function getMeatTypeNotification(notification) {
                //console.log('Promise Notification: ' + notification);
            }
    
            function errorCallback(errorMsg) {
                console.log('Error Message: ' + errorMsg);
            }
    
        }
        else
        {
            vm.meatTypes = sharedData.meatTypes;
            populateItems();
        }

        if (!sharedData.mealTypes) {
            typeService.getMealTypes()
                .then(getMealTypeSuccess, null, getMealTypeNotification)
                .catch(errorCallback)
    
            function getMealTypeSuccess(mealTypes) {
               // console.log(mealTypes);
                sharedData.mealTypes = mealTypes;
                vm.mealTypes = mealTypes;
                populateItems();
            }
    
            function getMealTypeNotification(notification) {
                //console.log('Promise Notification: ' + notification);
            }
    
            function errorCallback(errorMsg) {
                console.log('Error Message: ' + errorMsg);
            }
    
        }
        else {
            vm.mealTypes = sharedData.mealTypes;
            populateItems();
        }

        if (!sharedData.fileTypes) {
            typeService.getFileTypes()
                .then(getFileTypeSuccess, null, getFileTypeNotification)
                .catch(errorCallback)
    
            function getFileTypeSuccess(fileTypes) {
              //  console.log(fileTypes);
                sharedData.fileTypes = fileTypes;
                vm.fileTypes = fileTypes;
                populateItems();                
            }
    
            function getFileTypeNotification(notification) {
                //console.log('Promise Notification: ' + notification);
            }
    
            function errorCallback(errorMsg) {
                console.log('Error Message: ' + errorMsg);
            }
    
        }
        else
        {
            vm.fileTypes = sharedData.fileTypes;
            populateItems();
        }
        
        dataService.getMealByID($routeParams.mealID)
        .then(getMealSuccess)
        .catch(getMealError);

        function getMealSuccess(meal) {
            currentMeal = meal[0];
            currentMeal.meat_type = makeStringIntoArrayObject(currentMeal.meat_type_id, currentMeal.meat_type, 'meat_type');
            populateItems();
        }

        function getMealError(reason) {
            $log.error(reason);
        }

        function populateItems(){
            if (vm.meatTypes &&vm.mealTypes&&vm.fileTypes&&currentMeal)
            {
                vm.currentMeal = currentMeal;
                var index = vm.fileTypes.findIndex(x => x.id==vm.currentMeal.file_type);
                vm.currentMeal.file_type = vm.fileTypes[index];
                index = vm.mealTypes.findIndex(x => x.id==vm.currentMeal.meal_type_id);
                vm.currentMeal.meal_type = vm.mealTypes[index];
            }
        }

        vm.save = function(){
            console.log(vm.currentMeal);
            dataService.updateMeal(vm.currentMeal)
            .then(updateMealSuccess)
            .catch(updateMealError);
        };

        function updateMealSuccess(message) {
            $log.info(message);
            $location.path('/');
        }

        function updateMealError(errorMessage) {
            $log.error(errorMessage);
        }
    
        vm.cancel = function(){
            $location.path('/');
        };
        
        function makeStringIntoArrayObject(stringId, stringDescription, type){
            var newArray = [];
            var newObject = {};
            var tempId = stringId;
            var tempDescription = stringDescription;


            while (tempId.indexOf(',')>0) {
                newObject = {};
                newObject.id = tempId.substring(0,tempId.indexOf(', '));
                newObject[type] = tempDescription.substring(0,tempDescription.indexOf(', '));
                newArray.push(newObject);
                tempId = tempId.substring(tempId.indexOf(', ')+2);
                tempDescription = tempDescription.substring(tempDescription.indexOf(', ')+2);
            }
            newObject = {};
            newObject.id = tempId;
            newObject[type] = tempDescription;
            newArray.push(newObject);
            return (newArray);
        }
    }

}());