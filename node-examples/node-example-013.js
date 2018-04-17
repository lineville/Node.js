function concat(a, b, callback) {
    setTimeout(function () {
        var r = a + b;
        callback(r);
    }, 0);
}

function upper(a, b, callback) {
    setTimeout(function () {
        var r = a.toUpperCase();
        callback(r);
    }, 0);
}

function decor(a, b, callback) {
    setTimeout(function () {
        var r = '*' + a + '*';
        callback(r);
    }, 0);
}
