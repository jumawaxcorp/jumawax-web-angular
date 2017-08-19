var myApp = angular.module('myApps', []);

myApp.controller('mainController', function($scope) {

	$scope.name = 'Jamet';
	$scope.occupation = 'coder';
	console.log($scope);
});

var searchPeople = function(firstName, lastName, height, age, occupation)
{
	return 'janew';
}
console.log(searchPeople);

// var hadiapps = {};
// hadiapps.person = 'hadi'; 
// hadiapps.logPersons = function()
// {
// 	console.log(hadiapps.person);
// }
