(function() {
  'use strict';

  angular
    .module('cpa')
    .directive('navbar', navbar);

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

    NavbarController.$inject = ['$firebaseObject','firebaseURL'];
    function NavbarController($firebaseObject, firebaseURL) {
      var vm = this,
          fb = new Firebase(firebaseURL + '/navbar');
      vm.navbarContent = $firebaseObject(fb);
      vm.addMessage = addMessage;

      console.log(vm.navbarContent);
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
      /////////////////////////////7
       function addMessage() {
        vm.navbarContent.$add({
            obPre: {
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
            },
            obExt:{
              name: 'OB Extemas',
              fullName: 'Olimpiadas Biblicas Extremas',
              logoImg: '/assets/images/logoObExt-small.jpg',
              items: [
                {name:'Vision',link: ''},
                {name:'Como Participar?',link: ''},
                {name:'Descargas',link: ''}
              ]
            },
            lgf: {name: "La Gran final", link:''},
            cart: {name: "Carrito", link:''},
            cpa: {name: "Vision de CPA", link:''},
            ma: {name: "Ministerios asociados", link:''},
            news: {name: "Novedades", link:''}
          });
        };
    }
  }

})();
