;
(function () {
  'use strict';

  angular.module('authAndTodoApp')
    .config(function ($stateProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
          });
    });
}());
