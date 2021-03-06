(function() {
  'use strict';

  angular
    .module('cpa')
    .directive('footer', footer);

  /** @ngInject */
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

    /** @ngInject */
    function FooterController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
    }
  }

})();
