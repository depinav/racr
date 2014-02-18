racrApp.controller('race.index', ['$scope', '$http', '$location', function($scope, $http, $location) {

	$http({
		method: 'GET',
		url: '/api/races'
	}).success(function(data, status, headers, config){
		$scope.races = data;
	}).error(function(data, status, headers, config){
		//handle ze errors
	});

	$scope.findRace = function(race){
		$location.url('/races/'+race._id);
	}
}]);

racrApp.controller('race.details', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http({
		method: 'GET',
		url: '/api/races/' + $routeParams.id
	}).success(function(data, status, headers, config){
		$scope.race = data[0];
	}).error(function(data, status, headers, config){

	});
}]);

racrApp.controller('race.create', ['$scope', '$http', '$location', function($scope, $http, $location){

}]);
