(function () {

    "use strict";

    angular.module('employeesManager')
        .service('employeesSrv', [function () {

            this.employees = [
                {
                    firstName: 'Mark',
                    lastName: 'Zukerberg',
                    age: 32,
                    salary: 2200,
                    photo: 'http://placehold.it/300x150',
                    description: 'Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria excellens de amicitia loquetur. Tu velim a me animum parumper avertas, Laelium loqui ipsum putes. C. Fannius et Q. Mucius ad socerum veniunt post mortem Africani; ab his sermo oritur, respondet Laelius, cuius tota disputatio est de amicitia, quam legens te ipse cognosces.'
                },

                {
                    firstName: 'Samuel',
                    lastName: 'Etoo',
                    age: 36,
                    salary: 5000,
                    photo: 'http://placehold.it/300x150',
                    description: 'Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria excellens de amicitia loquetur. Tu velim a me animum parumper avertas, Laelium loqui ipsum putes. C. Fannius et Q. Mucius ad socerum veniunt post mortem Africani; ab his sermo oritur, respondet Laelius, cuius tota disputatio est de amicitia, quam legens te ipse cognosces.'
                },

                {
                    firstName: 'Bill',
                    lastName: 'Gates',
                    age: 45,
                    salary: 80000,
                    photo: 'http://placehold.it/300x150',
                    description: 'Sed ut tum ad senem senex de senectute, sic hoc libro ad amicum amicissimus scripsi de amicitia. Tum est Cato locutus, quo erat nemo fere senior temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic enim est habitus) et amicitiae gloria excellens de amicitia loquetur. Tu velim a me animum parumper avertas, Laelium loqui ipsum putes. C. Fannius et Q. Mucius ad socerum veniunt post mortem Africani; ab his sermo oritur, respondet Laelius, cuius tota disputatio est de amicitia, quam legens te ipse cognosces.'
                }

            ];


            this.getEmployees= function(){
                return this.employees;
            };

            this.addEmployee = function (employee) {
                this.employees.push(employee);
            };

            this.deleteEmployee= function(employee){
                var index = this.employees.indexOf(employee);
                this.employees.splice(index,1);
            };


        }]);


})();




