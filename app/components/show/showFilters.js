'use strict';

angular.module('showFilters', [])

.filter('nameStat', [function() {
  return function(name) {
    return name.length == 2 ? name.toUpperCase() : name.replace('-', ' ');
  };
}]);
