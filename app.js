const meanApp = angular.module('meanApp', ['ngRoute']);

meanApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'home.html',
            controller: 'appCtrl'
        });
});

meanApp.controller('appCtrl', function($http) {
    let app = this;
    const url = "http://localhost:3000";

    app.thingsFromMongo = [];

    app.submit = function(thing){
        $http.post(url + "/add", {thing: thing});
        app.thing = "";
    };
});