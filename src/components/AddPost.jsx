import React from 'react'
import { BiSolidLike } from 'react-icons/bi'
import { FaPen, FaUserTag } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { IoAttach, IoImages, IoLocationSharp } from 'react-icons/io5'
import { PiSmileyFill } from 'react-icons/pi'

const AddPost = () => {
  return (
    <div
    className='hidden sm:flex xxs:w-[320px] xms:w-[375px] xs:w-[450px] max-w-[450px] flex-col tracking-tight sticky top-0 h-56 mb-1 px-4 pb-3 pt-2 dark:bg-[#151515] bg-white z-20 '
    >
        <section className='flex w-full h-20 px-2 justify-between items-center mb-1 text-sm dark:opacity-80 '>
            <span className='flex gap-1 px-1 items-center justify-center cursor-pointer text-sky-400 font-semibold'>
            <BiSolidLike />
            <span>Like</span>
            </span>
            <span className='flex gap-1 px-1 items-center justify-center cursor-pointer text-green-400 font-semibold'>
            <FaPen />
            <span>Create</span>
            </span>
            <span className='flex gap-1 px-1 items-center justify-center cursor-pointer text-violet-400 font-semibold'>
            <IoIosSend />
            <span>Share</span>
            </span>
            <span className='flex gap-1 px-1 items-center justify-center cursor-pointer text-amber-300 font-semibold'>
            <PiSmileyFill />
            <span>Enjoy</span>
            </span>
        </section>
        <textarea className='resize-none rounded-md border border-gray-200 p-2 dark:bg-[#212121] dark:border-gray-500 w-full h-20 outline-none dark:text-white ' placeholder="What's on your mind?"></textarea>
        <span className='flex justify-between px-1 items-center mt-4  mb-4 border-b border-gray-200 dark:border-gray-500 pb-4 dark:opacity-80'>
            <span className='flex w-28 gap-4 px-1 text-2xl items-center'>
            <IoImages style={{color: 'yellowgreen', cursor: 'pointer'}} />
            <FaUserTag style={{color: 'deepskyblue', cursor: 'pointer'}} />
            <IoLocationSharp style={{color: 'salmon', cursor: 'pointer'}} />   
            </span>
            <button
            className='flex justify-center items-center px-1 rounded-md bg-violet-400 text-sm font-semibold text-white cursor-pointer mt-2 w-16 h-8 hover:bg-violet-500 gap-1 active:scale-[0.9]'
            >Post</button>
        </span>
    </div>
  )
}

export default AddPost