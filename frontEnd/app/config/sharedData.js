/*(function () {
    
        angular.module('app')
            .factory('sharedData', sharedData);
    
    
        function sharedData() {
    
            var allMeals = [];
            var meatTypes = [];
            var mealTypes = [];
            var autoFilledMeals = [];
            var requestedMeals = [];
            var fileTypes = [];

            return {
                allMeals: allMeals,
                autoFilledMeals: autoFilledMeals,
                meatTypes: meatTypes,
                mealTypes: mealTypes,
                requestedMeals:requestedMeals, 
                fileTypes:fileTypes
            };
    
        }
    
    }());*/
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
            fileTypes:fileTypes,
            mealsAvailableToAutoFill:mealsAvailableToAutoFill
        };

        var allMeals = [];
        var meatTypes = [];
        var mealTypes = [];
        var autoFilledMeals = [];
        var requestedMeals = [];
        var fileTypes = [];
        var mealsAvailableToAutoFill = [];

    }

}());