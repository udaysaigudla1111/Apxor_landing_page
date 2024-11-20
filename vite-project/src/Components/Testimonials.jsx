import React from 'react'
import CarouselTestimony from './CarouselTestimony'

const Testimonials = () => {
  return (
    <div className='bg-[#16202f] h-fit flex flex-col pt-32 items-center  gap-12 text-white '>
        
        <div className='text-4xl font-bold'>What do our <span className='text-[#039be5]'>clients</span> say about us? </div>
        <div className='text-xl items-center flex flex-col gap-2 '>
            <h1>Meet some of our happy customers who are using Apxor successfully to engage their users at every</h1>
            <h1>point of their journey.  Our clients are able to build apps that users love, and also are building</h1>
            <h1>businesses that partners love.</h1> 
         </div>
         <div className=''>
            <CarouselTestimony/>
         </div>
    </div>
  )
}

export default Testimonials