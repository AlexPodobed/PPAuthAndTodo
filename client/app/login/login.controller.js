;(function () {
  'use strict';

  angular.module('authAndTodoApp')
    .controller('LoginCtrl', ['$scope', '$auth', function ($scope, $auth) {
      $scope.message = 'Hello';

      $scope.signup = function () {
        $auth.signup($scope.user)
          .then(function(res){
            console.log(res)
          }).then(function(err){
            console.log(err)
          })
      }
    }]);

}());
