var app = angular.module('robotics', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'template/home.html',
      controller: 'MainCtrl'
    });

    $stateProvider
      .state('teams', {
        url: '/teams',
        templateUrl: 'template/teams.html',
        controller: 'MainCtrl'
      });

      $stateProvider
        .state('upcoming', {
          url: '/upcoming',
          templateUrl: 'template/upcoming.html',
          controller: 'MainCtrl'
        });

        $stateProvider
          .state('sponsors', {
            url: '/sponsors',
            templateUrl: 'template/sponsors.html',
            controller: 'MainCtrl'
          });

  $urlRouterProvider.otherwise('home');
}]);


app.controller('MainCtrl', [
'$scope',
function($scope){
}]);
