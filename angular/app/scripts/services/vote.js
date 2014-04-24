'use strict';

angular.module('soyApp')
.service('Vote', function Vote($resource) {
  return $resource('/vote/:id', {}, {});
});
