(function() {
  'use strict';

  angular
    .module('cpa.vision')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cpa.vision', {
        abstract: true,
        url: 'vision'
      })
      .state('cpa.vision.obPre',{
        url: '/obpre',
        views:{
          '@':{
            templateUrl: '/app/components/vision/views/description.html',
            controller: 'VisionController',
            controllerAs: 'vm'

          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
