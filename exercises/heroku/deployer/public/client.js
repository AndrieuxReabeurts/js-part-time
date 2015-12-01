app = angular.module("myMod", []);

app.controller("myCtrl", function($scope, $http){

	$scope.answer = function(){
		$http.get("/root").success(function(data){
			$scope.data = data;
		});
	}

});