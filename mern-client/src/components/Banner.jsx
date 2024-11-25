import React from 'react'
import BannerCard from '../homepage/BannerCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000 
    };

    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col py-40'>
                <Slider {...settings}>
                    {/* First Slide */}
                    <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                        {/* Left side */}
                        <div>
                            <h1 className='text-4xl font-bold leading-snug text-black'>
                                <span className='text-blue-700'>Welcome to Bookshelf,</span> your digital library
                            </h1>
                            <h2 className='text-2xl leading-snug text-black'>
                                Every page is a new adventure, <span className='text-blue-700'>Every book is a new realm.</span>
                            </h2>
                            <div className='space-y-8'>
                                <input type="search" name="search" id="search" placeholder='search a book' className='py-2 px-2 rounded-sm outline-none' />
                                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>search</button>
                            </div>
                        </div>
                        {/* Right side */}
                        <div>
                            <BannerCard />
                        </div>
                    </div>

                    {/* Second Slide */}
                    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
                        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'> 
                            {/*left side */}
                            <div className='md:w-1/2'>
                                <h1 className='text-4xl font-bold leading-snug text-blue-700'>Feature Of The Day!</h1>
                                <h2 className='text-3xl font-bold leading-snug text-black'>Fahrenheit 451</h2>
                                <p className='text-lg text-gray-700 font-medium mb-4'>by Ray Bradbury</p>
                                <p className='text-lg text-gray-700 mb-4'>Check out the highly acclaimed international bestseller dystopian story from Ray Bradbury. With themes and messages that transcend time, this book is still as relevant as ever.</p>
                            </div>

                            {/*right side */}
                            <div className='md:w-1/2 flex flex-col items-center'>
                                <img src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg' alt='Fahrenheit 451' className='w-64 h-auto mb-4' />
                                <button className='bg-blue-700 px-8 py-3 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
                                    <a href='http://localhost:5173/book/66292bca2de04ee2d985f59a' target='_blank' rel='noopener noreferrer'>Check It Out</a>
                                </button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Banner;