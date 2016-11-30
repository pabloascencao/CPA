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
        controllerAs: 'main',
        resolve: {
          facebookToken: facebookResolve
        }
      });

    $urlRouterProvider.otherwise('/');
    facebookResolve.$inject=['$http', 'FBToken'];
    function facebookResolve($http, FBToken){
      return $http({
        method: 'GET',
        url: 'https://graph.facebook.com/oauth/access_token?client_id=710907749064785&client_secret=16e87db485e50217e8b893bfac898a8e&grant_type=client_credentials'
      }).then(function(res){
        FBToken = res.data;
        return res.data;
      })
    }
  }


})();
