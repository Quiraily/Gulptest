(function() {
    'use strict';

    /* Controllers */

    angular
        .module('md2Controllers')
        .controller('StudentsController', ['$rootScope', '$scope', '$http', studentController]);

    function studentController($rootScope, $scope, $http) {

        // de view heeft ook toegang tot het $scope object
        // $scope is het centrale object tussen je view (HTML) en je controller
        $scope.editMode = false;
        $scope.currentDate = new Date();
        $scope.selectedStudent = "";
        // we geven het scope object een array met namen
        $scope.stations = [];

        // de HTML mag bij deze functie omdat onze HTML ook bij $scope mag
        $scope.selectStudent = function(student){
            $scope.selectedStudent = student;
        }

        // met de ngAnimate module kunnen we elementen laten animeren binnen angular

        // met de $http service kunnen we data laden
        $http.get("data/trainstations.json").then(function(result){
            $scope.students = result.data;
        });


        // @ voor de 'gevorderde' onderons: maak een double-click directive
        // @ nog wat interessanter: maak een prompt() directive. Als je klikt op een knop, dat je eerst een invoer laat zien (window.prompt()) en vervolgens de ingevoerde data opslaan in de ng-model



    }

})();