const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    const users = [{id: 1, name: 'Emanuale'}, {id: 2, name: 'Tessa'}];
    res.send(users);
});

app.listen(8000, () => {
    console.log('app listening on port 8000');
});