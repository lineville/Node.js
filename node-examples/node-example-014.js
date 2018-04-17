
concat('hello', 'world', r1 => {
    upper(r1, r2 => {
        decor(r2, r3 => {
            console.log(result, r3);
        })
    })
});