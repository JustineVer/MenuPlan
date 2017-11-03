(function() {
    
        var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
    
        app.provider('meals', ['constants', function (constants) {
        
            this.$get = function () {
    
                var appName = constants.APP_TITLE;
                var version = constants.APP_VERSION;
                var appDesc = constants.APP_DESCRIPTION;
    
                return {
                    appName: appName,
                    appDesc: appDesc
                };
            };
    
        }]);

        app.config(['mealsProvider', '$routeProvider', '$logProvider', '$httpProvider', '$provide', 
        function (mealsProvider, $routeProvider, $logProvider, $httpProvider, $provide) {

            $logProvider.debugEnabled(true);
    
            $routeProvider
                .when('/AutoFill', {
                    templateUrl: 'app/plan/autoFill.html',
                    controller: 'AutoFillController',
                    controllerAs: 'AutoFillController'
                })
                .when('/', {
                    templateUrl: 'app/meal/meals.html',
                    controller: 'mealController',
                    controllerAs: 'MealController'
                })
                .when('/AddNewMeal', {
                    templateUrl: 'app/meal/addMeal.html',
                    controller: 'AddMealController',
                    controllerAs: 'mealAdder'
          })
                .when('/EditMeal/:mealID', {
                    templateUrl: 'app/meal/editMeal.html',
                    controller: 'EditMealController',
                    controllerAs: 'mealUpdate'
                })
                .when('/ViewHistory', {
                    templateUrl: 'app/plan/viewHistory.html',
                    controller: 'ViewHistoryController',
                    controllerAs: 'historyView'
                })
                .otherwise('/');
    
        }]);
    
    
    }());