/**
 * 路由改造
 */
var http = require('http');
var url = require('url');
var Router = require('./models/router');
http.createServer(function(request, response) {
  if(request.url !== '/favicon.ico') {
    var pathname = url.parse(request.url).pathname.replace(/\//, '');
    Router[pathname](request, response);
  }
}).listen(8000);