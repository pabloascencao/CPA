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

    /** @ngInject */
    function cpaCarouselCtrl($scope) {
      var vm = this;
      vm.slides = getSlides();
      vm.interval = 3000;
      vm.noWrapSlides = false;
      function getSlides(){
        if ($scope.proy === 'cpaMain'){
          return {img:'assets/images/ob_team.jpg',
                  logoImg:'assets/images/logoOB-small.png',
                  title:'Olimpiadas Biblicas',
                  text:'Este es un evento que se realiza todos los años en 8 diferentes zonas en la cual la idea es que los preadolescentes aprendan de la palaba de Dios'
                };
        }else {
          return {
            img:'',
            logoImg:'assets/images/logoObExt-big.png',
            title:'La Gran Final',
            text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          };
        }
      }
      /**/
      // "vm.creation" is avaible by directive option "bindToController: true"
    }
  }

})();
