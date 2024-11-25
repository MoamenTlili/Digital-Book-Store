import React from 'react'
import AwardwinningBG from "../assets/awardwin.png"
import { Link } from 'react-router-dom'; 

const Awardwinning = () => {
  return (
    <div className='px-4 lg:px-24 my-28 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src= {AwardwinningBG} alt="" className='rounded md:w-11/13'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Browse Our Selection of <span className='text-red-600'>Award Winning Books</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>
            Celebrate the Pinnacle of Literary Achievement with Our Award-Winning Collection. Browse our hand picked selection of renowned and influential Books
            </p>

            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>100+</h3>
                    <p className='text-base'>A List Of 150 Books</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>300+</h3>
                    <p className='text-base'>Monthly readers</p>
                </div>

                <Link to="/shop" className='mt-1 block'><button className='bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-black transition-all duration-300'>Explore</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Awardwinning