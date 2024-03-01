import React, { useState } from 'react'
import { IoMdMore } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";

const SinglePost = () => {

  const [showMore, setShowMore] = useState(false)

  const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique atque commodi totam itaque assumenda, et odit nobis sit excepturi architecto ducimus laudantium at? Eaque nam ipsam voluptates numquam culpa"

  return (
    <div className='w-full flex flex-col tracking-tight'>
      <header className='flex py-2 pl-2 pr-3 gap-1 relative text-sm font-semibold items-center justify-start'>
      <div className='flex flex-col items-center gap-2 border-2 border-slate-200 relative w-7 h-7 rounded-full mr-1 mt-1'>
            <img
            className='w-full h-full rounded-full object-fill'
            src="https://i.pinimg.com/736x/0e/89/37/0e8937e6a2aa4d547fc62d5aa218d1dd.jpg" alt="pro_pic" />
        </div>
        <span>kevin_smith</span>
        <MdVerified className=' text-blue-500 mt-1' />
        <span className='text-xl absolute right-3 top-3'>
        <IoMdMore />
        </span>
      </header>
      <main>
        <img
        className='flex w-full h-[28rem] max-h-[30rem]'
        src="https://i.pinimg.com/736x/0e/89/37/0e8937e6a2aa4d547fc62d5aa218d1dd.jpg" alt="feed" />
      </main>
      <span className='flex w-full h-10 items-center relative py-2 px-3 gap-3 text-xl'>
        <FaRegHeart/>
      <IoChatbubbleOutline />
      <LuSend />
      <MdOutlineWatchLater className='absolute right-3'/>
      </span>
      <span className='flex text-xs w-full h-5 items-center pl-2 font-bold text-slate-950'>
        1,111 likes
      </span>
      <span className=' px-2 w-full h-auto text-xs'>
        <span className='font-bold flex-wrap'>kevin_smith </span>
        { showMore ?
        text 
        :
           text.length > 100 ?
           <span>
              { text.slice(0,90) }... <span className='text-gray-600'
              onClick={()=>setShowMore(true)}
              >more</span>
           </span>   
           : text
        }
      </span>
      <span className='text-gray-600 w-full h-4 pt-1 text-xs tracking-tight px-2'>
        View all 100 comments
      </span>
      <span className='text-[10px] text-gray-600 tracking-tight mb-1 pl-2 pt-2'>
        5 hours ago
      </span>
    </div>
  )
}

export default SinglePost