var myApp = angular.module('myApp', []);

myApp.controller('mainController', [
  '$scope',
  '$filter',
  function ($scope, $filter) {
    $scope.handle = '';

    $scope.lowercasehandle = function () {
      return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    var rulesrequest = new XMLHttpRequest();
    rulesrequest.onreadystatechange = function () {
      $scope.$apply(function () {
        if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
          $scope.users = JSON.parse(rulesrequest.responseText);
        }
      });
    };
    rulesrequest.open(
      'GET',
      'https://jsonplaceholder.typicode.com/users',
      true
    );
    rulesrequest.send();
  },
]);
