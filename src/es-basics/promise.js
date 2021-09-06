// Promise

function getRandomPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const destiny = Math.random();

            if (destiny > 0.5) {
                resolve();
            } else {
                 reject();
            }
        });
    });
}

getRandomPromise()
    .then(result => console.log('result :', result))
    .catch( err => console.log('got error ', err));