var practiceMod = angular.module("practiceMod", [])

practiceMod.controller("mainController", function($scope) {

	var ctr = 0;

	$scope.$watch(function(){
		ctr++;
		console.log("digest called "+ctr);
	})
	
	$scope.ctr = ctr;

});



