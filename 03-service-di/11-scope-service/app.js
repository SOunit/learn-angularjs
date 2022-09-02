var angularApp = angular.module("angularApp", []);

angularApp.controller("mainController", function ($scope) {
  $scope.name = "Jack Pearson";
  $scope.occupation = "Coder";

  $scope.getName = function () {
    return "John Doe";
  };

  $scope.getName();

  console.log($scope);
});
