
(function(angular){
'use strict'
	angular
		.module('cpa.ministerios')
		.controller('MinisteriosController',MinisteriosController);

	MinisteriosController.$inject = ['$firebaseObject','firebaseURL'];
	function MinisteriosController($firebaseObject,firebaseURL){
		var vm = this,
			fb = new Firebase(firebaseURL + '/ministerios');
			vm.ma = $firebaseObject(fb);
	}
})(angular);
