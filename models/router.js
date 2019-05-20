var optFile = require('./optFile');
var url = require('url');
var querystring = require('querystring'); // post需导入
function getRecall(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  function recall(data) {
    response.write(data);
    response.end('');
  }
  return recall;
}
module.exports = {
  login: function(request, response){
    /**
     * get方式接收参数
     */
    // var rdata = url.parse(request.url, true).query;
    // // console.log(rdata);
    // if(rdata['userName'] != undefined) {
    //   console.log(rdata['userName']);
    // }
    /**
     * post 方式接收参数
     */
    var post = '';
    request.on('data', function(chunk) {
      post += chunk;
    });
    //注意异步
    request.on('end', function() {
      post = querystring.parse(post);
      console.log(post);
      var recall = getRecall(request, response);
      optFile.readFileAsync(`./views/login.html`, recall);
    });
  },
  register: function(request, response){
    var recall = getRecall(request, response);
    optFile.readFileAsync(`./views/login.html`, recall);
  },
  writeFile: function(request, response) {
    var recall = getRecall(request, response);
    optFile.writeFileAsync(`./views/test.txt`, '暴风雨来临', recall);
  },
  getImg: function(request, response) {
    response.writeHead(200, {'Content-Type': 'image/jpeg'});
    optFile.readImg('./images/美女 - 48.jpg', response);
  }
}