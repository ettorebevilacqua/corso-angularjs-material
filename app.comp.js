app.component('app', {
  template: '<ui-view></ui-view>',

  controller: function($scope, $transitions, $mdSidenav) {
    var $ctrl = this;

    $transitions.onSuccess({}, function(transition) {
      
      console.log('app comp transition = ', transition.to().title);
    });

    $ctrl.$onInit = function() {};
    $scope.$on('myEvent', function(evt, data) {});
  },
});
