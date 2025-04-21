import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadingList } from "../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData(); // worst way to display listed books(should not load all data to display some books)

    useEffect(() => {
    
    const storedReadingList = getStoredReadingList();
    const storedReadingListInt = storedReadingList.map(id => parseInt(id));
    
    const readBookList = allBooks.filter(book => storedReadingListInt.includes(book.bookId));
    setReadList(readBookList);

    
    }, [allBooks] )
    return (
      <div>
           
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Reading List" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">{
                    
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)

                    }</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish List" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
            </div>
      </div>
    );
};

export default ListedBooks;