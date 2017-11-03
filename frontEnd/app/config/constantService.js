(function () {
    
        angular.module('app')
            .constant('constants', {
                APP_TITLE: 'Menu Plan',
                APP_DESCRIPTION: 'Organise your meals over a certain period.',
                APP_VERSION: '1.0',
                MEAT_TYPE_URL: 'http://localhost:3000/listValues/meat_type',
                MEAL_TYPE_URL: 'http://localhost:3000/listValues/meal_type',
                FILE_TYPE_URL: 'http://localhost:3000/listValues/file_type',
                MEALS_URL: 'http://localhost:3000/meal_options/',
                PLANS_URL: 'http://localhost:3000/eaten/'
            
            });
    
    }());