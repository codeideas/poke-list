'use strict';

angular.module('listControllers', [])

.controller('ListCtrl', ['$http', '$rootScope', '$routeParams', '$scope', function($http, $rootScope, $routeParams, $scope) {
  var page = ~~$routeParams.pageNumber || 1,
      itemsPerPage = 9,
      limit = itemsPerPage * page || itemsPerPage,
      offset = limit - itemsPerPage,
      url = 'http://pokeapi.co/api/v2/pokemon/?limit=' + itemsPerPage + '&offset=' + offset;

  $scope.previousPage = page - 1;
  $scope.nextPage = page + 1;

  $rootScope.loadingPage = true;

  $http.get(url).success(function(data) {
    $scope.pokemons = data.results;

    $rootScope.loadingPage = false;
  });
}]);
