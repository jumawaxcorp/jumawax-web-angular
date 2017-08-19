
var app = angular.module('myApp', ['ui.router']);



app.controller('myAppCntrl', function($scope, $http) {
  $http.get("https://www.w3schools.com/angular/customers.php").then(function (response) {
      $scope.myData = response.data.records;

      console.log(response.data);
     
  });
});


app.config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched URL redirect to dashboard URL
        $urlRouterProvider.otherwise("/index");

       // Views targeting:
       // # relatively  
        //  - my-view :          relatively target 'my-view' in parent state.
        //  - "" :            relatively targets the unnamed view in parent state.
       // # absolutely views
        //  - my-view@ :        absolutely target 'my-view' in root. 
       //  - my-view@my-state :   absolutely target 'my-view' in my-state's view. 
       //  - @my-state:          absolutely target unnamed view in my-state's view.
       //  - @:              absolutely targets the unnamed view in root unnamed state.
  
       // Recommended, use always views and states names (only root is unnamed):
       // # relatively  
        //  - my-view :          relatively target 'my-view' in parent state.
       // # absolutely views
       //  - my-view@my-state :   absolutely target 'my-view' in my-state's view. 
        //  - my-view@ :        absolutely target 'my-view' in root. 
        $stateProvider
        
            // index
            .state('index', {
                url: "/index",
                views: {
                    'menu-view': {
                       templateUrl:"tabledynamic.html"
                    // },
                    // 'container-view': {
                    //   templateUrl:"home.html"
                    // },
                    //     'left-view@index' :{
                    //        templateUrl:"departures.html"
                    //     },
                    //     'right-view@index' :{
                    //        templateUrl:"arrivals.html"
                        },
                   'status-view': {
                       template:"<p>index<p>"
                    },
                },
            })
          
            // departures
            .state('departures', {
                url: "/departures", 
                views: {
                    'menu-view': {
                       templateUrl:"menu.html"
                    },
                    'container-view': {
                      templateUrl:"departures.html"
                    },
                   'status-view': {
                       template:"<p>departures<p>"
                    },
                },
            })
        
            // departures, add substate 
            .state('departures.add', {
                url: "/add",  
                views: {
                    'bottom-view@departures': {
                       templateUrl:"departures.add.html"
                    },
                    'status-view@': {
                       template:"<p>departures.add<p>"
                    },
                },
            }) 
        
            // departures, list substate 
            .state('departures.list', {
                url: "/list", 
                views: {
                    'bottom-view@departures': {
                       templateUrl:"departures.list.html"
                    },
                    'status-view@': {
                       template:"<p>departures.list<p>"
                    },
                },
            }) 
        
            // arrivals
            .state('arrivals', {
                url: "/arrivals",
                views: {
                    'menu-view': {
                       templateUrl:"menu.html"
                    },
                    'container-view': {
                      templateUrl:"arrivals.html"
                    },
                   'status-view': {
                       template:"<p>arrivals<p>"
                    },
                },
            }) 
        
            // arrivals, add substate 
            .state('arrivals.add', {
                url: "/add",  
                views: {
                    'bottom-view@arrivals': {
                       templateUrl:"arrivals.add.html"
                    },
                   'status-view@': {
                       template:"<p>arrivals.add<p>"
                    },
                },
            }) 
        
            // arrivals, list substate 
            .state('arrivals.list', {
                url: "/list", 
                views: {
                    'bottom-view@arrivals': {
                       templateUrl:"arrivals.list.html"
                    },
                   'status-view@': {
                       template:"<p>arrivals.list<p>"
                    },
                },
            }) 
    });



// $http.get("http://192.168.1.100:8080/jumawax-web/product/list/jsonp/product/catalogue").then(function (response) {

// app.config(function($stateProvider, $urlRouterProvider) {

//     $urlRouterProvider.otherwise('/home');

//     $stateProvider

//         // HOME STATES AND NESTED VIEWS ========================================
//         .state('home', {
//             url: '/home',
//             templateUrl: 'form.html'
//         })

//         // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//         .state('about', {
//             // we'll get to this in a bit   
//             url: '/about',
//             templateUrl: 'index2.html'    
//         });

// });


// app.config(['$routeProvider',function ($routeProvider) {
// 	$routeProvider.when('/', {
// 				   templateUrl: '',
				   
// 				}).
// 				 	when('/content2', {
// 					templateUrl: 'index2.html',
					
// 				}).
// 				otherwise({
// 				redirectTo: '/content'
// 	 });
// });