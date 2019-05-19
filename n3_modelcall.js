/**
 * 调用模块
 */
var http = require('http');
var User = require('./models/user');
var Teacher = require('./models/teacher');
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if(request.url !=='/favicon.ico') {
    // user = new User(1, '李四', 18);
    // user.enter();
    teacher = new Teacher(1, '王五', 20);
    teacher.enter();
    teacher.teach(response);
    response.end('你好，世界');
  }
}).listen(8000);
