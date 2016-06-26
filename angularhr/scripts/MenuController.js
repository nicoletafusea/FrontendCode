/**
 * Created by nicoleta on 6/25/2016.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        }
    ];
}]);