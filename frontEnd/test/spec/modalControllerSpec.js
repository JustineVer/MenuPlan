'use strict'
describe('Modal Controller', function(){
    var $this;
    var $controller, $scope, $rootScope, $uibModal, $log, $document, sharedData;    
    var mealToDisplay = {"id":2,"name":"Bacon Cheeseburger Cauliflower Casserole","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon","meat_type_id":"1"};

    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_,_$rootScope_,_$uibModal_, _$document_, _$log_, _sharedData_){
        $rootScope = _$rootScope_;
        $log = _$log_;
        $uibModal = _$uibModal_;
        $document = _$document_;
        sharedData = _sharedData_;
        $controller = _$controller_;
    }));
    describe('Initialise controller', function(){
        
        it("should be created successfully", function() {
            $controller = $controller('ModalController', {$uibModal:$uibModal, $log:$log, $document:$document, sharedData:sharedData});
            expect($controller).toBeDefined();
        });
    });

    describe('modal functionality',function(){
        it("should populate modal window", function(){
            $controller = $controller('ModalController', {$uibModal:$uibModal, $log:$log, $document:$document, sharedData:sharedData});
            $controller.open(mealToDisplay);
            expect($controller.name).toBe(mealToDisplay.name);
        });

        it("should turn animations on and off modal window", function(){
            $controller = $controller('ModalController', {$uibModal:$uibModal, $log:$log, $document:$document, sharedData:sharedData});
            expect($controller.animationsEnabled).toBeTruthy();
            $controller.toggleAnimation();
            expect($controller.animationsEnabled).toBeFalsy();
            $controller.toggleAnimation();
            expect($controller.animationsEnabled).toBeTruthy();
        });

    });

});

  