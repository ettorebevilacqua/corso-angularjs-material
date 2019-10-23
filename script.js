"use babel";
let app = angular.module('app', ['ui.router', 'ngMaterial']);

angular.module('app').config(function($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'userlist' });
  
  $stateProvider.state('userlist', {
    url: '/users',
    templateUrl: './partials/users.html',
    controller: 'UsersController',
    resolve: {
      users: function(UserService) {
        return UserService.list();
      }
    }
  });
    
  $stateProvider.state('userlist.detail', {
    url: '/:userId',
    templateUrl: './partials/userDetail.html',
    controller: 'UserDetailController',
    resolve: {
      user: function($transition$, users) {
        return users.find(user => user.id == $transition$.params().userId);
      }
    }
  });

});

app.controller('UsersController', function($scope, users) {
  $scope.users = users;
  $scope.clickHandler = function() {
    alert('something');
  }
})

app.controller('UserDetailController', function($scope, user) {
  $scope.user = user;
})


app.service('UserService', function($http) { 
  var service = {
    list: function() {
      return $http.get('./data/users.json', { cache: true }).then(resp => resp.data)
    },
    get: function(id) {
      return service.list().then(list => list.find(item => item.id === id));
    }
  };
  
  return service;
});

// preload resources in case plunker times out
app.run(function($http, $templateRequest) {
  $http.get('data/users.json', { cache: true });
  $templateRequest('partials/users.html');
  $templateRequest('partials/userDetail.html');
})

/* $state.go('users', {obj:yourObj}); *>
