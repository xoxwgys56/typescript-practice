// Iterable protocol

import makeIterator from "./iterator_protocol.js";


if (true) {
    const iterableObj = {
        [Symbol.iterator]() {return makeIterator([1, 2, 3]);}
    };
    
    // stop iterate when done === false
    // for (const elem of iterableObj) {
    //     console.log(elem);
    // }

    console.log(...iterableObj);
}