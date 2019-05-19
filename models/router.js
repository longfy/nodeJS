var optFile = require('./optFile');
module.exports = {
  login: function(request, response){
    function recall(data) {
      response.write(data);
      response.end('');
    }
    optFile.readFileAsync(`./views/login.html`, recall);
  },
  register: function(request, response){
    function recall(data) {
      response.write(data);
      response.end('');
    }
    optFile.readFileAsync(`./views/login.html`, recall);
  },
  writeFile: function(request, response) {
    function recall(data) {
      response.write(data);
      response.end('');
    }
    optFile.writeFileAsync(`./views/test.txt`, '暴风雨来临', recall);
  }
}