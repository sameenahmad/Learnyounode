module.exports = function app(dirName, ext, callBackChillax) {
  var fs = require("fs");
  var extension = "." + ext;
  var fileList=[];
  fs.readdir(dirName, function doneReading(err, files) {
    if (err) {
      return callbackChillax(err);
    } else {
      files.forEach(file => {
        if (file.includes(extension) === true) {
         fileList.push(file);
        }
      });
    }
     callBackChillax(null, fileList);
  });
};
