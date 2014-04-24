'use strict';

angular.module('soyApp')
.factory('Post', function Post($resource, $http) {
  var root = '/post';

  var resource = $resource(root + '/:id', {
    sort: '-createdAt' // reverse order by default
  }, {});

  resource.prototype.getFires = function getFires () {
    var that = this;

    $http.get(root + '/firevotes/' + this.id)
      .success(function(data) {
        that.firevotes = data;
      });

    return this;
  };

  resource.prototype.getLeaves = function getLeaves () {
    var that = this;

    $http.get(root + '/leafvotes/' + this.id)
      .success(function(data) {
        that.leafvotes = data;
      });

    return this;
  };

  return resource;
});
