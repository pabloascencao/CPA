(function() {
  'use strict';

  angular
    .module('cpa')
    .run(runBlock);

  runBlock.$inject = ['$log'];
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
