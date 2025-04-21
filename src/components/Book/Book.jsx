import { key } from 'localforage';
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId, image, bookName, author, tags, category} = book
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className='bg-gray-200 py-8'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-4">
                        {
                            tags.map((tag, index) => <div key={index} className="badge badge-secondary badge-xs">{tag}</div>)
                        }
                    </div>

                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        
        </Link>
    );
};

export default Book;