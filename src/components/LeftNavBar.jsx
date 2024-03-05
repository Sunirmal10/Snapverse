import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { userProfile } from "../Data";
import { FaCaretLeft, FaCaretRight, FaRegCompass, FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import NavMore from "./NavMore";

const LeftNavBar = () => {

  const [hideNav, setHideNav] = useState(false)
  const [showNavMore, setShowNavMore] = useState(false)

  const handleHideNav = () => {
    setHideNav(!hideNav)
  }

  const divRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if ( btnRef.current && !divRef.current.contains(event.target)
      && !btnRef.current.contains(event.target)
      ) {
        setShowNavMore(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div className={hideNav ? "hidden md:flex flex-col p-3 w-[4.5rem] border-r-[1.5px] border-r-gray-200  dark:border-zinc-800 mr-4 lg:mr-24 xl:mr-28 h-full sticky top-1 left-0 z-20 transition-all delay-75 dark:text-white"
    :
    "hidden md:flex flex-col p-3 w-[14rem] lg:w-[16rem] border-r-[1.5px] border-r-gray-200 dark:border-zinc-800 mr-4 xl:mr-28 h-full sticky top-0 left-0 z-20 transition-all delay-75 dark:text-white"
  }>
      
      <header className="lobster-font w-full pl-2 flex justify-between text-2xl tracking-tight items-center relative mb-8 mt-4">
       <Link to={"/"}>
        {
          hideNav ? <span className={hideNav ? "flex w-7 h-7 text-[8px] font-sans items-center justify-center text-white pb-[2px] italic rounded-full bg-[#AAF] scale-100 transition-all delay-75" : "scale-0 flex transition-all delay-75"}>snap</span>
          :
          <span className={hideNav ? "block scale-100 transition-all delay-75" : "scale-0 transition-all delay-75"}>SnapVerse</span>
        }
       </Link>
       <div className="text-gray-300 dark:text-zinc-500 cursor-pointer" onClick={handleHideNav}> { hideNav ? <FaCaretRight /> : <FaCaretLeft /> }</div>
      </header>

      <main className="flex flex-col w-full gap-2 mb-10">
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75">
            <GoHome className="text-[28px] " />
            {!hideNav && "Home"}
          </span>
        </Link>
        <Link to={"#"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75">
            <FiSearch className="text-[28px] " />
          {!hideNav && "Search"}
          </span>
        </Link>
        <Link to={"#"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75">
            <FaRegCompass className="text-[28px] " />
           {!hideNav && "Explore"}
          </span>
        </Link>
        <Link to={"#"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75">
            <BiMoviePlay className="text-[28px] " />
            {!hideNav && "Reels"}
          </span>
        </Link>
        <Link to={"#"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75 relative">
          <div className='flex justify-center items-center w-5 h-4 absolute top-2 left-5 bottom-3 p-1 font-medium bg-red-500 border-2 border-white dark:border-[#151515] rounded-full text-white text-[10px]'>10</div>
            <RiMessengerLine className="text-[28px] " />
           { !hideNav && "Messages"}
          </span>
        </Link>
        <Link to={"#"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75">
            <FaRegHeart className="text-[28px] " />
           {!hideNav && " Notifications"}
          </span>
        </Link>
        <Link to={"#"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75">
            <MdOutlineAddBox className="text-[28px] " />
          {!hideNav && "  Create"}
          </span>
        </Link>
        <Link to={"/profile"}>
          <div className="flex items-center gap-4 text-md hover:bg-gray-100 hover:dark:bg-zinc-800 h-12 py-1 px-2 rounded-lg transition-all delay-75">
            <img
              className="w-7 h-7 rounded-full object-fill border-2 border-gray-200 transition-all delay-75"
              src={userProfile?.pfp || "../assets/images/userpng.png"}
              alt="pro_pic"
            />
           {!hideNav && " Profile"}
          </div>
        </Link>
      </main>
      <footer>
        <Link to={"#"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75">
            <IoIosHelpCircleOutline className="text-[28px] " />
          {!hideNav && "Help"}
          </span>
        </Link>
        <div className="relative">
        { showNavMore && <div className="absolute z-20 bottom-14 left-2" ref={divRef}><NavMore/></div>}
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 hover:dark:bg-zinc-800 tracking-tight transition-all delay-75 cursor-pointer" onClick={()=>setShowNavMore(!showNavMore)}
          ref={btnRef}>
            <RxHamburgerMenu className="text-[28px]" />
           {!hideNav && "More"}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LeftNavBar;
