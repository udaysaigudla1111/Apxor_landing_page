import React from 'react'
import girlpic from '../assets/Dashboard/6513cf0943684ca9943576c2_kthm kthm 1 (1).png'

import icon3 from '../assets/Dashboard/Icons/6513c87176a28d3f84fe6d45_conversion_path_FILL0_wght400_GRAD0_opsz48 (1) 1 (1).png'
import icon2 from '../assets/Dashboard/Icons/6513c871af140d429daa9433_motion_mode_FILL0_wght400_GRAD0_opsz48 1 (1).png'
import icon1 from '../assets/Dashboard/Icons/6513c87176a28d3f84fe6d21_Vector__1___2_-removebg-preview.png'
import Ribbon from './Ribbon'

const dashBoardArray = [
    { 
        icon:icon1,
        title:"Simplify user onboarding journey"
    },
    {
        icon:icon2,
        title:"Accelerate feature adoption"
    },
    {
        icon:icon3,
        title:"Boost retention and conversions"
    }
]

const Dashboard = () => {
  return (
    <div className='bg-[#16202f] text-white pl-9 pr-7 pt-14 '>
        <h1 className='text-[#039be5] text-5xl font-semibold '>Product Engagement <span className='text-white'>Made Easy</span></h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 h-[450px]'>

            <div className='col-span-1 pt-7 flex gap-7 flex-col text-gray-300 h-fit'>
            <div className='text-2xl font-semibold'>
            <h1>Your growth and product teams can launch immersive </h1>
            <h1>expeirences within 15 minutes. No coding required</h1>
            </div>
            <div className='flex flex-col'>
                {
                    dashBoardArray.map((item,index)=>{
                        return (<div className='flex items-center mb-4 rounded-lg gap-3 bg-[#17344d] w-[420px] py-2 px-3'>
                            <img src={item.icon} alt="" className='w-10 h-10 object-cover' />
                            <h1 className='text-white text-xl font-medium'>{item.title}</h1>
                             </div>)
                    })
                }
            </div>
            <div className=''>
                <button className='text-white bg-[#039be5] py-3 px-5 rounded-lg text-xl font-bold'>Book a Demo</button>
            </div>
            </div>

            <div className='col-span-1 -translate-y-16 lg:block hidden'>
            <img src={girlpic} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard