import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'

//display all books
const ManageBooks = () => {
  const[allBooks,setAllBooks]=useState([]);
  useEffect(() =>{
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  },[]);
  /*.catch((error) => {
    console.log(error);
    setLoading(false);
  });*/

//delete a book
const handleDelete = (id) => {
  console.log(id);
  fetch(`http://localhost:3000/book/${id}`,{
    method: 'DELETE',
  }).then(res => res.json()).then (data => 
    {alert("Book Deleted successfully!");
    //Reload page
    window.location.reload();
  })
}  


  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'>Manage books</h2>
    
     {/*Table displaying Books' data */}
      <table className='w-full border-separate border-seperate border-spacing'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md'>Author</th>
              <th className='border border-slate-600 rounded-md'>Prices</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {book.bookTitle}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {book.authorName}
                </td>
                <td className='border border-slate-700 rounded-md text-center '>
                {book.prix}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/admin/dashboard/edit-books/${book._id}`}>
                    <AiOutlineEdit className='text-blue-500 mr-2 cursor-pointer' />
                  </Link>
                  <MdOutlineDelete className='text-red-500 cursor-pointer' onClick={() => handleDelete(book._id)} />
                </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default ManageBooks