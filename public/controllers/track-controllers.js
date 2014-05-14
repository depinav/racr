racrApp.controller('track.index', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $http({
        method: 'GET',
        url: '/api/tracks'
    }).success(function(data, status, headers, config){
            $scope.tracks = data;
        }).error(function(data, status, headers, config){
            //handle ze errors
        });

    $scope.findTrack = function(track){
        $location.url('/tracks/'+track._id);
    }
}]);

racrApp.controller('track.details', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/api/tracks/' + $routeParams.id)
        .success(function(data, status, headers, config){
            $scope.track = data[0];
        }).error(function(data, status, headers, config){
        });

    $scope.deleteTrack = function(track){
        $http.delete('/api/tracks/' + track._id)
            .success(function(data){
                $location.url('/tracks');
            })
            .error(function(){

            });
    };
}]);

racrApp.controller('track.create', ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.createTrack = function (track) {
        $http.post('/api/tracks', track)
            .success(function(data, status, headers, config){
                $location.url('/tracks');
            }).error(function(data, status, headers, config){
            });
    }
}]);
