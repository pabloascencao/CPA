(function() {
  'use strict';

  angular
    .module('cpa')
    .directive('cpaCarousel', cpaCarousel);

  /** @ngInject */
  function cpaCarousel() {
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'app/components/carousel/carousel.html',
      controller: cpaCarouselCtrl,
      controllerAs: 'vm',
      scope:{
        proy: '@section'
      }
    };

    return directive;

    cpaCarouselCtrl.$inject = ['$scope', '$firebaseObject','firebaseURL']
    function cpaCarouselCtrl($scope,$firebaseObject, firebaseURL) {
      var vm = this;
      var fb = new Firebase(firebaseURL + '/banners/'+$scope.proy);
      vm.interval = 3000;
      vm.noWrapSlides = false;
      vm.slides = $firebaseObject(fb);

      function getSlides(){
      
      }
      /**/
      // "vm.creation" is avaible by directive option "bindToController: true"
    }
  }

})();
