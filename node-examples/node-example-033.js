const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/about') {
        res.write('<h1>About Node.js</h1>');
    } else {
        res.write('<h1>Hello from Node.js</h1>');
    }
    res.end();
}).listen(8000);
