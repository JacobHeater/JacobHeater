define('jacobheater.home.controller', ['jacobheater.angular'], function (app) {
    var ctrl = app.controller('HomeController', function () {
        this.message = "Hello, world!";
        this.sliderItems = [
            {
                content: '<img src="../Images/Logos/Angularjs.png" alt="AngularJS" />',
                title: 'AngularJS'
            }, {
                content: '<img src="../Images/Logos/Nodejs.png" alt="NodeJS" />',
                title: 'NodeJS'
            }, {
                content: '<img src="../Images/Logos/JavaScript.png" alt="JavaScript" />',
                title: "JavaScript"
            }, {
                content: '<div style="background-color: rgb(255, 255, 255); padding: 0 5px;"><img src="../Images/Logos/mongodb.png" alt="JavaScript" /></div>',
                title: "MongoDB"
            }
        ];
    });
    return ctrl;
});