'use strict';

(function(angular){
  angular.module('cpa.bePart')
        .config(bePartRoutes);

  bePartRoutes.$inject = ['$stateProvider'];
  function bePartRoutes($stateProvider){
    $stateProvider
    .state('cpa.bePart',{
      url: 'seParte/',
      abstract: true

    })
    .state('cpa.bePart.obpre',{
      url: 'obPre',
      views:{
        '@':{
          templateUrl: 'app/components/bePart/views/obpre.html',
          controller: 'BePartController',
          controllerAs: 'vm'
        }
      }
    })
    .state('cpa.bePart.obX',{
      url: 'obX',
      views:{
        '@':{
          templateUrl: 'app/components/bePart/views/obX.html',
          controller: 'BePartController',
          controllerAs: 'vm'
        }
      }
    })
    .state('cpa.bePart.join',{
      url: 'unite',
      views:{
        '@':{
          templateUrl: 'app/components/bePart/views/joinOBPre.html',
          controller: 'BePartJoinController',
          controllerAs: 'vm'
        }
      }
    })
  }
})(angular);
