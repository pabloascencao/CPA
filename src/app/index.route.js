(function() {
  'use strict';

  angular
    .module('cpa')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cpa', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
