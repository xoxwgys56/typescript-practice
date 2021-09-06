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

/**
 * can resolve callback hell like bellow
 */
function errorHandler(err) {
    if (err) {
        console.log(err);
    }
    fetchDocument(url)
        .then(document => fetchAuthor(document), errorHandler)
        .then(author => fetchPostsFromAuthor(author), errorHandler)
        .then(posts => console.log('do something with posts'), errorHandler);
}