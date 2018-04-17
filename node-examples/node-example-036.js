const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    // get all users.
});

app.get('/users/:id', (req, res) => {
    // get user with id
});

app.post('/users', (req, res) => {
    // create new user
});

app.put('/users:id', (req, res) => {
    // update user with id.
});

app.delete('/users:id', (req, res) => {
    // delete user with id
});

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});