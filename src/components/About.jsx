import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                A place where I can develop and create software for people to enjoy and utilize, that is where I see myself. My name is <span className='font-bold'>Alexis Bocanegra</span> and I aspire to become an incrediable software developer.
            </p>

            <br />
        
            <p className='text-xl'>
                I recently worked up the courage to begin my coding career through a bootcamp and gained knowledge in various langauges than you can find listed in my <Link to='experience' className='font-bold cursor-pointer underline text-cyan-600'>"Experience"</Link> section. I plan to continue to learn and grow as a developer by tackling new projects or debugging existing ones, no matter the challange. I can honestly say my coding journey has been a blast and I can't wait for what lies ahead. 

            </p>
        </div>
    </div>
  )
}

export default About