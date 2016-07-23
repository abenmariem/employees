(function () {

    "use strict";

    angular.module('employeesManager')
        .controller('employeesCtrl', ['$scope', 'employeesSrv', '$modal', function ($scope, employeesSrv, $modal) {

            $scope.employees = employeesSrv.getEmployees();

            function showModal () {
                console.log('showCreateModal called');
                $scope.createModal = $modal(
                    {
                        scope: $scope,
//content: "Hello Modal<br />This is a multiline message!",
                        templateUrl: 'template/newModal.tpl.html',
                        show: true
                    });
            }

            $scope.showCreateModal = function(){
                showModal();
                $scope.adding = true;
            };

            $scope.addEmployee=function(employee){
                employeesSrv.addEmployee(employee);
                $scope.createModal.hide();
                $scope.newEmployee = {};
                $scope.adding = false;
            };

            $scope.cancelAddEmployee = function(){
                $scope.createModal.hide();
                $scope.newEmployee = {};
                $scope.adding = false;
            };

            $scope.showEditForm = function(employee){
                $scope.employeeBeforeEdit = angular.copy(employee);
                $scope.editing = true;
                console.log('employeeBeforeEdit '+ $scope.employeeBeforeEdit);
                $scope.newEmployee = employee;
                showModal();
            };

            $scope.editEmployee = function(employee){
                $scope.createModal.hide();
                $scope.newEmployee = {};
                $scope.editing = false;
            };

            $scope.cancelModifEmployee = function(){
                $scope.createModal.hide();
                var index = $scope.employees.indexOf($scope.newEmployee);
                $scope.employees[index]= $scope.employeeBeforeEdit;
                $scope.newEmployee = {};
                $scope.employeeBeforeEdit = {};
                $scope.editing = false;
            };


            $scope.deleteEmployee = function(employee){
                console.log("delete employee");
                employeesSrv.deleteEmployee(employee);
            };





        }]);


})();