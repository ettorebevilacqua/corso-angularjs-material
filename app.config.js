const app = angular.module('app', ['ui.router', 'ngMaterial', 'oc.lazyLoad']);

app.config(function(
  $stateProvider,
  $urlServiceProvider,
  $locationProvider,
  $ocLazyLoadProvider
) {
  const pathComp = 'components/';
  const getPathComp = (name, ext = '') =>
    pathComp + name + '.comp.' + (ext ? ext : 'js');

  const lazyModules = [
    {
      name: 'users',
      files: [getPathComp('users/users'), getPathComp('users/user-detail')],
    },
  ];

  $ocLazyLoadProvider.config({
    debug: true, // For debugging 'true/false'
    events: true, // For Event 'true/false'
    modules: lazyModules,
  });

  $urlServiceProvider.rules.otherwise({ state: 'main.users.list' });

  $stateProvider
    .state('main', {
      url: '/',
      component: 'appMain',
      abstract: true,
    })
    .state('main.home', {
      url: '/home',
      component: 'home',
    });

  $stateProvider
    .state('main.users', {
      url: '/users',
      template: '<div> <ui-view></ui-view> </div>',
      abstract: true,
      resolve: {
        loadDependencies: [
          '$ocLazyLoad',
          function($ocLazyLoad) {
            return $ocLazyLoad.load('users');
          },
        ],
      },
    })
    .state('main.users.list', {
      url: '/users.list',
      component: 'users',
      dataTitle: { icon: null, title: 'users list' },
      resolve: {
        users: function(UserService) {
          return UserService.list();
        },
      },
    })
    .state('main.users.detail', {
      url: '/users.detail/:id',
      component: 'userDetail',
    });
  //  $locationProvider.html5Mode(true);
});

app.run([
  '$rootScope',
  '$state',
  function($rootScope, $state) {
    console.log('app run');
  },
]);
