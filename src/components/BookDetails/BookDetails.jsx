import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const booksData = useLoaderData();

    const params = useParams();
    const id = parseInt(params.bookId);
    const book = booksData.find(book => book.bookId === id)
    const {image, bookName} = book
    return (
        <div className='m-12'>
            <h2>Book Name: {bookName}</h2>
            <img className='w-36 mr-4' src={image} />
            <br />
            <button className='btn btn-outline mr-4 btn-accent'>Read</button>
            <button className='btn btn-accent'>Wish List</button>
        </div>
    );
   
};

export default BookDetails;