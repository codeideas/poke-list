'use strict';

angular.module('showControllers', [])

.controller('ShowCtrl', ['$http', '$rootScope', '$routeParams', '$scope', function($http, $rootScope, $routeParams, $scope) {
  var url = 'http://pokeapi.co/api/v2/pokemon/' + $routeParams.pokemonName;

  $rootScope.loadingPage = true;

  $http.get(url).success(function(data) {
    $scope.id = data.id;
    $scope.name = data.name;
    $scope.thumb1 = data.sprites.front_default;
    $scope.thumb2 = data.sprites.back_default;
    $scope.stats = data.stats;
    $scope.types = data.types;

    $rootScope.loadingPage = false;
  });
}]);
