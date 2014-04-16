'use strict';

angular.module('soyApp')
  .controller('MainCtrl', function ($scope, Post) {

    $scope.stuff = Post.query();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
