/**
 * Created by nicoleta on 6/25/2016.
 */
hrApp.controller('OtherController', ['$scope', function($scope) {
    $scope.title = 'Bamboocha';
    $scope.setTitle = function() {
        $scope.title = 'GIGI';
    }
}]);