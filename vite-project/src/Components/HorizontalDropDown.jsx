import React from 'react'
import pic1 from '../assets/DropDown/65141cdd2e18aaaf6a836789_Union.png'
import pic2 from '../assets/DropDown/65141cdd2ffc98380ddb99a8_Group 8325.png'
import pic3 from '../assets/DropDown/65141cddaf0822ade5a0f3a1_Group.png'
import pic4 from '../assets/DropDown/65141cddbcc2e9571d2920b9_Group 8327.png'
import pic5 from '../assets/DropDown/65d2e1a69cb7c96fa5bde4ba_native.png'
import pic6 from '../assets/DropDown/663dfd2ab951d6cacb231504_story_icon.png'
import storygif from '../assets/Gifs/663dee95c664007ce493e6ce_Stories_Mock.gif'

const dropDownArray = [
    { title:'Stories',icon:pic6 },
    { title:'Native Cards', icon:pic5 },
    { title:'Badges',icon:pic2},
    { title:'Tooltips',icon:pic1},
    { title:'Coachmarks',icon:pic4},
    { title:'In App Messages',icon:pic2},
    { title:'Walkthroughs',icon:pic2},
    { title:'Surveys',icon:pic3},
    { title:'PIP Videos',icon:pic5}
]

const HorizontalDropDown = () => {
  return (
    <div className='relative mt-7 mx-auto  pt-10  flex flex-col'>
        <div className='flex justify-evenly items-center gap-1'>
            {
                dropDownArray.map((item,index)=>{
                    return <div key={index} className='flex items-center justify-center gap-2 py-6 px-3 rounded-b-none rounded-lg  bg-[#12314b] border-b border-b-orange-500'>                        
                        <img src={item.icon} className='w-4 h-4' alt="" />
                        <div className='text-base font-medium'>{item.title}</div>
                         </div>
                })
            }
        </div>
         <div className='bg-[#12314b] flex w-full h-[80vh] absolute top-[115px]'>
             <div className=' w-1/2  flex flex-col pr-48 pl-20 justify-center gap-4'>
   

          <h1 className='text-4xl font-semibold'>Stories</h1>
         <h1 className='text-gray-300 text-lg font-medium'>Stories, commonly popular with social media apps, are snippets of information/media shown for short span of time.</h1>
         <h1 className='text-gray-300 text-lg font-medium'>As Stories transcend into all commercial apps, they are enabling guidance for complex features of the apps, and increase user engagement.</h1>
         <button className='bg-[#039be5] py-4 rounded-lg font-bold text-base px-7 w-72'>Try it out</button>

 
               
             </div>  
             <div className='w-1/2 flex justify-center items-center'>
                 <img src={storygif} className='w-60 h-fit' alt="" />
             </div>
         </div>
       
    </div>
  )
}

export default HorizontalDropDown


