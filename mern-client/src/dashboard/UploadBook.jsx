import React, { useState } from 'react';
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";

const UploadBook = () => {
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
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const prix = form.prix.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      prix
    };
    console.log(bookObj);

    //send added book data to DB and alert of successful addition
    fetch("http://localhost:3000/upload-book",{method: "POST", headers: {"Content-Type":"application/json",},
    body: JSON.stringify(bookObj)}).then(res => res.json()).then(data => {
      console.log(data);
      alert ("Book added successfully")
      //refresh the form after successfully adding a book
      form.reset();
    })

  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/*first row*/}
        <div className='flex gap-8'>
          {/*book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Enter Book Title" required />
          </div>

          {/*author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Enter Author's Name" required />
          </div>
        </div>

        {/*second row*/}
        <div className='flex gap-8'>
          {/*Image URL*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Cover" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Cover URL" required />
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
        <Textarea id="bookDescription" name='bookDescription' placeholder="Enter Book Description." required className='w-full' rows={5} />

        {/*book pdf link*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Enter Book PDF URL" required />
        </div>

        {/*book price*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="prix" value="prix" />
          </div>
          <TextInput id="prix" name='prix' type="text" placeholder="Enter Book Price" required />
        </div>


        <div>
          <Button type="submit" className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Upload New Book</Button>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
