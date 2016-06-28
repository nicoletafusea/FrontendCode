/**
 * Created by user on 6/28/2016.
 */
app.controller('FormsController', ['$scope', function($scope) {
    $scope.push = function() {
        if ($scope.myForm.$valid === true)
            alert("corect");
        else
            alert("incorect");
    }
}]);