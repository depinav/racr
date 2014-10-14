racrApp.factory('RaceService', ['$resource', function ($resource) {
    return $resource('/api/races/:id');
}]);