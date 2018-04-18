function myFunc(foo, ...ba) {
    console.log(foo, bar);
}

myFunc(1);
myFunc(1, 3);
myFunc(1,3,5);

function myFunc2(foo, bar) {
    console.log(foo, bar);
}

var args = [1,2];
myFunc2(...args);

