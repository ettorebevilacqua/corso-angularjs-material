angular.module('app').component('appFooter', {
  templateUrl: 'layout/footer.tpl.html',

  controller: function( $scope, $mdSidenav) {
      var $ctrl = this;

      $ctrl.$onInit = function() {};
      $scope.$on('myEvent', function(evt, data) {});
    },
});