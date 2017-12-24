(function() {
    'use strict';
    
    angular.module('app')
        .controller('AddMealController', AddMealController);

    AddMealController.$inject = ['$q','$location', 'dataService', '$log', 'sharedData', 'typeService'];
    
    function AddMealController($q, $location, dataService, $log, sharedData, typeService) {

        var vm = this;
        vm.newMeal = {};
        vm.save;
        vm.cancel;

        function getMeatTypeSuccess(meatTypes) {
            //console.log(meatTypes);
            sharedData.meatTypes = meatTypes;
            vm.meatTypes = meatTypes;
            vm.newMeal.meat_type = "";
        }

        function getMeatTypeNotification(notification) {
            //console.log('Promise Notification: ' + notification);
        }

        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }

        function getMealTypeSuccess(mealTypes) {
            // console.log(mealTypes);
             sharedData.mealTypes = mealTypes;
             vm.mealTypes = mealTypes;
             vm.newMeal.meal_type = "";
         }
 
         function getMealTypeNotification(notification) {
             //console.log('Promise Notification: ' + notification);
         }

         function getFileTypeSuccess(fileTypes) {
            //  console.log(fileTypes);
              sharedData.fileTypes = fileTypes;
              vm.fileTypes = fileTypes;
              vm.newMeal.file_type = "";
          }
  
          function getFileTypeNotification(notification) {
              //console.log('Promise Notification: ' + notification);
          }

         
        if (!sharedData.meatTypes) {
            typeService.getMeatTypes()
                .then(getMeatTypeSuccess, null, getMeatTypeNotification)
                .catch(errorCallback)    
        }
        else
        {
            vm.meatTypes = sharedData.meatTypes;
            vm.newMeal.meat_type = "";
        }

        if (!sharedData.mealTypes) {
            typeService.getMealTypes()
                .then(getMealTypeSuccess, null, getMealTypeNotification)
                .catch(errorCallback)
        
        }
        else {
            vm.mealTypes = sharedData.mealTypes;
            vm.newMeal.meat_type = "";
        }

        if (!sharedData.fileTypes) {
            typeService.getFileTypes()
                .then(getFileTypeSuccess, null, getFileTypeNotification)
                .catch(errorCallback)
    
        }
        else
        {
            vm.fileTypes = sharedData.fileTypes;
            vm.newMeal.file_type = "";
        }

        vm.save = function(){
            console.log(vm.newMeal);
            vm.newMeal.image_path = '../../images/'+vm.newMeal.meat_type[0].meat_type+'.jpg';
            dataService.addNewMeal(vm.newMeal)
            .then(addMealSuccess)
            .catch(addMealError);
        };

        function addMealSuccess(message) {
            $log.info(message);
            $location.path('/');
        }

        function addMealError(errorMessage) {
            $log.error(errorMessage);
        }
    
        vm.cancel = function(){
            $location.path('/');
        };
    
    }

}());