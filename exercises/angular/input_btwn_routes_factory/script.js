var app = angular.module('routeEx', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'view1.html',
    controller: 'entryCtrl'
  });
  
  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'displayCtrl'
  });
});

/////INPUT VIEW CONTROLLER

app.controller('entryCtrl', function($scope, myService){

  $scope.myService = myService;

  $scope.submitter = function(){
    $scope.myService.setData({
      name: $scope.dataOne, 
      age: $scope.dataTwo
    });
  }

});

/////DISPLAY VIEW CONTROLLER

app.controller('displayCtrl', function($scope, myService){
  $scope.myService = myService;
  var display = $scope.myService.getData();
  $scope.display1 = display.name;
  $scope.display2 = display.age;
});

/////FACTORY

app.factory("myService", function(){

var container = null;
  return { getData: function(){ //invoked in display controller
      return container;
  },
  setData: function (dataObj) { //invoked in entry controller
    container = dataObj;
    // return container;
  }

}

});