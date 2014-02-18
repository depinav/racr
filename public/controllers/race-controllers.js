racrApp.controller('race.index', ['$scope', '$http', function($scope, $http) {

	$http({
		method: 'GET',
		url: '/api/races',
	}).success(function(data, status, headers, config){
		$scope.races = data;
	}).error(function(data, status, headers, config){
		//handle ze errors
	});
	$scope.test = "I'm the Race index controller!";
}]);
