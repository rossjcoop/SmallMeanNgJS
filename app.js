var meanApp = angular.module('meanApp', ['ngRoute']);

meanApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'home.html',
            controller: 'appCtrl'
        });
});
meanApp.controller('appCtrl', function() {
    var app = this;

    app.submit = function(){

    };
});