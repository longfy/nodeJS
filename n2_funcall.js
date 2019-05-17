/**
 * 函数的调用
 */
var http = require('http');
var otherFn = require('./models/otherFn')
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if(request.url != '/favicon.ico') {
    fn(response);
    otherFn.fn2(response);
    otherFn['fn3'](response);
    response.end('你好，世界！');
  }
}).listen(8000);

function fn(res) {
  res.write('hello, 我是fn1。<br/>');
}