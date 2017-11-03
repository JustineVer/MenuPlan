(function() {
    
        angular.module('app')
            .service('logger', MealAppLogger);
    
        function LoggerBase() { }
    
        LoggerBase.prototype.output = function(message) {
            console.log('LoggerBase: ' + message);
        };
    
        function MealAppLogger() {
    
            LoggerBase.call(this);
    
            this.logMeal = function(meal) {
                console.log('Meal: ' + meal.name);
            }
        }
    
        MealAppLogger.prototype = Object.create(LoggerBase.prototype);
    
    }());