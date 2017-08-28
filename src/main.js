var MyApp = angular.module("myapp", ["ngRoute"]);

MyApp.config(function ($routeProvider, $locationProvider) {

	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/task1', {
		templateUrl: 'view/Task1.html',
		controller: 'Task1Ctrl',
		controllerAs: 'Task1Ctrl'
	})
	.otherwise({
		redirectTo: '/task1'
	});
});

MyApp.run(function () {});


