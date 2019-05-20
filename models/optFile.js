var fs = require('fs');
module.exports = {
  readFileSync: function(path, response) { //同步读取
    var data = fs.readFileSync(path, 'utf-8');
    return data;
  },
  readFileAsync: function(path, recall) { //异步读取
    fs.readFile(path, function(err, data) {
      if (!err) {
        recall(data.toString());
      } else {
        console.log(err)
        recall(err.toString());
      }
    });
  },
  readImg: function(path, response) { //读取图片，二进制形式
    fs.readFile(path, 'binary', function(err, filedata) {
      if (!err) {
        response.write(filedata, 'binary');
        response.end();
      } else {
        console.log(err);
        recall(err.toString());
      }
    });
  },
  writeFileSync: function(path, data, recall) { //同步写入
    fs.writeFileSync(path, data);
    recall('文件同步写入成功！');
  },
  writeFileAsync: function(path, data, recall) { //异步写入
    fs.writeFile(path, data, function(err) {
      if (err) {
        throw err;
      }
      recall('文件异步写入成功！');
    });
  }
}