define(function() {
    return function errorControllerConstructor(module) {
        module.controller("errorController", function(view, model, module, page, $routing) {
            var controls = view.controls;
            var params = $routing.getParams();
            var errorMessage = params.find(function(p) {
                return p.key === "message";
            });
            var statusCode = params.find(function(p) {
                return p.key === "statusCode";
            });
            
            if (statusCode) {
                statusCode = JSON.parse(statusCode.value);
            }

            controls.errorText.html("<b>" + errorMessage.value + "</b>").css("color", "red");
        });
    };
});