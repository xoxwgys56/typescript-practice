/**
 * `async` and `await`
 * 
 * added ECMA script 2017
 */

async function returnTheAnswer() {
    return 42;
}

async function returnThePromise() {
    return new Promise((resolve, reject) => {
        const DELAY = 300;

        setTimeout(() => {
            console.log(`logging after ${DELAY} ms`)
        }, DELAY)
    });
}

if (false) {
    // Promise case

    const implicitlyReturnedPromise = returnTheAnswer();
    // is instance of `Promise` type?
    console.log(implicitlyReturnedPromise instanceof Promise);
    implicitlyReturnedPromise
        .then(answer => console.log(answer));
    
    const explicitlyReturnedPromise = returnThePromise();
    console.log(explicitlyReturnedPromise instanceof Promise);
    explicitlyReturnedPromise
        .then(result => console.log(result));
}

async function asyncExample() {
    const a = await new Promise(resolve => resolve(42));
    const b = await 42;
    let c;

    try {
        c = await new Promise((_, reject) => reject('Error on await'));
    } catch (e) {
        console.log(e);
    }

    console.log(`a : ${a}, b : ${b}, c : ${c}`);
}

if(true) {
    // async await case

    asyncExample();
}