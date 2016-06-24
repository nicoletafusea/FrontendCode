/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('MainController',['$rootScope', '$scope', function($rootscope, $scope) {
    $scope.someValue = "Nicoleta";
    alert($scope.someValue);
}]);