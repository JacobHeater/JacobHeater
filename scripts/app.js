define(['muv.core'], function(muv) {
    return muv.app('jacobheater')
        .onInit(function() {
            this.src = "./views/";
            this.templates = "./templates/";
        })
        .cache()
        .ready();
});
