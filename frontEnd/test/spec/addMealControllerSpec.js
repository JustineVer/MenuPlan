'use strict'
describe('Add Meal Controller', function(){
    var $this;
    var $controller, $q, $location, dataService, $log, sharedData, typeService, $rootScope;
    var mealTypesValue = [{"id":1,"meal_type":"Dinner"},{"id":2,"meal_type":"Lunch soup"},{"id":3,"meal_type":"School Snack"}];
    var meatTypesValue = [{"id":1,"meat_type":"Bacon"},{"id":2,"meat_type":"Chicken"},{"id":3,"meat_type":"Beef"},{"id":4,"meat_type":"Chorizo"},{"id":5,"meat_type":"Pork"},{"id":6,"meat_type":"Veal"},{"id":7,"meat_type":"Fish"},{"id":8,"meat_type":"Lamb"},{"id":9,"meat_type":"Pancetta"},{"id":10,"meat_type":"Sausage"},{"id":11,"meat_type":"Turkey"},{"id":12,"meat_type":"Vegetarian"}];
    var fileTypesValue = [{"id":1,"file_type":"docx"},{"id":2,"file_type":"jpg"},{"id":3,"file_type":"pdf"},{"id":4,"file_type":"png"},{"id":5,"file_type":"txt"},{"id":6,"file_type":"web"}];
    

    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_,_$q_, _$location_, _dataService_, _$log_, _sharedData_, _typeService_,_$rootScope_){
        $q = _$q_;
        $location = _$location_;
        dataService = _dataService_;
        $log = _$log_;
        sharedData = _sharedData_;
        sharedData.meatTypes = meatTypesValue;
        sharedData.mealTypes = mealTypesValue;
        sharedData.fileTypes = fileTypesValue;
        typeService = _typeService_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
    }));
    describe('Initialise controller', function(){
        
        it("should be created successfully", function() {
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller).toBeDefined();
        });
        it("should have shared data meal types loaded", function(){
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller.mealTypes).toBe(sharedData.mealTypes);
        });
        it("should have shared data meat types loaded", function(){
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller.meatTypes).toBe(sharedData.meatTypes);
        });
        it("should have shared data file types loaded", function(){
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller.fileTypes).toBe(sharedData.fileTypes);
        });

        it("should query database if shared data meal types is NOT loaded", function(){
            sharedData.mealTypes = "";
            spyOn(typeService, 'getMealTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealTypesValue);
                return deferred.promise;    
            });
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.mealTypes).toBe(mealTypesValue);
            expect(typeService.getMealTypes).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data meal types fails", function(){
            sharedData.mealTypes = "";
            spyOn(typeService, 'getMealTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });

        it("should query database if shared data meat types is NOT loaded", function(){
            sharedData.meatTypes = "";
            spyOn(typeService, 'getMeatTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(meatTypesValue);
                return deferred.promise;    
            });
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.meatTypes).toBe(meatTypesValue);
            expect(typeService.getMeatTypes).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data meat types fails", function(){
            sharedData.meatTypes = "";
            spyOn(typeService, 'getMeatTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });

        it("should query database if shared data file types is NOT loaded", function(){
            sharedData.fileTypes = "";
            spyOn(typeService, 'getFileTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(fileTypesValue);
                return deferred.promise;    
            });
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.fileTypes).toBe(fileTypesValue);
            expect(typeService.getFileTypes).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data meat types fails", function(){
            sharedData.fileTypes = "";
            spyOn(typeService, 'getFileTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });

    });

    describe('Save meal', function(){
        it("should have save a meal with data entered", function(){
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            $controller.newMeal.name = 'AddMealControllerTest';
            $controller.newMeal.path = 'AddMealControllerTestPath';
            $controller.newMeal.image_path = '../../images/fish.jpg';
            $controller.newMeal.file_type = '2';
            $controller.newMeal.meal_type = {"id":"4"};
            $controller.newMeal.meat_type = [{"id":"4"},{"id":"5"}];

            spyOn(dataService, 'addNewMeal').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve('');
                return deferred.promise;    
            });
            $controller.save();
            $rootScope.$apply();
            expect(dataService.addNewMeal).toHaveBeenCalled();
            //expect message in log
            expect($location.path()).toBe('/');
        });

        xit("should have save a meal with data entered", function(){
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            $controller.newMeal.name = 'AddMealControllerTest2';
            $controller.newMeal.path = 'AddMealControllerTestPath2';
            $controller.newMeal.image_path = '../../images/fish.jpg';
            $controller.newMeal.file_type = '2';
            $controller.newMeal.meal_type = {"id":"4"};
            $controller.newMeal.meat_type = [{"id":"4"},{"id":"5"}];

            spyOn(dataService, 'addNewMeal').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller.save();
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });


    });

    describe('Cancel button', function(){
        it("should navigate back to root when cancel button is pressed", function(){
            $controller = $controller('AddMealController', {$q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            $controller.cancel();
            $rootScope.$apply();
            expect($location.path()).toBe('/');
        });
    });

});

  