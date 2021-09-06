/**
 * Promise Chain
 */

fetch('https://google.com')
    .then(response => {
        const {status} = response;
        return status;
    })
    .then(status => {
        // The request has status 200 !
        console.log(`The request has status ${status}!`);
    });