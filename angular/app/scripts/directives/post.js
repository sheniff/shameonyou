'use strict';

angular.module('soyApp')
  .directive('post', function (Vote) {
    return {
      templateUrl: '/views/directives/post.html',
      restrict: 'EA',
      scope: {
        post: '='
      },
      link: function postLink($scope, element, attrs) {

        $scope.leaf = function LeafVote(post) {
          new Vote({ post: post.id, vote: -1 }).$save(
            function success(data) {
              post.leafvotes++;
            },
            function error(data) {
              console.log('something went wrong', data);
            }
          );
        };

        $scope.fire = function FireVote(post) {
          var vote = new Vote({ post: post.id, vote: 1 }).$save(
            function success(data) {
              post.firevotes++;
            },
            function error(data) {
              console.log('something went wrong', data);
            }
          );
        };


      }
    };
  });
