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

}());