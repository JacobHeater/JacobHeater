define('jacobheater.master.controller', ['jacobheater.angular'], function (jh) {
    var ctrl = jh.controller('MasterController', function () {
        this.title = "Title";
        this.menu = {
            menuItems: [
                { 
                    path: '#/',
                    text: 'Jacob Heater',
                    isLogo: true
                },
                {
                    path: '#/',
                    text: 'Home'
                }, {
                    path: '#/Blog',
                    text: 'Blog'
                }, {
                    path: '#/Portfolio',
                    text: 'Portfolio'
                }, {
                    path: '#/About',
                    text: 'About'
                }
            ],
            buttonSpeed: 'fast',
            menuSpeed: 'fast'
        };
    });
    return ctrl;
});