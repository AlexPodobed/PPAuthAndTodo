'use strict';

angular.module('authAndTodoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      });
  });
