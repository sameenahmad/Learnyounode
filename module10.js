var net = require("net");

    let date = new Date();
    let month = zeroCheck(date.getUTCMonth() + 1);
    let monthDate = zeroCheck(date.getDate());
    let hours = zeroCheck(date.getHours());
    let minutes = zeroCheck(date.getMinutes());
    let formattedDate = date.getFullYear() + "-" + month  + "-" + monthDate + " " + hours + ":" + minutes ;
    function zeroCheck(moment){
        return moment < 10 ? "0" + moment : moment;
    }

var server = net.createServer(function(socket) {
  socket.write(formattedDate);
  socket.end('\n');
}).on('error', ()=> { throw err;})
server.listen(process.argv[2]);
