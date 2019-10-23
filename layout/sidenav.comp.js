angular.module('app').component('appSideNav', {
  templateUrl: 'layout/sidenav.tpl.html',

  controller: function( $scope, $mdSidenav) {
      var $ctrl = this;

      $ctrl.$onInit = function() {};
      $scope.$on('myEvent', function(evt, data) {});
    },
});