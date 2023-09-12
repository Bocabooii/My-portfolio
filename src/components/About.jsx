import React from 'react'

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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ullam, est perferendis qui ipsa facilis modi dolorum quae rerum debitis alias animi dolorem, id unde possimus, nisi commodi beatae illum! Quaerat autem architecto velit quia ipsa qui reiciendis numquam dolore cumque inventore perspiciatis explicabo repellat, fugit nobis earum ullam quidem.
            </p>

            <br />
        
            <p className='text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, aliquam quibusdam earum quos, ipsum nesciunt, aperiam doloremque magni similique soluta itaque deserunt mollitia autem quaerat reiciendis! Perspiciatis, inventore dignissimos unde dolorum est accusantium eius itaque sapiente explicabo, nihil fugit aspernatur cum nam? Facere beatae veritatis tenetur sapiente eum cupiditate eveniet.
            </p>
        </div>
    </div>
  )
}

export default About