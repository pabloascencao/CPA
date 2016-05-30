(function() {
  'use strict';

  angular
    .module('cpa.vision')
    .config(routerConfig);

  routerConfig.$inject =['$stateProvider', '$urlRouterProvider'];
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cpa.vision', {
        abstract: true,
        url: 'vision'
      })
      .state('cpa.vision.proyects',{
        url: '/:proy',
        views:{
          '@':{
            templateUrl: 'app/components/vision/views/description.html',
            controller: 'VisionController',
            controllerAs: 'vm',
            resolve:{
              content: contentResolve
            }
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }
  contentResolve.$inject = ['$firebaseObject','firebaseURL','$stateParams'];
  function contentResolve($firebaseObject, firebaseURL, $stateParams){
    var fb = new Firebase(firebaseURL + '/proyects/'+ $stateParams.proy);
    return $firebaseObject(fb);
  }
})();
