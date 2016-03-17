(function() {
  'use strict';

  angular
    .module('cpa')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;
      vm.obPre = {
        name: 'OB Pre',
        fullName: 'Olimpiadas Biblicas preadolescentes',
        logoImg: '/assets/images/logoOB-small.png',
        items: [
          {name:'Vision',link: ''},
          {name:'Como Participar?',link: ''},
          {name:'Zonas Habilitadas',link: ''},
          {name:'Trabajo Internacional',link: ''},
          {name:'Suma tu zona',link: ''},
          {name:'Descargas',link: ''}
        ]
      }
      vm.obExt = {
        name: 'OB Extemas',
        fullName: 'Olimpiadas Biblicas Extremas',
        logoImg: '/assets/images/logoObExt-small.jpg',
        items: [
          {name:'Vision',link: ''},
          {name:'Como Participar?',link: ''},
          {name:'Descargas',link: ''}
        ]
      }
      vm.lgf = {name: "La Gran final", link:''}
      vm.cart = {name: "Carrito", link:''}
      vm.cpa = {name: "Vision de CPA", link:''}
      vm.ma = {name: "Ministerios asociados", link:''}
      vm.news = {name: "Novedades", link:''}
    }
  }

})();
