const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
    socket.on('hello-message', data => console.log(data));
});

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

http.listen(3000, () => {
    console.log('listening on port 3000');
});

