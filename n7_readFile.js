/**
 * 读取图片
 */
var http = require('http');
var optFile = require('./models/optFile');
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'image/jpeg'});
  if(request.url !== '/favicon.ico') {
    optFile.readImg('./images/美女 - 48.jpg', response);
  }
}).listen(8000);