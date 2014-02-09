var racrApp = angular.module('racr', ['ngRoute']);
racrApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
			.when('/', {
				templateUrl : 'pages/templates/_home.html',
				controller  : 'Home'
			})
			.when('/races', {
				templateUrl : 'pages/templates/_races.html',
				controller  : 'Race'
			})
			.when('/tracks', {
				templateUrl : 'pages/templates/_tracks.html',
				controller  : 'Track'
			})
			.when('/teams', {
				templateUrl : 'pages/templates/_teams.html',
				controller  : 'Team'
			})
			.when('/racers', {
				templateUrl : 'pages/templates/_racers.html',
				controller  : 'Racer'
			})

}]);
