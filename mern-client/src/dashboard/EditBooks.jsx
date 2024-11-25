import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, prix}=useLoaderData();
  
  
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Religion",
    "Fantasy",
    "Historical",
    "Biography",
    "Autobiography",
    "Horror",
    "Memoir",
    "Children",
    "Mythology",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const prix = form.prix.value;

    const UpdateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      prix
    };
    //console.log(bookObj);

    //update a book's data
    fetch(`http://localhost:3000/book/${id}`, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UpdateBookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data);
      alert ("Book updated successfully")
    })


  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit book's data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*first row*/}
        <div className='flex gap-8'>
          {/*book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Enter Book Title" required defaultValue={bookTitle}/>
          </div>

          {/*author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Enter Author's Name" required defaultValue={authorName}/>
          </div>
        </div>

        {/*second row*/}
        <div className='flex gap-8'>
          {/*Image URL*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Cover" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Cover URL" required defaultValue={authorName}/>
          </div>

          {/*Category*/}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <label htmlFor='category' value="Book Category">Book Category</label>
            </div>

            <Select id='category' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((category) => {
                return (
                  <option key={category} value={category}>{category}</option>
                );
              })}
            </Select>
          </div>
        </div>

        {/*book description*/}
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Enter Book Description." required className='w-full' rows={5} defaultValue={bookDescription}/>

        {/*book pdf link*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Enter Book PDF URL" required defaultValue={bookPDFURL}/>
        </div>

        {/*book price*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="prix" value="prix" />
          </div>
          <TextInput id="prix" name='prix' type="text" placeholder="Enter New Price" required defaultValue={prix}/>
        </div>

        <div>
          <Button type="submit" className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Update Book</Button>
        </div>
      </form>
    </div>
  )
}
export default EditBooks