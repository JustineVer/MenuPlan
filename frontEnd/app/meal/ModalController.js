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
        controller: 'ModalInstanceController',
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