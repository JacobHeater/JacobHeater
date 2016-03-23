define('jacobheater.angular.bootstrapper', ['pro', 'jacobheater.angular'], function (pro) {
    var time = 1000;
    var action = function (time) {
        pro.tryCatch(function () {
            angular.bootstrap($('html')[0], ['jacobheater']);
        }, function (ex) {
            console.log("Angular bootstrap failed to load module \"jacobheater\". Retrying module initialization...");
            setTimeout(function () {
                time += 100;
                action(time);
            }, time);
        });
    };
    action();
});