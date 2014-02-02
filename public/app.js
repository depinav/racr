(function(window, angular) {
	var racrApp = angular.module('racr', ['ngRoute']);
	var TEMPLATE_DIR = './public/pages/templates/';
	racrApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/templates/_home.html',
				controller  : 'homeController'
			})

	}]);

	//TODO: Refactor such that controllers are not contained within app.js
	racrApp.controller('homeController', function($scope) {

	  $scope.test = "And this line is in the homeController, on the _home.html template";
	});

})(window, window.angular);