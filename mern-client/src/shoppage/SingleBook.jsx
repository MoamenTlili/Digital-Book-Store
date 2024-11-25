import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyNowModal from '../components/BuyNowModal';

const SingleBook = () => {
    const { _id, bookTitle, imageURL, authorName, bookDescription, bookPDFURL } = useLoaderData(); // Destructure _id from useLoaderData

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="book cover" className="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" src={imageURL} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{bookTitle}</h1>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{authorName}</h2>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <p className="leading-relaxed">{bookDescription}</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-4 mt-10">
                                <a href={bookPDFURL} className="min-w-[250px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded-md flex items-center justify-center">
                                    <span className="mr-1">Read PDF</span>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <BuyNowModal bookId={_id} bookTitle={bookTitle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default SingleBook;