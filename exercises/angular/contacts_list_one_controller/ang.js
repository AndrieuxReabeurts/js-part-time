
var app = angular.module('routeEx', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'view1.html',
    controller: 'routeCtrl'
  });
  
  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'routeCtrl'
  });
});

app.controller('routeCtrl', function($scope, myFactory){
        // console.log($scope.contacts)
        $scope.contacts = myFactory.data || [];
        $scope.add = function() {
            $scope.contacts.push($scope.newcontact);
            myFactory.setData($scope.contacts);

        }
        // debugger
});

app.factory("myFactory", function(){
    var container = {};

    container.setData = function(incomingDataPlusNew){
        this.data = incomingDataPlusNew;
    }
    return container;
})



    // function ContactController($scope) {
    //     $scope.contacts = ["hi@email.com", "hello@email.com"];
 
    //     $scope.add = function() {
    //     $scope.contacts.push($scope.newcontact);
    //     $scope.newcontact = "";
    //     }
    // }
