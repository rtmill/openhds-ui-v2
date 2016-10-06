
angular.module('myApp.view1', ['ngRoute', 'ServicesModule'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',
    function($scope, LocationsBulk) {
      $scope.someVar = "it's working";
      $scope.restTest = LocationsBulk.query();

});