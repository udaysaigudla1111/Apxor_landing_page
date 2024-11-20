import React from 'react'
import { FaLinkedin,FaTwitter,FaFacebook } from 'react-icons/fa'
const footerArray = [{
    title:"Solution",
    values:["User Onboarding","Feature Adoption","Conversions","App Engagement","Product Experimentation","User Research"]
    },
    {
        title:"Product",
        values:["Success Stories","Pricing","Data Platform"]
    },
    {
        title:"Resources",
        values:["Blog","Webinars","Guides & EBooks","Glossary","Developer Docs"]
    },
    {
        title:"Company",
        values:["About us","Careers","Contact us","Privacy Policy","Terms of Service"]
    }

]
const Footer = () => {
  return (
    <div className='bg-[#12314b] h-fit pb-24 text-white pt-14 px-24'>
        <div className='grid grid-cols-12 pb-16 border border-t-0 border-x-0 border-b-gray-500'>
            
            <div className='col-span-3 flex flex-col gap-7 '>
                <h1 className='text-2xl'>Ready to get started?</h1>
                <button className='bg-[#039be5] py-3  w-44 rounded-lg text-lg text-white'>Check Our Plans</button>
                <div className='flex flex-col mt-3 gap-1'>
                    <h1>#103, First Floor, Modern Profound Tech Park,</h1>
                    <h1>Survey No 12, Opp. Ramalayam,</h1>
                    <h1>Laxmi Cyber City, Whitefields, Kothaguda,</h1>
                    <h1>Kondapur, Hyderabad - 500084</h1>
                </div>
                <div>
                    <h1>sales@apxor.com</h1>
                </div>
            </div>
            <div className='col-span-9 flex justify-around'>
                {
                    footerArray.map((item)=>{
                        return <div className='flex flex-col gap-3'>
                            <h1 className='text-lg font-semibold'>{item.title}</h1>
                            <div>
                            {item.values.map((val)=>{
                                return <li className='list-none text-lg mb-4'>{val}</li>
                            })}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className='flex justify-between items-center mt-5'>
            <h1>Copyright @ 2024 Apxor Technology Solutions Pvt. Ltd</h1>
            <div className='flex gap-5'>
                <FaLinkedin className='size-5'/>
                <FaTwitter className='size-5'/>
                <FaFacebook className='size-5'/>
            </div>
        </div>
    </div>
  )
}

export default Footer