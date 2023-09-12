import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {FaCircleArrowRight} from 'react-icons/fa6' 
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Im A Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Growing web developer seeking a career in web development to improve on my skills and be a viable asset to the company. 
                Enjoy desinging software with Mongo, Express js, React, Node, and GraphQl. 
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <FaCircleArrowRight size={15} className='mx-2'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="My profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home