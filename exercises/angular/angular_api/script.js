var app = angular.module('routeEx', []);


app.controller('routeCtrl', function($scope, $http){
	
  $http({
    method: 'JSONP',
    url: "https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=b5a2b89acaf74f47aebb9aca4653bc4e&client_secret=863738d9b34e4ac0aca60f872a5eae05&callback=JSON_CALLBACK"
  }).then(function(response){
  		$scope.dataResponse = response;
  });

});