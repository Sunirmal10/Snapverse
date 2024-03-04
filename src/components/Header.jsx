import React, { useEffect, useRef, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { RxCaretDown } from "react-icons/rx";
import { SlPeople } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const divRef = useRef();
    const btnRef = useRef();

    useEffect(() => {
      function handleClickOutside(event) {
        if ( btnRef.current && !divRef.current.contains(event.target)
        && !btnRef.current.contains(event.target)
        ) {
          setShowDropdown(false);
        }
      }
  
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  return (
    <header className='flex md:hidden py-2 px-3 justify-between items-center max-h-14 text-xl z-20 bg-white dark:bg-[#151515] shadow-sm w-full'>
        <div className='lobster-font flex tracking-tight justify-center items-center relative'>
        <Link to={"/"}>SnapVerse</Link>
        <button className='font-bold p-0 m-0 border-0 absolute bottom-0 right-[-24px]'
        ref={btnRef}
        onClick={()=>setShowDropdown(!showDropdown)}
        ><RxCaretDown /></button>
       { showDropdown && (<div className='font-sans text-[12px] font-semibold bg-[#F5F5F5] dark:bg-slate-800 py-1 px-3 absolute top-8 w-28 shadow-md left-0 rounded' 
       ref={divRef}
       >
            <span className='flex justify-between items-center'>Following <SlPeople/></span>
            <span className='flex justify-between items-center'>Favorites <FaRegStar /></span>        
        </div>)}
        </div>
        <div className='flex justify-between gap-5 mr-2 mt-1 items-center text-2xl'>
        <FaRegHeart />
        <span className='relative'>
            <div className='flex justify-center items-center w-5 h-4 absolute left-3 bottom-3 p-1 font-medium bg-red-500 rounded-full text-white text-[10px]'>10</div>
            <RiMessengerLine />
        </span>
        </div>
    </header>
  )
}

export default Header