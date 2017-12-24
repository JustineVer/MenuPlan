(function() {
  'use strict'

  angular.module('app')
    .controller('ModalInstanceController', ModalInstanceController);

  ModalInstanceController.$inject = ['$location','$scope', '$rootScope','$uibModalInstance', 'dataService','detailItem', 'sharedData'];


  function ModalInstanceController($location, $scope, $rootScope, $uibModalInstance, dataService, detailItem, sharedData) {
    var modalController = this;
    modalController.detailItem = detailItem;

    modalController.ok = function () {
      console.log(modalController.detailItem.name);
      $uibModalInstance.close();
    };

    modalController.edit = function () {
      console.log(modalController.detailItem);
      $uibModalInstance.close();
      var editPath = '/EditMeal/'+modalController.detailItem.id;
      $location.path(editPath);
    };

    modalController.remove = function () {
      //weird work around for modal caching incorrectly
      if (modalController.detailItem.eaten_id)
      {
        deletePlan();
      }
      else
      {
        $rootScope.$emit("RemoveAutoFilledMeal", modalController.detailItem);
        $uibModalInstance.close();
      }
    }

    modalController.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    modalController.removeMeal = function () {
      deleteMeal();
    };

    modalController.removePlan = function () {
      deletePlan();
    };
    function deletePlan() {
      dataService.deletePlan(modalController.detailItem.eaten_id)
      .then(getDeletePlanSuccess, null, getDeletePlanNotification)
      .catch(errorCallback);

      function getDeletePlanSuccess() {
          $rootScope.$emit("refreshCurrentPlan", modalController.detailItem);
          $uibModalInstance.close();
      }

      function getDeletePlanNotification(notification) {
          //console.log('Promise Notification: ' + notification);
      }

      function errorCallback(errorMsg) {
          console.log('Error Message: ' + errorMsg);
      }
    }

    function deleteMeal() {
      dataService.deleteMeal(modalController.detailItem.id)
      .then(getDeleteMealSuccess, null, getDeleteMealNotification)
      .catch(errorCallback);

      function getDeleteMealSuccess() {
          $uibModalInstance.close();
          $rootScope.$emit("refreshCurrentMeals");
          
      }

      function getDeleteMealNotification(notification) {
          //console.log('Promise Notification: ' + notification);
      }
      function errorCallback(errorMsg) {
        console.log('Error Message: ' + errorMsg);
      }
    }
  };
}());