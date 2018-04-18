function myMiddleware(req, res, next) {
    // do what you need
    next();
}
app.use(myMiddleware);
