define(['./dessertJS/dessert.core'], function(dsrt) {
    require([
        "./modules/slideshow",
        "./controllers/slideshow",
        "./modules/blogList",
        "./controllers/blogList",
        "./modules/error",
        "./controllers/error"
    ], function(
        $slideshowModule,
        $slideshowController,
        $blogModule,
        $blogController,
        $errorModule,
        $errorController
    ) {

        var app = dsrt.app('jacobheater')
            .onInit(function() {
                this.src = "./views/";
                this.templates = "./templates/";
                this.httpHandlers.page.addHandler("page404", 404, function(xhr, $routing) {
                    console.log(xhr);
                    $routing.setRoute("/pages/error", [{
                        key: "message",
                        value: xhr.responseText
                    }, {
                        key: "statusCode",
                        value: 404
                    }]);
                });
            })
            .cache()
            .ready()
            .init();


        var slideshowModule = $slideshowModule(app);
        $slideshowController(slideshowModule);
        var blogModule = $blogModule(app);
        $blogController(blogModule);
        var errorModule = $errorModule(app);
        $errorController(errorModule);

    });
});