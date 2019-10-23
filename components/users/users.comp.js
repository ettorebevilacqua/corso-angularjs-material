
angular.module('app').component("users",{
      	templateUrl: 'components/users/users.tpl.html',
      	 bindings: { 'users': '<', 'count':'<'},
      	controller : 'usersCtrl',  
});



angular.module('app').controller('usersCtrl', function($scope) {
					// UserService.list();
					const $ctrl = this; 
						console.log('init comp users', $ctrl.count);
					$ctrl.$onInit = function() {
						console.log('init comp users', $ctrl.users);
					}
		console.log('sono dentro a comp users', $ctrl.users);

	
	    })