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
    
  $urlRouterProvider.otherwise('home');
}]);


app.controller('MainCtrl', [
'$scope',
function($scope){
}]);
