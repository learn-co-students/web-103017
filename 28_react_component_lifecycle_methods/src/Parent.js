import React from 'react';
import Child from './Child';

// since we're not holding state and no longer demonstrating logs from lifecycle methods,
// we've moved Parent down to a stateless component as well.  Feel free to turn Parent
// and Child back into class components is you'd like to play around with the lifecycle methods!
const Parent = (props) => {

    console.log("In Parent render, props.books are", props.books)
    const books = props.books.map((book, i) => <Child book={book} key={i}></Child>)
    return books
}

export default Parent
