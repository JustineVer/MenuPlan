(function() {
    
        angular.module('app')
            .controller('mealController', ['$rootScope', '$scope', '$log', 'dataService', 'sharedData', MealController]);
    
    
        function MealController($rootScope, $scope, $log, dataService, sharedData) {
            var vm = this;
            
            getAllMeals();

            function getAllMeals(){
                dataService.getAllMeals()
                    .then(getMealsSuccess, null, getMealsNotification)
                    .catch(errorCallback)
                    .finally(getAllMealsComplete);
            }
            
            $rootScope.$on("refreshCurrentMeals", function(event){
                $scope.parentmethod();
            });
        
            $scope.parentmethod = function() {
                vm.allMeals = {};
                getAllMeals();
            }    

            function getMealsSuccess(meals) {
                //console.log(meals);
                sharedData.allMeals = meals;
                vm.allMeals = meals;
                //console.log(vm.allMeals);
            }
    
            function getMealsNotification(notification) {
                //console.log('Promise Notification: ' + notification);
            }
    
            function errorCallback(errorMsg) {
                console.log('Error Message: ' + errorMsg);
            }
    
            function getAllMealsComplete() {
                //console.log('getAllMeals has completed');
            }
        }
    
    }());