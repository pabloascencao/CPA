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
          {name:'Vision',link: 'cpa.vision.obPre'},
          {name:'Como Participar?',link: 'cpa'},
          {name:'Zonas Habilitadas',link: 'cpa'},
          {name:'Trabajo Internacional',link: 'cpa'},
          {name:'Suma tu zona',link: 'cpa'},
          {name:'Descargas',link: 'cpa'}
        ]
      }
      vm.obExt = {
        name: 'OB Extemas',
        fullName: 'Olimpiadas Biblicas Extremas',
        logoImg: '/assets/images/logoObExt-small.jpg',
        items: [
          {name:'Vision',link: 'cpa'},
          {name:'Como Participar?',link: 'cpa'},
          {name:'Descargas',link: 'cpa'}
        ]
      }
      vm.lgf = {name: "La Gran final", link:'cpa'}
      vm.cart = {name: "Carrito", link:'cpa'}
      vm.cpa = {name: "Vision de CPA", link:'cpa'}
      vm.ma = {name: "Ministerios asociados", link:'cpa'}
      vm.news = {name: "Novedades", link:'cpa'}
      /////////////////////////////7
       function addMessage() {
        vm.navbarContent.$add({
            obPre: {
              name: 'OB Pre',
              fullName: 'Olimpiadas Biblicas preadolescentes',
              logoImg: '/assets/images/logoOB-small.png',
              items: [
                {name:'Vision',link: 'cpa'},
                {name:'Como Participar?',link: 'cpa'},
                {name:'Zonas Habilitadas',link: 'cpa'},
                {name:'Trabajo Internacional',link: 'cpa'},
                {name:'Suma tu zona',link: 'cpa'},
                {name:'Descargas',link: 'cpa'}
              ]
            },
            obExt:{
              name: 'OB Extemas',
              fullName: 'Olimpiadas Biblicas Extremas',
              logoImg: '/assets/images/logoObExt-small.jpg',
              items: [
                {name:'Vision',link: 'cpa'},
                {name:'Como Participar?',link: 'cpa'},
                {name:'Descargas',link: 'cpa'}
              ]
            },
            lgf: {name: "La Gran final", link:'cpa'},
            cart: {name: "Carrito", link:'cpa'},
            cpa: {name: "Vision de CPA", link:'cpa'},
            ma: {name: "Ministerios asociados", link:'cpa'},
            news: {name: "Novedades", link:'cpa'}
          });
        };
    }
  }

})();
