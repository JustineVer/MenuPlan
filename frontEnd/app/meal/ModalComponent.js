(function() {
  'use strict'

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