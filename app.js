var meanApp = angular.module('meanApp', ['ngRoute']);

meanApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'home.html',
            controller: 'appCtrl'
        });
});
meanApp.controller('appCtrl', function($http) {
    var app = this;
    var url = "http://localhost:3000";

    app.submit = function(thing){
        $http.post(url + $/add, {thing: thing})

    };
});