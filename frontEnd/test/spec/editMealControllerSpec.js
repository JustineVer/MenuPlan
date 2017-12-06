'use strict'
describe('Edit Meal Controller', function(){
    var $this;
    var $controller, $routeParams, $q, $location, dataService, $log, sharedData, typeService, $rootScope;
    var mealTypesValue = [{"id":1,"meal_type":"Dinner"},{"id":2,"meal_type":"Lunch soup"},{"id":3,"meal_type":"School Snack"}];
    var meatTypesValue = [{"id":1,"meat_type":"Bacon"},{"id":2,"meat_type":"Chicken"},{"id":3,"meat_type":"Beef"},{"id":4,"meat_type":"Chorizo"},{"id":5,"meat_type":"Pork"},{"id":6,"meat_type":"Veal"},{"id":7,"meat_type":"Fish"},{"id":8,"meat_type":"Lamb"},{"id":9,"meat_type":"Pancetta"},{"id":10,"meat_type":"Sausage"},{"id":11,"meat_type":"Turkey"},{"id":12,"meat_type":"Vegetarian"}];
    var fileTypesValue = [{"id":1,"file_type":"docx"},{"id":2,"file_type":"jpg"},{"id":3,"file_type":"pdf"},{"id":4,"file_type":"png"},{"id":5,"file_type":"txt"},{"id":6,"file_type":"web"}];
    var mealForID1 = [{"id":1,"name":"2-INGREDIENT CREAM CHEESE PANCAKES","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"}];
    var mealForID40 = [{"id":40,"name":"creamy chicken and mushroom casserole with bacon and spinach","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon, Chicken","meat_type_id":"1, 2"}];
    var mealForID127 = [{"id":127,"name":"Slow-cooker chicken and chorizo gumbo","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken, Chorizo","meat_type_id":"2, 4"}];

    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_,_$routeParams_, _$q_, _$location_, _dataService_, _$log_, _sharedData_, _typeService_,_$rootScope_){
        $routeParams = _$routeParams_;
        $routeParams.mealID = 1;
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
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller).toBeDefined();
        });
        it("should have shared data meal types loaded", function(){
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller.mealTypes).toBe(sharedData.mealTypes);
        });
        it("should have shared data meat types loaded", function(){
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller.meatTypes).toBe(sharedData.meatTypes);
        });
        it("should have shared data file types loaded", function(){
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            expect($controller.fileTypes).toBe(sharedData.fileTypes);
        });

        it("should query database if shared data meal types is NOT loaded", function(){
            sharedData.mealTypes = "";
            spyOn(typeService, 'getMealTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealTypesValue);
                return deferred.promise;    
            });
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID1);
                return deferred.promise;    
            });
            
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.mealTypes).toBe(mealTypesValue);
            expect(typeService.getMealTypes).toHaveBeenCalled();
            expect(dataService.getMealByID).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data meal types fails", function(){
            sharedData.mealTypes = "";
            spyOn(typeService, 'getMealTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
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
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID1);
                return deferred.promise;    
            });
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.meatTypes).toBe(meatTypesValue);
            expect(typeService.getMeatTypes).toHaveBeenCalled();
            expect(dataService.getMealByID).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data meat types fails", function(){
            sharedData.meatTypes = "";
            spyOn(typeService, 'getMeatTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
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
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID1);
                return deferred.promise;    
            });
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.fileTypes).toBe(fileTypesValue);
            expect(typeService.getFileTypes).toHaveBeenCalled();
            expect(dataService.getMealByID).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data meat types fails", function(){
            sharedData.fileTypes = "";
            spyOn(typeService, 'getFileTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });

        it("should load meal to be edited when database not previously queried in controller", function(){
            $routeParams.mealID = 127;
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID127);
                return deferred.promise;    
            });
            
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(dataService.getMealByID).toHaveBeenCalled();
            expect($controller.currentMeal).toBe(mealForID127[0]);

        });
        
        it("should load meal to be edited when database previously queried in controller", function(){
            $routeParams.mealID = 40;
            sharedData.mealTypes = "";
            spyOn(typeService, 'getMealTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealTypesValue);
                return deferred.promise;    
            });
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID40);
                return deferred.promise;    
            });
            
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.mealTypes).toBe(mealTypesValue);
            expect(typeService.getMealTypes).toHaveBeenCalled();
            expect(dataService.getMealByID).toHaveBeenCalled();
            expect($controller.currentMeal).toBe(mealForID40[0]);
            //console.log($controller.currentMeal.file_type);
            //console.log($controller.currentMeal.meal_type);


            
        });
        it("should load meal to be edited repeating the last test without error (there were some weird things going on with the stringToArray function)", function(){
            $routeParams.mealID = 40;
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID40);
                return deferred.promise;    
            });
            
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $rootScope.$apply();
            expect(sharedData.mealTypes).toBe(mealTypesValue);
            expect(dataService.getMealByID).toHaveBeenCalled();
            expect($controller.currentMeal).toBe(mealForID40[0]);
        });

        xit("should cope with error query database if retrieving meal fails", function(){
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService});
            $rootScope.$apply();
            expect(dataService.getMealByID).toThrow();
            });
        });
    

    describe('Save meal', function(){
        it("should have save a meal with data entered", function(){
            $routeParams.mealID = 40;
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID40);
                return deferred.promise;    
            });
            
            spyOn(dataService, 'updateMeal').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve('');
                return deferred.promise;    
            });
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $controller.save();
            $rootScope.$apply();
            expect(sharedData.mealTypes).toBe(mealTypesValue);
            expect(dataService.getMealByID).toHaveBeenCalled();
            expect($controller.currentMeal).toBe(mealForID40[0]);
            expect(dataService.updateMeal).toHaveBeenCalled();
            //expect message in log
            expect($location.path()).toBe('/');
        });

        xit("should have save a meal with data entered", function(){
            $routeParams.mealID = 40;
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID40);
                return deferred.promise;    
            });
            
            spyOn(dataService, 'updateMeal').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $controller.save();
            $rootScope.$apply();
            expect(sharedData.mealTypes).toBe(mealTypesValue);
            expect(dataService.getMealByID).toHaveBeenCalled();
            expect($controller.currentMeal).toBe(mealForID40[0]);
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });
    });

    describe('Cancel button', function(){
        it("should navigate back to root when cancel button is pressed", function(){
            spyOn(dataService, 'getMealByID').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealForID1);
                return deferred.promise;    
            });
            
            $controller = $controller('EditMealController', {$routeParams:$routeParams, $q:$q, $location:$location, dataService:dataService, $log:$log, sharedData:sharedData, typeService:typeService,$rootScope:$rootScope});
            $controller.cancel();
            $rootScope.$apply();
            expect(sharedData.mealTypes).toBe(mealTypesValue);
            expect(dataService.getMealByID).toHaveBeenCalled();
            expect($controller.currentMeal).toBe(mealForID1[0]);
            expect($location.path()).toBe('/');
        });
    });

});

  