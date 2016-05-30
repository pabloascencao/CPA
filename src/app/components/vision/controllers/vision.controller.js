(function() {
  'use strict';

  angular
    .module('cpa.vision')
    .controller('VisionController', VisionController);

    VisionController.$inject = ['content','$http','$stateParams','firebaseURL', '$firebaseObject'];
    function VisionController(content, $http, $stateParams, firebaseURL, $firebaseObject) {
      var vm = this,
          fb;

          vm.proyects = content;
          vm.extraMenu = false;
          vm.extraTemplate = '';
      if($stateParams.proy === 'cpa'){
        fb = new Firebase(firebaseURL + '/organization');
        vm.organization = $firebaseObject(fb);
      }
      /////////////////////////////
    }

})();
