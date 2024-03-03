import React, { useEffect, useState } from 'react'
import { IoMdMore, IoIosMore, IoMdArrowDropup } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import MobileComments from './MobileComments';
import { FaUserCircle } from "react-icons/fa";
import Tagged from './Tagged';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { taggedUSers } from '../Data';
import { PiSmiley } from "react-icons/pi";


const SinglePost = ({post}) => {

  const [showMore, setShowMore] = useState(false)
  const [showMobCom, setShowMobCom] = useState(false)
  const [showTagged, setShowTagged] = useState(false)
  const [showTaggedLarge, setShowTaggedLarge] = useState(false)

  const [windowWidth, setWindowWidth] = useState()



  const handleResize = (width) => {
    setWindowWidth(width)

    // const pageClass = document.querySelector(".swiper-pagination");

  }

  const showTagFunction = () => {

    console.log(windowWidth)

   if (windowWidth >= 768) setShowTaggedLarge(!showTaggedLarge)


    
  
}

  useEffect(() => {
    
    window.addEventListener('resize', handleResize(window.innerWidth));

  }, [windowWidth])

  return (
    <div className='xxs:w-[320px] xs:w-[425px] max-w-[425px] flex flex-col tracking-tight relative'>
      <header className='flex py-2 pl-2 pr-3 md:pl-0 md:pr-0 gap-1 relative text-sm font-semibold items-center justify-start'>
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
        <span className='text-gray-400 px-[1px]'>•</span>
        <span className=' hidden sm:block text-[10px] text-gray-400 tracking-tight mt-[2px]'>
        2d
      </span>
        </span>
        <span className='text-[10px] absolute font-normal bottom-0 left-12 md:left-11 mb-[2px]'>{post.place}</span>
       
        <span className= { windowWidth > 768 ? 'text-xl absolute right-0 top-4' : 'text-xl absolute right-0 top-4'}>
       { windowWidth > 768 ? <IoIosMore className='' /> : <IoMdMore />}
        </span>
      </header>

      {/* main post - img or video */}
      
      <main className='flex justify-center w-full items-center relative'
     onClick={showTagFunction}
      >
      <Swiper
        pagination={{
          dynamicBullets: window.innerWidth <= 425 ? true : false,
          dynamicMainBullets: 2,
         
        }}
        navigation={
          window.innerWidth > 425 && true
          }
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       { post.content.map(
        (item, index) => (
          <SwiperSlide key={index}>

            {/* image */}

          <img
          className={post.content.length > 1 ? 'flex justify-center w-[320px] xs:w-[425px] max-w-[425px] h-[340px]' : 'flex w-[425px] min-h-72 max-h-[400px]'}
          src={item} alt="feed"
          
          />

          {/* tag icon */}

           {post.tagged && 
        <span className='flex justify-center items-center p-1 text text-[10px] absolute left-3 bottom-3 z-10 bg-[#151515] opacity-90 rounded-full w-6 h-6 text-white' onClick={()=>setShowTagged(!showTagged)}>
          <FaUserCircle />
        </span>
        }

        {/* tags for large screen */}

{ post.tagged && showTaggedLarge && <div className={ 'flex flex-col gap-2 absolute bottom-4 right-2 z-50'}>
  {
    taggedUSers.map((item)=>(
      <span
      className='flex bg-[#151515] relative opacity-90 w-full rounded pt-1 pb-2 px-3 font-medium tracking-tight justify-center items-center text-white'
      key={item.userId}>
        <IoMdArrowDropup className='absolute bg-transparent text-3xl opacity-90 text-[#151515] bottom-[22px]'/>
        {item.handleId}</span>
    ))
  }
</div>}

          </SwiperSlide>
       )
         
       ) }

      </Swiper>
      </main>

      
       {/* reactions -like, comment, share and save */}
       
       <span className={ windowWidth < 768 ? 'flex w-full max-w-[425px] h-10 items-center py-2 px-3 pt-2 gap-3 text-xl' :  'flex w-full max-w-[425px] h-10 items-center py-2 px-0 pt-2 gap-3 text-xl'}>
        <FaRegHeart/>
      <IoChatbubbleOutline onClick={()=>setShowMobCom(true)}/>
      <LuSend />
      <MdOutlineWatchLater className={ windowWidth < 768 ? 'absolute right-3' : 'absolute right-0' }/>
      </span>
     
      
      <span className='flex text-xs w-full h-5 items-center pl-2 font-bold text-slate-950'>
       {post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} likes
      </span>
        {/* caption */}
      <span className=' px-2 w-full h-auto text-xs'>
        <span className='font-bold flex-wrap'>{post.handleId} </span>
        { showMore ?
      post.caption
        :
          post.caption.length > 100 ?
           <span>
              { post.caption.slice(0,90) }... <span className='text-gray-600'
              onClick={()=>setShowMore(true)}
              >more</span>
           </span>
           : 
           post.caption 
        
        }
      
      </span>
      <span className='text-gray-600 w-full h-4 pt-1 text-xs tracking-tight px-2' 
      onClick={()=>setShowMobCom(!showMobCom)}
      >
        View all {post.comments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} comments
      </span>
      <span className='block sm:hidden text-[10px] text-gray-600 tracking-tight mb-1 pl-2 pt-2'>
       {post.time}
      </span>

        {/* comment box */}

        {/* for mobile and small devices  */}


  
  <div className={showMobCom ? 'flex fixed top-0 left-0 right-0 w-full h-full z-40' : 'top-[40rem]'}>
<MobileComments showMobCom={showMobCom} setShowMobCom={setShowMobCom}/>
</div>

{/* for large devices */}

<div className='flex w-full h-10 mt-2 pb-1 gap-1 items-center border-b-[1px] border-b-gray-300'>
  <input type="text" className='pl-2 text-sm w-[85%]' placeholder='Add a comment....'/>
  <span className='text-sm font-semibold text-blue-500'>Post</span>
  <PiSmiley className='flex-2 ml-1 mt-[2px] text-gray-500'/>
</div>

{/* Tags */}

{/* tags for small devices */}

{ windowWidth < 768 && <div
className={showTagged ? 'flex fixed top-0 left-0 right-0 w-full h-full z-40' : 'top-[40rem]'}>
<Tagged showTagged={showTagged} setShowTagged={setShowTagged}/>
</div>}



     
    </div>
  )

}

export default SinglePost