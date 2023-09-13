import React from 'react'
import navbar from '../assets/portfolio/navbar.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import notetaker from "../assets/portfolio/notetaker.png"
import volunteerquest from "../assets/portfolio/volunteerquest.png"
import beatspotify from "../assets/portfolio/beatspotify.png"
import quiz from "../assets/portfolio/quizsimulator.png"



const Portfolio = () => {

  const portfolio = [
    {
      id: 1,

      child: (
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          Demo
        </button>
      ),
      
      src: notetaker,
      href: "https://bocabooii.github.io/Express.js_Note-Taker/"
      
    },
    {
      id: 2,
      child: (
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          Demo
        </button>
      ),

      src: volunteerquest,
      href: "https://volunteer-quest.herokuapp.com/"
    },
    {
      id: 3,

      child: (
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          Demo
        </button>
      ),

      src: reactWeather,
      href: "https://bocabooii.github.io/Weather-Dashboard/"
    },
    {
      id: 4,

      child: (
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          Demo
        </button>
      ),

      src: beatspotify,
      href: "https://bocabooii.github.io/Beat-Spotify/"
    },
    {
      id: 5,

      child: (
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          Demo
        </button>
      ),

      src: quiz,
      href: "https://bocabooii.github.io/Quiz-Simulator/"
    },
    {
      id: 6,

      child: (
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>
          N/A
        </button>
      ),

      src: navbar,
    },
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here!</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

              {
                portfolio.map(({ id, src, child, href }) => (
                  <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                  <div className='flex items-center justify-center'>
                    <a href={href}
                     target='_blank'
                     rel="noreferrer"
                     >
                      {child}
                    </a>
                  </div>
              </div>

              ))}
            </div>

      </div>
    </div>
  );
};

export default Portfolio