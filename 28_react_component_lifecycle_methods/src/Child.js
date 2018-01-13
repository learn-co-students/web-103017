import React from 'react';

const Child = (props) => {

    // other than to display the lifecycle methods, there is no reason for Child to be a class
    // therefore, now it's just a presentational, stateless, functional component
    // How could we use destructuring to simplify the variable assignments below?

    const authors = props.book.volumeInfo.authors ? props.book.volumeInfo.authors.join(", ") : "no author listed"
    const title = props.book.volumeInfo.title ? props.book.volumeInfo.title : "no title listed"
    const image_url = props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.smallThumbnail : ""

    return <div className="book-card">
      <h2>{title}</h2>
      <p>by {authors}</p>
      <img src={image_url} alt={image_url ? "cover image" : "no cover image available"}/>
    </div>

}

export default Child
