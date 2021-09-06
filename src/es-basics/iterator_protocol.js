// Iterator protocol

function makeIterator(array) {
    let nextIndex = 0;

    return {
        next : function() {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false} : {done: true};
        }
    };
}

if (false) {
    // NOTE equivalent of python's if __name__ == "__main__"
    // no. not work
    const iter = makeIterator([1, 2, 3]);
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());
}

export default makeIterator;