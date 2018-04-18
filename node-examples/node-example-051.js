const app = require('express')();
const http = require('http').server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
    console.log('new user is connected');
});

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});