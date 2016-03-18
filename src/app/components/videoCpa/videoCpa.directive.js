(function() {
  'use strict';

  angular
    .module('cpa.vision')
    .directive('videoCpa', videoCpa);

  videoCpa.$inject = ['$window'];
  function videoCpa($window) {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/videoCpa/videoCpa.html',
      scope: {
          creationDate: '='
      },
      link: linkFunc,
      controller: VideoCpaController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function linkFunc(scope, element, attrs) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      $window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player(element.children()[0], {
          width: '100%',
          videoId: attrs.videoId
        });
      };
    }
    /*(scope,something, attr){
      scope.vm.videoLink = attr.datalink;
    }*/
    VideoCpaController.$inject = ['$scope'];
    function VideoCpaController($scope) {
      var vm = this;
      console.log(vm);
      /////////////////////////////7
    }
  }

})();
