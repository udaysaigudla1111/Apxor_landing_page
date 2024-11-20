import React from 'react'
import logo from '../assets/6180e1bd584667cb460c6186_apxor-logo-white-4x.png'
import {FaAngleDown} from 'react-icons/fa'

const arr = ['Solutions','Success Stories','Resources','Pricing','Company']
const Navbar = () => {
  return (
    <div className='sticky z-10 left-0 top-0 border-b-2 border-gray-600 grid gap-2 grid-cols-12 right-0 h-40  p-6 bg-[#16202f] text-white'>
       
        <div className='col-span-3  flex items-center'><img src={logo} alt="logo" className='h-10 w-30 bg-' /></div>

        <div className='flex justify-center items-center gap-5 col-span-6'>

            {arr.map((item,index)=>{
            return (<div key={index} className='flex items-center gap-9'><div className='text-xl'>{item}</div> {item!=='Success Stories'&& item!=='Pricing'? <FaAngleDown className='size-6'/> :<div></div> }</div>)
        })}
        
        </div>

        <div className='flex gap-5 col-span-3 items-center justify-center '>
            <div><button className='bg-[#039be5] border-2 border-blue-800 py-4 px-10 rounded-lg font-bold text-lg '>Book a Demo</button></div>
            <div className='py-4 px-16 border-[#039be5] border-2 rounded-lg text-lg font-bold'>Login</div>
        </div>
       
    </div>
  )
}

export default Navbar