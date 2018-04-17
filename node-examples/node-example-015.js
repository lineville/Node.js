function concatP(a, b) {
    return new Promise(resolve => {
        concat(a,b,resolve);
    });
}

function upperP(a) {
    return new Promise(resolve => {
        upper(a,resolve);
    });
}

function decorP(a) {
    return new Promise(resolve => {
        concat(a,resolve);
    });
}
