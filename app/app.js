'use strict';

angular.module('pokelistApp', [
  'ngRoute',

  'listControllers',
  'showControllers',
  'showFilters'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    })
    .when('/list/:pageNumber', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    })
    .when('/:pokemonName', {
      templateUrl: 'views/show.html',
      controller: 'ShowCtrl'
    })
    .otherwise({
      redirectTo: '/list'
    });
}]);
