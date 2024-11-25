import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Shoppage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBooks(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>ALL Books List</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book =>
            <Card key={book._id} className="flex flex-col">
              <img src={book.imageURL} alt="" className='h-95' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>

              <Link to={`/book/${book._id}`} className="flex-grow">
                <button className='bg-blue-700 font-semibold text-white py-2 rounded w-full'>
                  Buy
                </button>
              </Link>
            </Card>)
        }
      </div>
    </div>
  )
}

export default Shoppage;
