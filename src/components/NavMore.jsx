import React, { useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineWatchLater } from 'react-icons/md'
import { TbAlertSquare } from 'react-icons/tb'
import { LuSunMedium, LuMoon } from 'react-icons/lu'
import { LiaPowerOffSolid } from 'react-icons/lia'
import { useSearchParams } from 'react-router-dom'

const NavMore = () => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {

    //  const htmlTag = document.getElementsByTagName('html');

    //   htmlTag.style.backgroundColor = "#151515";

    //   htmlTag.classList.add("dark")

    document.documentElement.classList.add('dark');
    document.documentElement.style.backgroundColor = '#151515';
  
      
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = 'red';
    };
    
  }
  return (
    <div className='flex flex-col rounded-md w-52 h-72 justify-between gap-1 p-2 py-2 bg-white text-sm drop-shadow-xl'>
      <div className='flex justify-start gap-2 items-center cursor-pointer hover:bg-gray-100 py-3 pl-1 rounded-md'>
      <FiSettings />
      Settings
      </div>
      <div className='flex justify-start gap-2 items-center cursor-pointer hover:bg-gray-100 py-3 pl-1 rounded-md'>
      <MdOutlineWatchLater />
      Saved
      </div>
      <div className='flex justify-start gap-2 items-center cursor-pointer hover:bg-gray-100 py-3 pl-1 rounded-md'>
      <TbAlertSquare />
      Report a problem
      </div>
      <div className='flex justify-start gap-2 items-center cursor-pointer hover:bg-gray-100 py-3 pl-1 rounded-md transition-all delay-500'
      onClick={toggleDarkMode}
      >
     { darkMode ? <LuMoon /> : <LuSunMedium /> }
      
      Dark mode

      <div className={darkMode ? 'flex items-center justify-end p-[2px] px-[3px] rounded-xl w-8 h-5 ml-12 bg-gray-300 mt-[2px] transition-all delay-500'
       :
       'flex items-center justify-start p-[2px] px-[3px] rounded-xl w-8 h-5 ml-12 bg-gray-300 mt-[2px]' 
       }>
        <div className='w-3 h-3 rounded-full bg-white drop-shadow-md'></div>
      </div>

      </div>
      <div className='flex justify-start gap-2 items-center cursor-pointer hover:bg-gray-100 py-3 pl-1 rounded-md'>
      <LiaPowerOffSolid />
      Log out
      </div>
    </div>
  )
}

export default NavMore