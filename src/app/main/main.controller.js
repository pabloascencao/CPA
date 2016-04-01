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
    vm.ma = getMa();

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
    function getMa(){
      return [{
        logo:'http://www.sba.org.ar/SBAweb/images/subfolders/Logo%20recuadro.jpg',
        title: 'Sociedades Biblicas Argentina',
        description: 'hace ya varios años que Sociedades Biblicas se asocio con CPA para que la palabra de Dios sea esparcida.',
        url: 'http://www.sba.org.ar/'
      },
      {
        logo:'https://scontent-grt2-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/1910614_797104803748475_7569412545649421334_n.png?oh=60048b94432507aacec862d55af2504d&oe=57906231',
        title: 'Iglesia Santuario de Fe',
        description: 'Desde el comienzo el Ministerio de la Iglesia Santuario de Fe ha sido parte de CPA con un Apoyo incondicional.',
        url: 'http://www.iglesiasantuariodefe.com/'
      },
      {
        logo:'http://www.lapensedenacional.org/images/top_03.jpg',
        title: 'LAPEN',
        description: 'No podriamos ser quien somos si LAPEN no hubiera estado desde nuestros comienzos.',
        url: 'http://www.google.com/'
      }]; 
    }
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

  }
})();
