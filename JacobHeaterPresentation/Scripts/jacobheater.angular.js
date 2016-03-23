define('jacobheater.angular', ['pro'], function (pro) {
    var app = angular.module('jacobheater', ['ngRoute']);
    var urlFormat = '../ngViews/{0}/{1}.html';
    var createUrl = function (folder, viewName) {
        return pro.stringFormatter(urlFormat, folder, viewName);
    };
    app.config(['$routeProvider', '$locationProvider', function (router, location) {
        router.when('/', {
            templateUrl: createUrl('Home', 'Home'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
    }]);
    return app;
});