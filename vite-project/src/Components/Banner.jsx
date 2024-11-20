import React from 'react'
import pic from '../assets/6721d28c410bd8f9de9df2aa_data_platform.svg'

const Banner = () => {
  return (
    <div className='h-[85px] bg-gradient-to-r flex gap-14 justify-center items-center from-[#2b95cb] to-[#d47136] text-white'>
        <div className='flex items-center gap-4 '>
            <img src={pic}  alt="Db pic" className='w-6 h-6' />
            <h1 className='text-sm font-medium'>Data Platform</h1>
        </div>
       
        <div className='text-md font-bold'>Elevate Data Management : Deploy Infrastructure in a week</div>
        <div>
            <button className='bg-[#002845] py-2 text-sm px-7 font-bold rounded-md'>Learn More</button>
        </div>
    </div>
  )
}

export default Banner