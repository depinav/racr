var racrApp = angular.module('racr', ['ngRoute', 'ngResource']);

racrApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
			.when('/', {
				templateUrl : 'pages/templates/_home.html',
				controller  : 'HomeCtrl'
			})
			.when('/races', {
				templateUrl : 'pages/templates/races/_racesIndex.html',
				controller  : 'Race.IndexCtrl'
			})
			.when('/races/:id',{
				templateUrl : 'pages/templates/races/_racesDetails.html',
				controller  : 'Race.DetailsCtrl'
			})
			.when('/createRace', {
				templateUrl : 'pages/templates/races/_racesCreate.html',
				controller  : 'Race.CreateCtrl'
			})
			.when('/tracks', {
				templateUrl : 'pages/templates/_tracks.html',
				controller  : 'TrackCtrl'
			})
			.when('/teams', {
				templateUrl : 'pages/templates/_teams.html',
				controller  : 'TeamCtrl'
			})
			.when('/racers', {
				templateUrl : 'pages/templates/_racers.html',
				controller  : 'RacerCtrl'
			})

}]);
