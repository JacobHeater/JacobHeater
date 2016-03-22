define('jacobheater.angular', ['pro'], function (pro) {
    var app = angular.module('jacobheater', ['ngRoute']);
    var urlFormat = '../ngViews/{0}.html';
    var createUrl = function (viewName) {
        return pro.stringFormatter(urlFormat, viewName);
    };
    app.config(['$routeProvider', '$locationProvider', function (router, location) {
        router.when('/', {
            templateUrl: createUrl('Home'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
    }]);
    return app;
});