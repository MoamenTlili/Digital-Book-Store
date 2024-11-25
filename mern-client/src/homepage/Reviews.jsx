import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

//import react icons
import { FaStar } from 'react-icons/fa6';

import { Avatar } from "flowbite-react";
import profilepic from "../assets/profile.png"

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Platform Reviews</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* text */}
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi pariatur ex eos rerum ea ipsa est odit officia voluptate et, obcaecati quasi deleniti architecto numquam necessitatibus, dolores mollitia? Totam, possimus.</p>

                    <div className="flex flex-wrap gap-3 mt-2">
                        <Avatar img={profilepic} alt="avatar of Jese" rounded className='w-10 mb-4' />

                        <h5 className='text-lg font-medium'>Meilyn Yuu</h5>
                    </div>

                </div>
            </div>
        </SwiperSlide> 
      </Swiper>
        </div>
    </div>
  )
}

export default Reviews