(function() {
  'use strict';

  angular
    .module('cpa')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.newses = getNews();
    vm.classAnimation = '';
    vm.creationDate = 1453858300259;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
    function getNews(){
      return [{
        logo:'logoObExt-big.png',
        title: 'Organizando las Extremas',
        description: 'El jueves pasado nos encontramos el equipo de trabajo para juntos ultimar los detalles de las proximas Olimpiadas extremas',
        url: 'http://www.google.com/'
      },
      {
        logo:'logoOB-small.png',
        title: 'Organizando las Nacionales',
        description: 'El jueves pasado nos encontramos el equipo de trabajo para juntos ultimar los detalles de las proximas Olimpiadas extremas',
        url: 'http://www.google.com/'
      },
      {
        logo:'logoOB-small.png',
        title: 'Organizando La Gran Final',
        description: 'El jueves pasado nos encontramos el equipo de trabajo para juntos ultimar los detalles de las proximas Olimpiadas extremas',
        url: 'http://www.google.com/'
      }];
    }
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

  }
})();
