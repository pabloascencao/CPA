(function() {
  'use strict';

  angular
    .module('cpa')
    .run(runBlock);

  runBlock.$inject = ['$log','$http','FBToken'];
  function runBlock($log,$http,FBToken) {

    $log.debug('runBlock end');
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '710907749064785',
        xfbml      : true,
        cookie     : true,
        version    : 'v2.8'
      });
    };



  }

})();
