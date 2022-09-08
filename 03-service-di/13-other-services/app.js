var angularApp = angular.module('angularApp', []);

angularApp.controller('mainController', function ($scope, $log, $filter) {
  $scope.name = 'Jack Pearson';
  $scope.formattedName = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.info($scope.formattedName);
});
