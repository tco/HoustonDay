var stat = require('node-static'),
    fileServer = new stat.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(8080);
