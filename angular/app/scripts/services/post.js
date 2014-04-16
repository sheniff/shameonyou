'use strict';

angular.module('soyApp')
.factory('Post', function Post($resource) {
  return $resource('/post/:id', {}, {});
});
