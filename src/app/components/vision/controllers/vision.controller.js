(function() {
  'use strict';

  angular
    .module('cpa.vision')
    .controller('VisionController', VisionController);

    VisionController.$inject = ['content','$stateParams','firebaseURL', '$firebaseObject','facebookToken'];
    function VisionController(content, $stateParams, firebaseURL, $firebaseObject,facebookToken) {
      var vm = this,
          fb;

          vm.images= [];
          vm.proyects = content;
          vm.extraMenu = false;
          vm.extraTemplate = '';
          vm.images = false;
      if($stateParams.proy === 'cpa'){
        fb = new Firebase(firebaseURL + '/organization');
        vm.organization = $firebaseObject(fb);
      }
      /////////////////////////////
      console.log(facebookToken);
      FB.api(
        "/1010267105757929/photos?type=normal&fields=created_time,height,id,images,picture,name,updated_time,width&"+facebookToken,
        function (response) {
          console.log(response);
          if (response && !response.error) {
            /* handle the result */
            vm.images = response.data;
          }
        }
      );
    }

})();
