import React, { useState } from 'react'
import { IoMdMore } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import MobileComments from './MobileComments';
import { FaUserCircle } from "react-icons/fa";
import Tagged from './Tagged';


const SinglePost = ({post}) => {

  const [showMore, setShowMore] = useState(false)
  const [showMobCom, setShowMobCom] = useState(false)
  const [showTagged, setShowTagged] = useState(false)

  const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, similique atque commodi totam itaque assumenda, et odit nobis sit excepturi architecto ducimus laudantium at? Eaque nam ipsam voluptates numquam culpa"

  return (
    <div className='w-full flex flex-col tracking-tight'>
      <header className='flex py-2 pl-2 pr-3 gap-1 relative text-sm font-semibold items-center justify-start'>
      <div className={post.stories ?
      'flex flex-col items-center gap-2 relative justify-center w-8 h-8 rounded-full mr-1 mt-1 p-[1.5px] border-2 border-pink-500'
      :
      'flex flex-col items-center gap-2 relative w-8 h-8 rounded-full mr-1 mt-1 border-2 border-gray-200'}>
            <img
            className='w-full h-full rounded-full object-fill'
            src={post.pfp} alt="pro_pic" />
        </div>
      <span className={post.place !== "" ? 'flex gap-1 mb-2' : 
    'flex gap-1'}>{post.handleId}
        {post.verified && <MdVerified className=' text-blue-500 mt-1' />}
        </span>
        <span className='text-[10px] absolute font-normal bottom-0 left-12 mb-[2px]'>{post.place}</span>
       
        <span className='text-xl absolute right-3 top-3'>
        <IoMdMore />
        </span>
      </header>
      <main className='flex justify-center items-center relative'>
        <img
        className='flex w-full max-w-[28rem] min-h-80 max-h-[28rem]'
        src={post.content} alt="feed" />
        {post.tagged && 
        <span className='flex justify-center items-center p-1 text text-[10px] absolute left-3 bottom-3 bg-[#151515] opacity-90 rounded-full w-6 h-6 text-white' onClick={()=>setShowTagged(!showTagged)}>
          <FaUserCircle />
        </span>
        }
      </main>
      <span className='flex w-full h-10 items-center relative py-2 px-3 gap-3 text-xl'>
        <FaRegHeart/>
      <IoChatbubbleOutline onClick={()=>setShowMobCom(true)}/>
      <LuSend />
      <MdOutlineWatchLater className='absolute right-3'/>
      </span>
      <span className='flex text-xs w-full h-5 items-center pl-2 font-bold text-slate-950'>
       {post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} likes
      </span>
      <span className=' px-2 w-full h-auto text-xs'>
        <span className='font-bold flex-wrap'>{post.handleId} </span>
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
      <span className='text-gray-600 w-full h-4 pt-1 text-xs tracking-tight px-2' 
      onClick={()=>setShowMobCom(!showMobCom)}
      >
        View all {post.comments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} comments
      </span>
      <span className='text-[10px] text-gray-600 tracking-tight mb-1 pl-2 pt-2'>
        5 hours ago
      </span>

        {/* comment box */}

        {/* for mobile and small devices  */}


  
  <div className={showMobCom ? 'flex fixed top-0 left-0 right-0 w-full h-full z-40' : 'top-[40rem]'}>
<MobileComments showMobCom={showMobCom} setShowMobCom={setShowMobCom}/>
</div>

<div
className={showTagged ? 'flex fixed top-0 left-0 right-0 w-full h-full z-40' : 'top-[40rem]'}>
<Tagged showTagged={showTagged} setShowTagged={setShowTagged}/>
</div>

     
    </div>
  )
}

export default SinglePost