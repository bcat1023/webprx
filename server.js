console.log(`Application Started`);
var http = require('http');
var url = require('url');
var request = require('request');

http.createServer(onRequest).listen();
console.log(`Http Server Online`);
console.log(`Listing On localhost:3000`)
function onRequest(req, res) {

    var queryData = url.parse(req.url, true).query;
    if (queryData.url) {
        request({
            url: queryData.url
        }).on('error', function(e) {
            res.end(e);
        }).pipe(res);
    }
    else {
        res.end("No url found, 404, Check the url.");
    }
}