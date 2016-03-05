var app = angular.module("musicApp", ["ngRoute", 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider.when("/Items", {
        templateUrl: "views/view-list.html",
        controller: "listController"
      })
      .when("/Items/add", {
        templateUrl: "views/view-detail.html",
        controller: "addController"
      })
      .when("/Items/:id", {
        templateUrl: "views/view-detail.html",
        controller: "editController"
      })
      .otherwise({
        redirectTo: "/Items"
      })
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
});

app.factory('myHttpInterceptor',  function($q) {
    return {
        // optional method
        'request': function(config) {
            // do something on success
            $("#spinner").show();
            return config;
        },

        // optional method
        'requestError': function(rejection) {
            // do something on error
            $("#spinner").hide();

            return $q.reject(rejection);
        },



        // optional method
        'response': function(response) {
            // do something on success
            $("#spinner").hide();
            return response;
        },

        // optional method
        'responseError': function(rejection) {
            // do something on error
            $("#spinner").hide();

            return $q.reject(rejection);
        }
    };
});