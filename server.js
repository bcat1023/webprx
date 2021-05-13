var http = require('http');
var https = require('https');
var httpProxy = require('http-proxy');
var url = require('url');
var fs = require('fs');
const isIPv4 = require('net');
var cp = require("child_process");
const version = require('os');
var proxy = httpProxy.createProxyServer({});
https.createServer(function(req, res) {
    var q = url.parse(req.url, true);
  var filename = q.pathname;
  var reqip = req.connection.remoteAddress;
    if (404) {
        res.writeHead(404);
        res.write(`ERROR, 404, No webpage was found for this URL. Make sure its correct (at the moment https is not supported, try http://{url here}.com)`)
    }
    proxy.web(req, res, { target:`https://github.com`});
}).listen(3000);

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
  var filename = q.pathname;
  var reqip = req.connection.remoteAddress;
    if (404) {
        res.writeHead(404);
        res.write(`ERROR, 404, No webpage was found for this URL. Make sure its correct (at the moment https is not supported, try http://{url here}.com)`)
    }
    proxy.web(req, res, { target:`http://github.com`});
}).listen(3001);