function checkPermissionMiddleware(req, res, next) {
    if(ok){
        next();
    } else {
        res.status(401);
    }

}

app.post('/users', checkPermissionMiddleware, (req, res) => {
    // create user
    const user = createUser(req.body);
    res.location('/users/' + user.id);
    res.status(201);
})
