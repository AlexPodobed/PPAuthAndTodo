'use strict';

angular.module('authAndTodoApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'home'
    },{
      'title': 'Project',
      'state': 'project'
    },{
      'title': 'Login',
      'state': 'login'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
