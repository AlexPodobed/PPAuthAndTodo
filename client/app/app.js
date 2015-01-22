'use strict';

angular.module('authAndTodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngAnimate',
  'satellizer'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $authProvider.loginUrl = "auth/login";
    $authProvider.signupUrl = "auth/register";
  });
