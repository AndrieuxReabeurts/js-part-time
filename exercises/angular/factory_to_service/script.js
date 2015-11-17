var app = angular.module( 'routeEx',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:'view1.html',
		controller: 'view1ctrl'
	});
	$routeProvider.when("/view2",{
		templateUrl:'view2.html',
		controller: 'view2ctrl'
	});
	$routeProvider.otherwise({redirectTo:'/'});
});

app.controller('view1ctrl', function($scope, viewf){
	$scope.viewf = viewf;
  $scope.submitter= function(){
    console.log("sup?");
  	$scope.viewf.setData($scope.input1, $scope.input2)
  }

});

app.controller('view2ctrl', function($scope, viewf){
  $scope.display1 = viewf.input1;
  $scope.display2 = viewf.input2;
});

app.service('viewf', function(){
  this.setData = function(input1, input2) {
    this.input1 = input1;
    this.input2 = input2;
  }

  this.getData = function() {
    return this;
  }
});

// app.factory('viewf', function(){
//   var obj ={};
//   obj.setdata = function(input1, input2){
//     this.input1 = input1;
//     this.input2 = input2;
//   }
//   return obj;
// });


