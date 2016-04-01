
(function(angular){
'use strict'
	angular
		.module('cpa.ministerios')
		.config(routerConfig);

	routerConfig.$inject = ['$stateProvider'];
	function routerConfig($stateProvider){
		$stateProvider
			.state('cpa.ministerios', {
		       url: 'ministerios',
		       views:{
		       		'@':{
				       templateUrl: '/app/components/ministerios/views/ministerios.html',
				       controller: 'MinisteriosController',
				       controllerAs: 'vm'
		       		}
		       }
		    });
	}
}) (angular);