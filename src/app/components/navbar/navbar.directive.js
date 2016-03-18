(function() {
  'use strict';

  angular
    .module('cpa')
    .directive('navbar', navbar);

  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    NavbarController.$inject = ['$firebaseObject','firebaseURL'];
    function NavbarController($firebaseObject, firebaseURL) {
      var vm = this,
          fb = new Firebase(firebaseURL + '/navbar');
      vm.navbarContent = $firebaseObject(fb);

      
    }
  }

})();
