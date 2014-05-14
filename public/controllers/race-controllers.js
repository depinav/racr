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

racrApp.controller('race.details', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/api/races/' + $routeParams.id)
        .success(function(data, status, headers, config){
		    $scope.race = data[0];
	    }).error(function(data, status, headers, config){
	    });

    $scope.deleteRace = function(race){
        $http.delete('/api/races/' + race._id)
            .success(function(data){
                $location.url('/races');
            })
            .error(function(){

            });
    };
}]);

racrApp.controller('race.create', ['$scope', '$http', '$location', function($scope, $http, $location){

    $http({
        method: 'GET',
        url: '/api/tracks'
    }).success(function (data, status, headers, config) {
        console.log(data);
        $scope.tracks = data;
    }).error(function (data, status, headers, config) {
        console.log('error retrieving tracks', data);
        //handle the errors
    });

    $scope.createRace = function (race) {
        $http.post('/api/races', race)
            .success(function(data, status, headers, config){
                $location.url('/races');
            }).error(function(data, status, headers, config){
            });
    }
}]);
