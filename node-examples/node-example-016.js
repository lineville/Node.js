concatP('hello', 'world')
    .then(upperP.bind(this))
    .then(decorP.bind(this))
    .then(console.log);

