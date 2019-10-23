angular.module('app').component('userDetail', {
	templateUrl: 'components/users/user-detail.tpl.html',

	controller: 'userDetailCtrl',
});

angular
	.module('app')
	.controller('userDetailCtrl', function($scope, $stateParams, UserService) {
		const $ctrl = this;
		$ctrl.users = UserService.getUsers();

		$ctrl.$onInit = function() {
			console.log('init xxx comp userDetailCtrl', 	$ctrl.userId);
				console.log('user detail = ',
		$ctrl.user = UserService.get($ctrl.userId) );
			
		};
		$ctrl.userId = $stateParams.id;

		console.log('user detail', $scope.userId);

		$ctrl.onUserUpdated = () => UserService.salva($ctrl.users, $ctrl.userId);
	});
