/** 
 * call-back hell example 
 * not runnable
*/

fetchDocument(url, function(err, document) {
    if (err) {
        console.log(err);
    } else {
        // 
        fetchAuthor(document, function(err, author) {
            if (err) {
                console.log(err);
            } else { 
                // 
                fetchPostsFromAuthor(author.id, function(err, posts) {
                    if (err) {
                        console.log(err);
                    } else {
                        // do something with posts
                    }
                });
            }
        });
    }
});