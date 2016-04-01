(function() {
  'use strict';

  angular
    .module('cpa.vision')
    .controller('VisionController', VisionController);

    VisionController.$inject = ['content','$http','$stateParams'];
    function VisionController(content, $http, $stateParams) {
      var vm = this;

          vm.proyects = content;
          vm.extraMenu = false;
          vm.extraTemplate = '';

      /////////////////////////////
      /*$http.get(vm.extraTemplate).then(function(data){
        console.log(data);
      })*/
    }

})();
