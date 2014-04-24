'use strict';

angular.module('soyApp')
  .controller('MainCtrl', function ($scope, Post) {

    // Attributes

    $scope.posts = Post.query({},
      function success() {
        fetchVotes();
      });

    $scope.newPost = new Post({ lang: 'javascript' });

    // Actions

    $scope.remove = function DeletePost(post) {
      post.$delete();
    };

    $scope.create = function CreatePost() {
      $scope.newPost.$save(
        function success(data) {
          $scope.posts.push(data);
          $scope.newPost = new Post();
        },
        function error (data) {
          console.error('SAVE ERROR: ', data);
        }
      );
    };

    function fetchVotes() {
      angular.forEach($scope.posts, function(post) {
        post.getFires().getLeaves();
      });
    };

    // New post

    $scope.startNewPost = function StartNewPost() {
      $scope.creatingPost = true;
    };

    $scope.stopNewPost = function StopNewPost() {
      $scope.creatingPost = false;
    };

    $scope.toggleNewPost = function ToggleNewPost() {
      if ($scope.creatingPost) {
        $scope.stopNewPost();
      } else {
        $scope.startNewPost();
      }
    };

  });
