'use strict'
describe('Auto Fill Controller', function(){
    var $this;
    var $controller, $scope, $rootScope, $q, typeService, $log, $route, sharedData, dataService;
    var mealTypesValue = [{"id":1,"meal_type":"Dinner"},{"id":2,"meal_type":"Lunch soup"},{"id":3,"meal_type":"School Snack"}];
    var meatTypesValue = [{"id":1,"meat_type":"Bacon"},{"id":2,"meat_type":"Chicken"},{"id":3,"meat_type":"Beef"},{"id":4,"meat_type":"Chorizo"},{"id":5,"meat_type":"Pork"},{"id":6,"meat_type":"Veal"},{"id":7,"meat_type":"Fish"},{"id":8,"meat_type":"Lamb"},{"id":9,"meat_type":"Pancetta"},{"id":10,"meat_type":"Sausage"},{"id":11,"meat_type":"Turkey"},{"id":12,"meat_type":"Vegetarian"}];
    var allMealsValue = [
        {"id":2,"name":"Bacon Cheeseburger Cauliflower Casserole","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon","meat_type_id":"1"},
        {"id":40,"name":"creamy chicken and mushroom casserole with bacon and spinach","path":null,"image_path":"../../images/chicken.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon, Chicken","meat_type_id":"1, 2"},
        {"id":127,"name":"Slow-cooker chicken and chorizo gumbo","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken, Chorizo","meat_type_id":"2, 4"},
        {"id":5,"name":"Baked chicken with pumpkin and chorizo","path":"","image_path":"../../images/chicken.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Chicken, Chorizo","meat_type_id":"2, 4"},
        {"id":3,"name":"Bacon Covered Meatloaf","path":null,"image_path":"../../images/beef.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef","meat_type_id":"3"},
        {"id":125,"name":"slow-cooked beef and pancetta ragu","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef, Pancetta","meat_type_id":"3, 9"},
        {"id":176,"name":"876543ertyujhgfg","path":"w435676iuyh","image_path":"../../images/bacon.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef, Pancetta","meat_type_id":"3, 9"},
        {"id":160,"name":"3asdfasdfdsaf","path":"path","image_path":"../../images/sausage.jpg","file_type_desc":"docx","file_type":1,"meal_type":null,"meal_type_id":null,"meat_type":"Chorizo","meat_type_id":"4"},
        {"id":999,"name":"3asdfasdfdsaf1","path":"path","image_path":"../../images/sausage.jpg","file_type_desc":"docx","file_type":1,"meal_type":null,"meal_type_id":null,"meat_type":"Chorizo","meat_type_id":"4"},
        {"id":4,"name":"Bacon-wrapped meatloaf with roast vegetables","path":null,"image_path":"../../images/veal.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork, Veal","meat_type_id":"5, 6"},
        {"id":50,"name":"Easy Slow Cooker Pulled Pork","path":"null","image_path":"../../images/pork.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork","meat_type_id":"5"},
        {"id":56,"name":"Gluten-free 'spaghetti' and meatballs","path":null,"image_path":"../../images/veal.jpg","file_type_desc":"pdf","file_type":3,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork, Veal","meat_type_id":"5, 6"},
        {"id":174,"name":"ytre","path":"qwert","image_path":"../../images/veal.jpg","file_type_desc":"pdf","file_type":3,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Veal","meat_type_id":"6"},
        {"id":103,"name":"Pork and veal meatballs with eggplant","path":null,"image_path":"../../images/veal.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Pork, Veal","meat_type_id":"5, 6"},
        {"id":7,"name":"battered fish","path":null,"image_path":"../../images/fish.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Fish","meat_type_id":"7"},
        {"id":53,"name":"Fish Sticks","path":null,"image_path":"../../images/fish.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Fish","meat_type_id":"7"},
        {"id":62,"name":"Healthy fish sticks","path":null,"image_path":"../../images/fish.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Fish","meat_type_id":"7"},
        {"id":6,"name":"Baked Moussaka Eggplants","path":null,"image_path":"../../images/lamb.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Lamb","meat_type_id":"8"},
        {"id":35,"name":"Coconut Lamb","path":null,"image_path":"../../images/lamb.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Lamb","meat_type_id":"8"},
        {"id":998,"name":"slow-cooked beef and pancetta ragu1","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef, Pancetta","meat_type_id":"3, 9"},
        {"id":997,"name":"876543ertyujhgfg1","path":"w435676iuyh","image_path":"../../images/bacon.jpg","file_type_desc":"png","file_type":4,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Beef, Pancetta","meat_type_id":"3, 9"},
        {"id":64,"name":"italian sausage soup","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Sausage","meat_type_id":"10"},
        {"id":106,"name":"quick and simple oven bake","path":null,"image_path":"../../images/sausage.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Sausage","meat_type_id":"10"},
        {"id":134,"name":"turkey meatloaf meatballs","path":null,"image_path":"../../images/turkey.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Turkey","meat_type_id":"11"},
        {"id":175,"name":"asdf32456345yrt","path":"345364","image_path":"../../images/turkey.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Turkey","meat_type_id":"11"},
        {"id":1,"name":"2-INGREDIENT CREAM CHEESE PANCAKES","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":null,"meal_type_id":null,"meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":65,"name":"kale, pea and spinach soup with goat's curd","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":87,"name":"mexican mixed bean slow-cooker soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":114,"name":"semolina dumpling soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":126,"name":"slow-cooker broccoli and 3 cheese soup","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"png","file_type":4,"meal_type":"Lunch soup","meal_type_id":"2","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":137,"name":"Anti-LCM bars","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":138,"name":"Blueberry scones","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":139,"name":"Chocolate Banana Brownies","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":140,"name":"Easy Hummus Recipe","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"txt","file_type":5,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"},
        {"id":107,"name":"Quinoa carrot cake","path":null,"image_path":"../../images/vegetarian.jpg","file_type_desc":"jpg","file_type":2,"meal_type":"School Snack","meal_type_id":"3","meat_type":"Vegetarian","meat_type_id":"12"}
    ];

    var customMatchers = {
        toInclude : function(){
            return {
                compare: function(actual,expected){
                    if (expected===undefined){
                        expected='';

                    }
                    var result = {};
                    result.pass = new RegExp("\\b"+expected+"\\b").test(actual)
                    if (result.pass){
                        result.message='Expected '+actual+' to include '+expected;
                    }
                    else
                    {
                        result.message='Expected '+actual+' to include '+expected;
                    }
                    return result;

                }
            };
        }
    };


    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_,_$rootScope_,_$q_, _typeService_, _$log_, _sharedData_, _dataService_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $q = _$q_;
        typeService = _typeService_;
        $log = _$log_;
        sharedData = _sharedData_;
        sharedData.mealTypes = mealTypesValue;
        sharedData.meatTypes = meatTypesValue;
        sharedData.allMeals = allMealsValue;
        for (var i =0; i<sharedData.meatTypes.length;i++){
            sharedData.meatTypes[i].noMeats = "0";
        }
        for (var i =0; i<sharedData.mealTypes.length;i++){
            sharedData.mealTypes[i].noMeals = "0";
        }
        dataService = _dataService_;
        $controller = _$controller_;
    }));
    beforeEach(function() {
        jasmine.addMatchers(customMatchers);
    });
    describe('Initialise controller', function(){
        
        it("should be created successfully", function() {
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            expect($controller).toBeDefined();
        });
        it("should have shared data meal types loaded", function(){
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            expect($controller.mealTypes).toBe(sharedData.mealTypes);
        });
        it("should have shared data meat types loaded", function(){
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            expect($controller.meatTypes).toBe(sharedData.meatTypes);
        });

        it("should query database if shared data meal types is NOT loaded", function(){
            sharedData.mealTypes = "";
            spyOn(typeService, 'getMealTypes').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(mealTypesValue);
                return deferred.promise;    
            });
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
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
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
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
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
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
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });

        it("should query database if shared data all meals is NOT loaded", function(){
            sharedData.allMeals = "";
            spyOn(dataService, 'getAllMeals').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve(allMealsValue);
                return deferred.promise;    
            });
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            $rootScope.$apply();
            expect(sharedData.allMeals).toBe(allMealsValue);
            expect(dataService.getAllMeals).toHaveBeenCalled();
        });

        xit("should cope with error query database if shared data all meals fails", function(){
            sharedData.allMeals = "";
            spyOn(dataService, 'getAllMeals').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $rootScope.$apply();
            expect($controller.errorMessage).toBe('Argh something went wrong');
        });
    });

    describe('Interactions in page', function(){

        it("should show Generate button and fill form and hide 'show buttons' on initial load", function(){
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            expect($scope.showFillForm).toBeTruthy();
            expect($scope.showButton).toBeFalsy();
        });

        it("should hide Generate button and fill form and show 'show buttons' after autofilling", function(){
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            expect($scope.showFillForm).toBeFalsy();
            expect($scope.showButton).toBeTruthy();
        });

        it("should show Generate button and fill form and hide 'show buttons' after Show Buttons button is clicked", function(){
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            $controller.hideShowButtons();
            expect($scope.showFillForm).toBeTruthy();
            expect($scope.showButton).toBeFalsy();
        });
    });

    describe('AutoFill functionality', function(){
        
        it("should autofill when a value is entered for Bacon", function(){
            sharedData.meatTypes[0].noMeats = 1;
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
    //        console.log($controller.autoMeals);
    //        console.log(sharedData.requestedMeals);
            expect($controller.autoMeals[0].meat_type_id).toInclude('1');
        });

        it("should autofill when a value greater than one is entered for Bacon", function(){
            sharedData.meatTypes[0].noMeats = 2;
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
    //        console.log($controller.autoMeals);
    //        console.log(sharedData.requestedMeals);
            expect($controller.autoMeals[0].meat_type_id).toInclude('1');
            expect($controller.autoMeals[1].meat_type_id).toInclude('1');
        });
        it("should autofill when a value is entered for every meat", function(){
            for (var i =0; i<sharedData.meatTypes.length;i++){
                sharedData.meatTypes[i].noMeats = "1";
            }
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            for (var i =0; i<$controller.autoMeals.length;i++){
                expect($controller.autoMeals[i].meat_type_id).toInclude(i+1);
            }
        });

        it("should autofill when a value greater than one is entered for all Meats", function(){
            for (var i =0; i<sharedData.meatTypes.length;i++){
                sharedData.meatTypes[i].noMeats = "2";
            }
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            for (var i =0; i<$controller.autoMeals.length;i++){
                var alteredIndex = Math.floor((i+2)/2);
                expect($controller.autoMeals[i].meat_type_id).toInclude(alteredIndex);
            }
        });

        it("should throw an error when more meals are requested than can be found", function(){
            sharedData.meatTypes[0].noMeats = 22222;
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            expect($controller.autoFill).toThrow('No more meals to select from for meat: Bacon ('+sharedData.meatTypes[0].noMeats+')');
        });

        it("should autofill when a value is entered for Dinner", function(){
            sharedData.mealTypes[0].noMeals = 1;
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            expect($controller.autoMeals[0].meal_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
        });

        it("should autofill when a value greater than one is entered for Dinner", function(){
            sharedData.mealTypes[0].noMeals = 2;
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            expect($controller.autoMeals[0].meal_type_id).toInclude('1');
            expect($controller.autoMeals[1].meal_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
            expect($controller.autoMeals[1].whyGenerated).toBe('meal');
        });

        it("should autofill when a value is entered for every meal", function(){
            for (var i =0; i<sharedData.mealTypes.length;i++){
                sharedData.mealTypes[i].noMeals = "1";
            }
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            for (var i =0; i<$controller.autoMeals.length;i++){
                expect($controller.autoMeals[i].meal_type_id).toInclude(i+1);
                expect($controller.autoMeals[i].whyGenerated).toBe('meal');
            }
        });

        it("should autofill when a value greater than one is entered for all meals", function(){
            for (var i =0; i<sharedData.mealTypes.length;i++){
                sharedData.mealTypes[i].noMeals = "2";
            }
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            for (var i =0; i<$controller.autoMeals.length;i++){
                expect($controller.autoMeals[i].whyGenerated).toBe('meal');
            }
            
            expect($controller.autoMeals[0].meal_type_id).toInclude('1');
            expect($controller.autoMeals[1].meal_type_id).toInclude('1');
            expect($controller.autoMeals[2].meal_type_id).toInclude('2');
            expect($controller.autoMeals[3].meal_type_id).toInclude('2');
            expect($controller.autoMeals[4].meal_type_id).toInclude('3');
            expect($controller.autoMeals[5].meal_type_id).toInclude('3');
        });

        it("should throw an error when more meals are requested than can be found", function(){
            sharedData.mealTypes[0].noMeals = "2222222";
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            expect($controller.autoFill).toThrow('No more meals to select from for meal: Dinner ('+sharedData.mealTypes[0].noMeals+')');
        });

        it("should autofill when a value is entered for meats and meals", function(){
            sharedData.meatTypes[0].noMeats = 1;
            sharedData.mealTypes[0].noMeals = 1;
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            expect($controller.autoMeals[0].meat_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[1].meal_type_id).toInclude('1');
            expect($controller.autoMeals[1].whyGenerated).toBe('meal');
        });

        it("should autofill when a value greater than one is entered for meat and meals", function(){
            sharedData.meatTypes[0].noMeats = 2;
            sharedData.mealTypes[0].noMeals = 2;
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            expect($controller.autoMeals[0].meat_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[1].meat_type_id).toInclude('1');
            expect($controller.autoMeals[1].whyGenerated).toBe('meat');
            expect($controller.autoMeals[2].meal_type_id).toInclude('1');
            expect($controller.autoMeals[2].whyGenerated).toBe('meal');
            expect($controller.autoMeals[3].meal_type_id).toInclude('1');
            expect($controller.autoMeals[3].whyGenerated).toBe('meal');
        });
        
        it("should autofill when a value is entered for every meat and meal", function(){
            for (var i =0; i<sharedData.meatTypes.length;i++){
                sharedData.meatTypes[i].noMeats = "1";
            }
            for (var i =0; i<sharedData.mealTypes.length;i++){
                sharedData.mealTypes[i].noMeals = "1";
            }
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            for (var i =0; i<$controller.autoMeals.length;i++){
                if (i<sharedData.meatTypes.length){
                    expect($controller.autoMeals[i].meat_type_id).toInclude(i+1);
                    expect($controller.autoMeals[i].whyGenerated).toBe('meat');
                }
                else {
                    var mealId = i-sharedData.meatTypes.length+1;
                    expect($controller.autoMeals[i].meal_type_id).toInclude(mealId);
                    expect($controller.autoMeals[i].whyGenerated).toBe('meal');
                }
            }
        });
        
        it("should autofill when a value greater than one is entered for all Meats", function(){
            for (var i =0; i<sharedData.meatTypes.length;i++){
                sharedData.meatTypes[i].noMeats = "2";
            }
            for (var i =0; i<sharedData.mealTypes.length;i++){
                sharedData.mealTypes[i].noMeals = "2";
            }
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            for (var i =0; i<$controller.autoMeals.length;i++){
                if (i<(sharedData.meatTypes.length*2)) {
                    expect($controller.autoMeals[i].whyGenerated).toBe('meat');
                    var alteredIndex = Math.floor((i+2)/2);
                    expect($controller.autoMeals[i].meat_type_id).toInclude(alteredIndex);
                
                }
                else {
                    var mealId = i-sharedData.meatTypes.length+1;
                    expect($controller.autoMeals[i].whyGenerated).toBe('meal');
                    var alteredIndex = Math.floor((i-(sharedData.meatTypes.length*2)+2)/2);
                    expect($controller.autoMeals[i].meal_type_id).toInclude(alteredIndex);
                }
            }
        });
    });

    describe('Modal Delete', function(){

        it("should refill when a bacon meal deleted", function(){
            sharedData.meatTypes[0].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a chicken meal deleted", function(){
            sharedData.meatTypes[1].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('2');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('2');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a beef meal deleted", function(){
            sharedData.meatTypes[2].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('3');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('3');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a chorizo meal deleted", function(){
            sharedData.meatTypes[3].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('4');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('4');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Pork meal deleted", function(){
            sharedData.meatTypes[4].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('5');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('5');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Veal meal deleted", function(){
            sharedData.meatTypes[5].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('6');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('6');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Fish meal deleted", function(){
            sharedData.meatTypes[6].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('7');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('7');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Lamb meal deleted", function(){
            sharedData.meatTypes[7].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('8');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('8');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Pancetta meal deleted", function(){
            sharedData.meatTypes[8].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('9');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('9');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Sausage meal deleted", function(){
            sharedData.meatTypes[9].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('10');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('10');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Turkey meal deleted", function(){
            sharedData.meatTypes[10].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('11');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('11');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Vegetarian meal deleted", function(){
            sharedData.meatTypes[11].noMeats = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meat_type_id).toInclude('12');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meat_type_id).toInclude('12');
            expect($controller.autoMeals[0].whyGenerated).toBe('meat');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Dinner is deleted", function(){
            sharedData.mealTypes[0].noMeals = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meal_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meal_type_id).toInclude('1');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a Lunch Soup is deleted", function(){
            sharedData.mealTypes[1].noMeals = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meal_type_id).toInclude('2');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meal_type_id).toInclude('2');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should refill when a School snack is deleted", function(){
            sharedData.mealTypes[2].noMeals = 1;
            var initialMealId = "";
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            initialMealId = $controller.autoMeals[0].id;
            expect($controller.autoMeals[0].meal_type_id).toInclude('3');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
            $scope.parentmethod($controller.autoMeals[0]);
            expect($controller.autoMeals[0].meal_type_id).toInclude('3');
            expect($controller.autoMeals[0].whyGenerated).toBe('meal');
            expect($controller.autoMeals[0].id).not.toBe(initialMealId);
        });

        it("should throw an error when a meal is deleted and there are no more of that type to choose from", function(){
            sharedData.allMeals = [{"id":2,"name":"Bacon Cheeseburger Cauliflower Casserole","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon","meat_type_id":"1"}];

            sharedData.meatTypes[0].noMeats = 1;
            var errorMessage = 'No more meals to select from for meat: Bacon ('+sharedData.meatTypes[0].noMeats+')';
            
            $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
            $controller.autoFill();
            //expect($scope.parentmethod($controller.autoMeals[0])).toThrow();
            try{
            $scope.parentmethod($controller.autoMeals[0]);
            }
            catch(err)
            {
                expect(err.toString()).toEqual(errorMessage);
            }
        });
    });  

    it("should save plan when save button is pressed", function(){
        spyOn(dataService, 'addToPlan').and.callFake(function(){
            var deferred = $q.defer();
            deferred.resolve('Plan added: ' );
            return deferred.promise;    
        });
        $controller = $controller('AutoFillController', {$scope: $scope,$rootScope:$rootScope,$q:$q, typeService:typeService, $log:$log, sharedData:sharedData, dataService:dataService});
        $controller.autoMeals = [];
        $controller.savePlan();
        $rootScope.$apply();
        expect(dataService.addToPlan).toHaveBeenCalled();
    });

});

  