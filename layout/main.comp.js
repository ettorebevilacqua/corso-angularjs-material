angular.module('app').component('appMain', {
  templateUrl: 'layout/main.tpl.html',
  // bindings: { 'dataApp': '=',},

  controller: function($scope, $state, $mdSidenav) {
    var $ctrl = this;
    $ctrl.title = $state.current.dataTitle.title;
    console.log('comp main  = ', '');
    $ctrl.$onInit = function() {};
    $scope.$on('myEvent', function(evt, data) {});
  },
});
