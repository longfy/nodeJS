/**
 * 读文件
 */
var http = require('http');
var url = require('url');
var Router = require('./models/router');
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if(request.url !== '/favicon.ico') {
    var pathname = url.parse(request.url).pathname.replace(/\//, '');
    Router[pathname](request, response);
  }
}).listen(8000);