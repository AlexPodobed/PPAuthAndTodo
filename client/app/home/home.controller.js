;(function(){
    'use strict';

    angular.module('authAndTodoApp')
      .controller('HomeCtrl', ['$scope', '$rootScope',  function($scope, $rootScope){
          $rootScope.bodyClass = 'home-page';


      }]);
}());
