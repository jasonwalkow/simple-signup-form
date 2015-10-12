var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		templateUrl: 'opt-in.html',
		retrict: 'E',
		transclude: true
	};
});