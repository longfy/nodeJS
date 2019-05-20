/**
 * 参数接收
 */
var http = require('http');
var url = require('url');
var Router = require('./models/router');
http.createServer(function(request, response) {
  if(request.url !== '/favicon.ico') {
    var pathname = url.parse(request.url).pathname.replace(/\//, '');
    try {
      Router[pathname](request, response);
    } catch(err) {
      console.log(err);
      response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      response.write(err.toString());
      response.end('');
    }
    console.log('server执行完毕');
  }
}).listen(8000);