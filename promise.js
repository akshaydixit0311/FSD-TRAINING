function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("f1");
            resolve();
        }, 4000);
    });
}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("f2");
            resolve();
        }, 5000);
    });
}

async function main() {
    try {
        await f1();
        await f2();
    }
    catch (err) {
        console.log(err);
    }
}

main();