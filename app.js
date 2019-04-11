var fs = require("fs");
var process = require("process");
var dirName = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(dirName, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach(file => {
      if (file.includes(extension) === true) {
        console.log(file);
      }
    });
  }
});
