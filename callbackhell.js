function test1(cb) {
    setTimeout(() => {
        console.log('test1');
        cb();
    }, 4000);
}

function test2(cb) {
    setTimeout(() => {
        console.log('test2');
        cb();
    }, 5000);
}
function test3(cb) {
    setTimeout(() => {
        console.log('test3');
        cb();
    }, 6000);
}

test1(() => {
    test2(() => {
        test3(() => {
            console.log('done');
        });
    });
});