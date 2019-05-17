/**
 * helloWrold
 */
var http = require('http') //导入http
http.createServer(function(request, response){ //创建一个server服务，request请求，response输出
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); //协议头
  if(request.url !=='/favicon.ico') { //清除二次访问/favicon.ico
    console.log('访问');
    response.write('hello wrold'); //输出的内容
    response.end('你好，世界'); //协议尾
  }
}).listen(8000); //监听80端口
console.log('Server running at http://127.0.0.1:8000/');