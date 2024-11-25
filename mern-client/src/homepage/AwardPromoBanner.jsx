import React from 'react'
import { Link } from 'react-router-dom'; 
import bookPic from "../assets/promofic.png";
const AwardPromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div >
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 National Books Award for Fiction Shortlist</h2>
                <Link to="/shop" className='mt-1 block'><button className='bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-black transition-all duration-300'>Explore</button></Link>
            </div>
            <div>
                <img src= {bookPic} alt="" className='w-96' />
            </div>
        </div>
    </div>
  )
}

export default AwardPromoBanner