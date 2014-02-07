var racrApp = angular.module('racr', ['ngRoute']);
racrApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/templates/_home.html',
				controller  : 'Home'
			})

}]);
