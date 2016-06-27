hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location, commonResourcesFactoryBackup) {

        $scope.employee = {};
        var id = $routeParams.employeeid;

        // TODO #HR6 get employee by id
        $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl+id)
            .success(function(data, status) {
                $scope.employee = data;
            });


        $scope.back = function() {
            // TODO back to Employee List page

        }

    }]);