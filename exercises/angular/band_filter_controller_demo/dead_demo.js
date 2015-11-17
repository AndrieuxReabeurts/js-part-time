var app = angular.module("deadModule", []);

app.controller("simpleController", function ($scope) {
      $scope.exampleVar = "LOOK AT ME GO!!!";
      $scope.theDead = [
        {name: 'Jerry Garcia', instrument: 'guitar, vocals'},
        {name: 'Bob Weir', instrument: 'guitar, vocals'},
        {name: 'Ron \'Pigpen\' McKernan', instrument: 'keyboards, harmonica, vocals'},
        {name: 'Phil Lesh', instrument: 'bass, vocals'},
        {name: 'Bill Kreutzmann', instrument: 'drums'}
      ];
});