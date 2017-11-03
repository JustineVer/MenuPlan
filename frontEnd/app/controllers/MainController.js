(function() {
    
        angular.module('app')
            .controller('MainController', MainController);
        
        MainController.$inject = ['$scope','$rootScope','$q', 'meals', 'dataService', '$log', '$route', 'sharedData'];
    
    
        function MainController($scope, $rootScope, $q, meals, dataService, $log, $route, sharedData) {
    
            var vm = this;
            vm.appName = meals.appName;

            loadCurrentPlan();

            $rootScope.$on("refreshCurrentPlan", function(event){
                $scope.parentmethod();
             });
     
             $scope.parentmethod = function() {
                loadCurrentPlan();
             }

            function loadCurrentPlan() {
                dataService.getCurrentPlan()
                    .then(getPlanSuccess, null, getPlanNotification)
                    .catch(errorCallback)
                    .finally(getPlanComplete);
        
                function getPlanSuccess(plan) {
                    //console.log(plan);
                    var today = new Date();
                    var planDateSecs = new Date().setDate(today.getDate()-7);
                    var planDate = new Date(planDateSecs);
                    var currentPlan = plan.reduce(function (currentPlan, meal) {
                        var mealDate = new Date(meal.date_eaten);
                        if (mealDate > planDate) {
                        return currentPlan.concat(meal);
                        } else {
                            return currentPlan;
                        }
                    }, []);
                    vm.currentPlan = currentPlan;
                    //console.log(vm.currentPlan);
                }
        
                function getPlanNotification(notification) {
                    //console.log('Promise Notification: ' + notification);
                }
        
                function errorCallback(errorMsg) {
                    console.log('Error Message: ' + errorMsg);
                }
        
                function getPlanComplete() {
                    //console.log('getAllBooks has completed');
                }
            }    
        }
    
    }());