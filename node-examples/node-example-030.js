const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var stream = fs.createReadStream('./index.html');
    stream.pipe(res);
});
server.listen(8000);
