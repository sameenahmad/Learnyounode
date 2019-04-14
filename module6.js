var app=require('./module6-exports.js')
var dirName = process.argv[2];
var ext= process.argv[3];
function callbackattack(err, data) {
  
    if (err) console.log(err)
   console.log(data);
}
app(dirName, ext, callbackattack);
