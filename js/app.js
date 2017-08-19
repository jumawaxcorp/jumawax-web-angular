var app = angular.module("routesApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
$routeProvider.when('/routeURL1', {
		templateUrl: 'index2.html',
		controller: 'sample1Controller'
	}).
		when('/routeURL2', {
		templateUrl: 'sample2.htm',
		controller: 'sample2Controller'
	}).
		when('/routeURL3', {
		templateUrl: 'sample3.htm',
		controller: 'sample3Controller'
	}).
		otherwise({
		redirectTo: '/login'
	});
	}
]);

 
app.controller('sample1Controller',function($scope){
$scope.message='Test Sample Page 1 URL';
})
app.controller('sample2Controller',function($scope){
$scope.message='Test Sample Page 2 URL';
})
app.controller('sample3Controller',function($scope){
$scope.message='Test Sample Page 3 URL';	
})



var person = {
	firtsName : "Mahadi",
	lastName : "Putra",
	age : "24",
	eyeColor : "red"
};

// document.getElementById("form").innerHTML = 
// person.firtsName + " is " + person.age 
// console.log(person);

// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
//     console.log(x);
// }



