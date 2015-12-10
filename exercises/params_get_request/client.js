var app = angular.module("app", []);

app.controller("ctrl", function($scope, $http){
	var obj = { url: "aww.json"};
	$http.get("/api", {params: obj}).success(function(data){
		console.log(data);
		$scope.information = data;
	});
});