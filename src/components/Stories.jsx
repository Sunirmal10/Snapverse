import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { storyData, userProfile } from '../Data';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import '../index.css'

const Stories = () => {

  const [windowWidth, setWindowWidth] = useState()

  const handleResize = (width) => {
    setWindowWidth(width)
  }

  useEffect(() => {
    
    window.addEventListener('resize', handleResize(window.innerWidth));

  }, [windowWidth])
  
  console.log(windowWidth, window.innerWidth, "width")

  return (
    <div className='flex justify-center text-[10px] md:mt-5
    xxs:w-[320px] xs:w-[425px] sm:w-[40rem] max-w-[40rem] tracking-tighter font-medium h-[84px] py-2 pl-3'>

        <Swiper
         slidesPerView={
          (windowWidth <= 320) ? 4
          :
          (windowWidth > 320 && windowWidth <= 425) ? 5
          :
          (windowWidth > 425 && windowWidth <= 640) ? 6
          : 8          
         }
         spaceBetween={5}
         freeMode={true}
         mousewheel={true}

         navigation={
         windowWidth > 425 && true
         }


        modules={[FreeMode, Mousewheel, Navigation]}
        className='mySwiper'>
            {/* user */}
            <SwiperSlide className='block md:hidden'>
        <div
         className='flex flex-col items-center gap-2 border-[2px] border-gray-300 relative w-16 h-16 rounded-full'
         >
            <img
            className='w-full h-full rounded-full object-fill'
            src={userProfile?.pfp || "../assets/images/userpng.png"} alt="pro_pic" />
            <span>
                Your story
            <div className=' flex w-4 h-4 rounded-full absolute border-2 border-white bottom-0 right-0 text-center p-0 m-0 justify-center items-center text-white font-semibold bg-blue-500'>+</div>
            </span>
        </div>
        </SwiperSlide>

        {/* other users */}

      { storyData?.map((item)=> (
        <SwiperSlide   key={item.id}>
            <div
            className='flex flex-col items-center gap-3 border-[3px] p-[3px] border-pink-500 relative w-16 h-16 rounded-full'
          
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
        </SwiperSlide>
      ))  }
        </Swiper>
        



    </div>
  )
}

export default Stories