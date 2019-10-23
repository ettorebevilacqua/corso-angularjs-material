angular.module('app').component('appHead', {
  templateUrl: 'layout/header.tpl.html',
	 bindings: { 'title': '<',},
  controller: function($scope,$state, $mdSidenav) {
    var $ctrl = this;
 
  
    $ctrl.toggleSidenav = menuId => $mdSidenav(menuId).toggle();
    $ctrl.$onInit = function() {
        console.log('comp head bind title',$ctrl.title); 
    };
    $scope.$on('myEvent', function(evt, data) {});
  },
});
