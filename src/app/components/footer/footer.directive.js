(function() {
  'use strict';

  angular
    .module('cpa')
    .directive('footer', footer);

  footer.$inject = [];
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
  FooterController.$inject = ['$firebaseObject','firebaseURL']
  function FooterController($firebaseObject, firebaseURL) {
    var vm = this;
    var social = new Firebase(firebaseURL + '/social');
    vm.socialLinks = $firebaseObject(social);
  }

})();
