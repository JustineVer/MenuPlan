(function () {
    
        angular.module('app')
            .factory('sharedData', sharedData);
    
    
        function sharedData() {
    
            return {
                allMeals: allMeals,
                autoFilledMeals: autoFilledMeals,
                meatTypes: meatTypes,
                mealTypes: mealTypes,
                requestedMeals:requestedMeals, 
                fileTypes:fileTypes
            };
    
            var allMeals = [];
            var meatTypes = [];
            var mealTypes = [];
            var autoFilledMeals = [];
            var requestedMeals = [];
            var fileTypes = [];
    
        }
    
    }());