(function() {
  'use strict';

  angular
    .module('cpa')
    .config(config);

  config.$inject = ['$logProvider', '$mdThemingProvider'];
  function config($logProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
          .primaryPalette('red');

    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
