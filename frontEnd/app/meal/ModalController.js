(function() {
  
  angular.module('app')
      .controller('ModalController', ModalController);

  ModalController.$inject = ['$uibModal', '$log', '$document', 'sharedData'];

  function ModalController($uibModal, $log, $document, sharedData) {
    var modalController = this;

    modalController.animationsEnabled = true;

    modalController.open = function (detailItem,size) {
      var modalInstance = $uibModal.open({
        animation: modalController.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modalController',
        size: size,
        resolve: {
          detailItem: function () {
            return detailItem;
          }
      }
      });
      modalController.name = detailItem.name;
    };

    modalController.toggleAnimation = function () {
      modalController.animationsEnabled = !modalController.animationsEnabled;
    };
  };

  // Please note that $uibModalInstance represents a modal window (instance) dependency.
  // It is not the same as the $uibModal service used above.

  angular.module('app')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  ModalInstanceCtrl.$inject = ['$location','$scope', '$rootScope','$uibModalInstance', 'dataService','detailItem', 'sharedData'];


  function ModalInstanceCtrl($location, $scope, $rootScope, $uibModalInstance, dataService, detailItem, sharedData) {
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
      if (!modalController.detailItem.eaten_id)
      {
        $rootScope.$emit("RemoveAutoFilledMeal", modalController.detailItem);
        $uibModalInstance.close();
      }
      else
      {
        deletePlan();
      }
    }

    modalController.cancel = function () {
      $uibModalInstance.dismiss('cancel');
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
  };

  // Please note that the close and dismiss bindings are from $uibModalInstance.

  angular.module('app').component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: function () {
      var modalController = this;

      modalController.$onInit = function () {
        modalController.detailItem = modalController.resolve.detailItem;
      };

      modalController.ok = function () {
        modalController.close();
      };

      modalController.cancel = function () {
        modalController.dismiss({$value: 'cancel'});
      };
    }
  });


}());