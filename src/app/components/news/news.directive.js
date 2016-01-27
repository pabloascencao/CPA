(function() {
  'use strict';

  angular
    .module('cpa')
    .directive('news', news);

  /** @ngInject */
  function news() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/news/news.html',
      scope: {
          creationDate: '='
      },
      controller: NewsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NewsController() {
      var vm = this;
      vm.news = getNews();

      function getNews() {
        return [
          {
            title: 'Reunion de organizacion',
            image: 'assets/images/LGF_hero.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
            link: '#'
          },
          {
            title: 'Reunion de organizacion',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
            link: '#'
          },
          {
            title: 'Reunion de organizacion',
            image: 'assets/images/ob_team.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
            link: '#'
          }
        ]

      }

      // "vm.creation" is avaible by directive option "bindToController: true"
    }
  }

})();
