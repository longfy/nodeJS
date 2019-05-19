/**
 * 路由初步
 */
var http = require('http');
var url = require('url');
var Router = require('./models/router');
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if(request.url !== '/favicon.ico') {
    var pathname = url.parse(request.url).pathname;
    pathname = pathname.replace(/\//, '');
    Router[pathname](request, response);
    response.end('你好，世界！');
  }
}).listen(8000);