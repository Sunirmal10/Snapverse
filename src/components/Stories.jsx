import React from 'react'
import { storyData, userProfile } from '../Data'

const Stories = () => {
  return (
    <div className='flex w-full text-[10px] tracking-tighter font-medium px-3 py-4 h-28 overflow-hidden'>

        <div className='wrapper flex h-full gap-5'>
            {/* user */}
        <div className='flex flex-col items-center gap-2 border-[3px] border-slate-300 relative w-16 h-16 rounded-full bg-red-200'>
            <img
            className='w-full h-full rounded-full object-fill'
            src={userProfile?.pfp || "../assets/images/userpng.png"} alt="pro_pic" />
            <span>
                Your story
            <div className=' flex w-4 h-4 rounded-full absolute border-2 border-white bottom-0 right-0 text-center p-0 m-0 justify-center items-center text-white font-semibold bg-blue-500'>+</div>
            </span>
        </div>

        {/* other users */}

      { storyData?.map((item)=> (
            <div className='flex flex-col items-center gap-3 border-[3px] p-1 border-pink-500 relative w-16 h-16 rounded-full
            
            '
            key={item.id}
            >
            <img
            className='w-full h-full rounded-full object-fill'
            src={item.pfp || "../assets/images/userpng.png"} alt="pro_pic" />
            <span>
                {
                   
                    item.name.length > 10 ?  item.name.slice(0,10) + "..." : item.name 
                }
            </span>
        </div>
      ))  }
        </div>
        



    </div>
  )
}

export default Stories