define('jacobheater.home.controller', ['jacobheater.angular'], function (app) {
    var ctrl = app.controller('HomeController', function () {
        this.message = "Hello, world!";
    });
    return ctrl;
});