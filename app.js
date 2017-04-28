var angular = require('angular');
require('angular-route');

var app = angular.module('app2',['ngRoute']);

require('./controller');
require('./service');


app.config(function($routeProvider){
  $routeProvider.when('/home',{
    templateUrl: 'views/home.html',
    controller:'HomeController',
    // access: {restricted: false}
  })
  $routeProvider.when('/confirmpage',{
    templateUrl: 'views/confirmpage.html',
    controller:'ConfirmpageController',
    // access: {restricted: true}
  })

  // $routeProvider.when('./index.html',{
  //   controller:'IndexController',
  //   // access: {restricted: true}
  // })

  $routeProvider.when('/movie',{
    templateUrl: 'views/movie.html',
    controller: 'MovieController',
    access: {restricted: true}
  })
  $routeProvider.when('/theatre',{
    templateUrl: 'views/theatre.html',
    controller: 'TheatreController',
    access: {restricted: true}
  })
  $routeProvider.when('/booking',{
    templateUrl: 'views/booking.html',
    controller: 'BookingController',
    // access: {restricted: true}
  })
  $routeProvider.when('/payment',{
    templateUrl: 'views/payment.html',
    controller: 'PaymentController',
  })
  $routeProvider.when('/mapping',{
    templateUrl: 'views/mapping.html',
    controller: 'MappingController',
    access: {restricted: true}
  })
  .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        access: {restricted: false}
      })
      .when('/logout', {
        controller: 'LogoutController',
        access: {restricted: true}
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController',
        access: {restricted: false}
      })
  .otherwise({
    redirectTo: '/home'
  });
});


app.run(function ($rootScope, $location, $route, AuthService,$window) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $rootScope.tatoo= "true";

          $location.path('/login');
          $route.reload();

        }
        else if(next.access.restricted==false && AuthService.isLoggedIn()){
          $rootScope.tatoo= "false";
          // $window.location.reload();

        }
      });
  });
});
// console.log($scope.t);

// app.controller('navctrl',function($scope){
//
// });

// here we define our unique filter
app.filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };




});
