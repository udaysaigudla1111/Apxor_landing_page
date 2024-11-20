import React from 'react'
import pic1 from '../assets/IntegrationPic/65950737939aa155bf38d4b4_adjust logo.png'
import pic2 from '../assets/IntegrationPic/65950737939aa155bf38d4b9_apps flyer.png'
import pic3 from '../assets/IntegrationPic/659525816bd758cb3a50db5c_branch white loogo.png'
import pic4 from '../assets/IntegrationPic/65952582cfacb1215e26892f_mixpanal logo.png'
import pic5 from '../assets/IntegrationPic/65952582e3eee3cf041a09af_amplitude logo.png'
import pic6 from '../assets/IntegrationPic/659b818408197e3deeb27375_moenageg white logo.png'
const companyArray = [pic1,pic2,pic3,pic4,pic5,pic6]
const Integrations = () => {
  return (
    <div className='h-screen flex flex-col gap-20 items-center justify-center text-white bg-[#16202f]'>
        <div><h1 className='text-3xl font-bold'>Our <span className='text-[#039be5]'>Integrations</span></h1></div>
        <div><h1 className='text-xl'>Apxor allows you to integrate deeply with your favourite tools for easier transfer of data</h1></div>
        <div className='grid grid-cols-3 gap-x-32 gap-y-10' >
                {companyArray.map((pic)=>{
                   return <img src={pic} className='w-48 h-24 object-cover ' alt="" />
                })}
        </div>
    </div>
  )
}

export default Integrations