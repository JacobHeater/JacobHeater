//ExpressJS Server for Jacob Heater site
(() => {
    var path = require('path');
    var express = require('express');
    var app = express();
    var port = 1524;
    var staticUrls = ['/scripts', '/resources', '/modules', '/controllers', '/styles', '/views', '/templates', '/thirdparty'];

    //Make these directories public
    staticUrls.map(url => app.use(url, express.static(__dirname.concat(url))));
    //Make sure that the app root serves index.html
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname.concat('/index.html')));
    });

    app.listen(port, function() {
        console.log(`Server is listening on port ${port}...`);
    });
})();
