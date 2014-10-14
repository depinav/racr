racrApp.controller('Race.IndexCtrl', ['$scope', 'RaceService', function($scope, raceService) {
    $scope.racesViewModel = {};

    var races = raceService.query(function(){
        console.log(races);
        $scope.racesViewModel.races = races;
    });

//    $scope.findRace = function(race){
//        $location.url('/races/'+race._id);
//    }
}]);

racrApp.controller('Race.DetailsCtrl', ['$scope', '$routeParams', 'RaceService', function($scope, $routeParams, raceService){
    $scope.raceViewModel = {};

    $scope.raceViewModel.race = raceService.get({id: $routeParams.id});

    $scope.deleteRace = function(race){
        $http.delete('/api/races/' + race._id)
            .success(function(data){
                $location.url('/races');
            })
            .error(function(){

            });
    };
}]);

racrApp.controller('Race.CreateCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.createRace = function (race) {
        $http.post('/api/races', race)
            .success(function(data, status, headers, config){
                $location.url('/races');
            }).error(function(data, status, headers, config){
            });
    }
}]);
