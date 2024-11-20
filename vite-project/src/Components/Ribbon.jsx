import React from 'react'
import Marquee from 'react-fast-marquee'
import pic1 from '../assets/RibbonImages/65c08aca148e4c2b54418f38_Vedantu-Color.png'
import pic2 from '../assets/RibbonImages/65c08b19176f96ac45046d40_Gcash_Color (1).png'
import pic3 from '../assets/RibbonImages/65c08b36e635997fa2745bec_POrter.png'
import pic4 from '../assets/RibbonImages/65c08b45d9d0aadc58c6e8f1_ICICIC_COLOR (1).png'
import pic5 from '../assets/RibbonImages/65c08b54713eed670619b0f4_Tanishq-logo.png'
import pic6 from '../assets/RibbonImages/65c08b683915fa7faac6ce9a_TurtleMInt-Color.png'
import pic7 from '../assets/RibbonImages/65c08b99c960fc6db968ee19_5Paisa_Color.png'
import pic8 from '../assets/RibbonImages/65c08bb6ad4984d0751515da_Elo_Elo_Logo.png'
import pic9 from '../assets/RibbonImages/65c08afe4df04aca9fbbec4c_Dream2.png'

const clientArray = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9]

const Ribbon = () => {
  return (
    <div className='bg-[#172435] h-32 flex justify-evenly items-center p-6  gap-2'>
        <div className='text-white text-2xl border-r-2 border-r-[#039be5]  w-[450px] pr-14'>
            <h1 className=''>Top companies trust <span className='text-[#039be5]'>APXOR</span> to</h1> <h1> drive product engagement and growth</h1>
        </div>
        <div className=' pl-14  w-[1300px]'>
            <Marquee autoFill>
            {clientArray.map((item)=>{
                return <div>
                    <img src={item} alt="" className='w-30 h-44 object-cover pl-7 pr-7' />
                </div>
            })}
        </Marquee>
        </div>
    </div>
  )
}

export default Ribbon


{/* <div>
        <Marquee>
            {clientArray.map((item)=>{
                return <div>
                    <img src={item} alt="" className='w-20 h-20 object-cover' />
                </div>
            })}
        </Marquee>
        </div> */}