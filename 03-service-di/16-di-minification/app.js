var myApp = angular.module('myApp', []);

// use this syntax for minify js code
// to keep DI correct
myApp.controller('mainController', [
  '$scope',
  '$log',
  function ($scope, $log) {
    console.log($scope);
  },
]);
