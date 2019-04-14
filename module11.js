var fs=require('fs');
var http=require('http');
var path=process.argv[3];
const server= http.createServer((req, res)=>{
    const readStream=fs.createReadStream(path, 'utf-8')
    res.writeHead(200, {'content-type': 'text/html'})
    readStream.pipe(res);
}).listen(process.argv[2]);