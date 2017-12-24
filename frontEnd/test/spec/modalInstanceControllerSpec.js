'use strict'
describe('Modal Instance Controller', function(){
    var $this;
    var $controller, $scope, $rootScope, $location, $scope, $rootScope,  modalInstance, $q, dataService, detailItem, sharedData;
    var mealToDisplay = {"id":2,"name":"Bacon Cheeseburger Cauliflower Casserole","path":null,"image_path":"../../images/bacon.jpg","file_type_desc":"txt","file_type":5,"meal_type":"Dinner","meal_type_id":"1","meat_type":"Bacon","meat_type_id":"1"};

    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_,_$rootScope_, _$location_, _$q_,_dataService_, _sharedData_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $location = _$location_;
        modalInstance = {                    // Create a mock object using spies
            close: jasmine.createSpy('modalInstance.close'),
            dismiss: jasmine.createSpy('modalInstance.dismiss'),
            result: {
              then: jasmine.createSpy('modalInstance.result.then')
            }
        };
        $q = _$q_;
        dataService = _dataService_;
        detailItem = mealToDisplay;
        sharedData = _sharedData_;
        $controller = _$controller_;
    }));
    describe('Initialise controller', function(){
        
        it("should be created successfully", function() {
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            expect($controller).toBeDefined();
            expect($controller.detailItem).toBe(mealToDisplay);
        });
    });

    describe('Buttons work correctly', function(){
        it('OK button should close modal', function(){
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.ok();
            expect(modalInstance.close).toHaveBeenCalled();
        });

        it('Edit button should close modal and display Edit Screen', function(){
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.edit();
            expect(modalInstance.close).toHaveBeenCalled();
            expect($location.path()).toBe('/EditMeal/'+$controller.detailItem.id);
        });

        it('Remove button should close modal should delete plan when called from current plan section screen', function(){
            spyOn(dataService, 'deletePlan').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve('');
                return deferred.promise;    
            });
            detailItem.eaten_id = 176;
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.remove();
            $rootScope.$apply();
            expect(dataService.deletePlan).toHaveBeenCalled();
            expect(modalInstance.close).toHaveBeenCalled();
            delete detailItem.eaten_id;
        });

        xit('Remove button should cope with error when delete plan fails in the database', function(){
            spyOn(dataService, 'deletePlan').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            detailItem.eaten_id = 176;
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.remove();
            $rootScope.$apply();
            expect(dataService.deletePlan).toHaveBeenCalled();
            expect(modalInstance.close).toHaveBeenCalled();
            delete detailItem.eaten_id;
            
        });

        it('Remove button should close modal should delete proposed planned meal when called from autofill screen', function(){
            spyOn($rootScope, '$emit');
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.remove();
            $rootScope.$apply();
            expect($rootScope.$emit).toHaveBeenCalledWith("RemoveAutoFilledMeal", $controller.detailItem);
            expect(modalInstance.close).toHaveBeenCalled();
        });

        xit('Remove button should cope with error when delete meal fails in the database', function(){
            spyOn(dataService, 'deletePlan').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            detailItem.eaten_id = 176;
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.remove();
            $rootScope.$apply();
            expect(modalInstance.close).toHaveBeenCalled();
        });

        it('Delete button should close modal should delete meal when called from meal screen', function(){
            spyOn(dataService, 'deleteMeal').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve('');
                return deferred.promise;    
            });
            //detailItem.id = 1;
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.removeMeal();
            $rootScope.$apply();
            expect(dataService.deleteMeal).toHaveBeenCalled();
            expect(modalInstance.close).toHaveBeenCalled();
            //delete detailItem.eaten_id;
        });

        xit('Remove button should cope with error when delete meal fails in the database', function(){
            spyOn(dataService, 'deleteMeal').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            //detailItem.id = 1;
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.remove();
            $rootScope.$apply();
            expect(dataService.deleteMeal).toHaveBeenCalled();
            expect(modalInstance.close).toHaveBeenCalled();
            //delete detailItem.eaten_id;
            
        });

        it('Cancel button should close modal', function(){
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.cancel();
            expect(modalInstance.dismiss).toHaveBeenCalled();
            //expect($location.path()).toBe('/EditMeal/'+$controller.detailItem.id);
        });

        it('Remove Plan button should close modal should delete plan', function(){
            spyOn(dataService, 'deletePlan').and.callFake(function(){
                var deferred = $q.defer();
                deferred.resolve('');
                return deferred.promise;    
            });
            detailItem.eaten_id = 176;
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.removePlan();
            $rootScope.$apply();
            expect(dataService.deletePlan).toHaveBeenCalled();
            expect(modalInstance.close).toHaveBeenCalled();
            delete detailItem.eaten_id;
        });

        xit('Remove Plan button should cope with error when delete plan fails in the database', function(){
            spyOn(dataService, 'deletePlan').and.callFake(function(){
                var deferred = $q.defer();
                deferred.reject();
                return deferred.promise;    
            });
            detailItem.eaten_id = 176;
            $controller = $controller('ModalInstanceController', {$location:$location, $scope:$scope, $rootScope:$rootScope, $uibModalInstance:modalInstance, dataService:dataService, detailItem:detailItem, sharedData:sharedData});
            $controller.removePlan();
            $rootScope.$apply();
            expect(dataService.deletePlan).toHaveBeenCalled();
            expect(modalInstance.close).toHaveBeenCalled();
            delete detailItem.eaten_id;
        });
    });
});

  