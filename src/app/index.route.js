(function() {
  'use strict';

  angular
    .module('cpa')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider']
  function routeConfig($stateProvider) {
    $stateProvider
      .state('cpa', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
  }

})();
