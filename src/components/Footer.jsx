import React from 'react'
import { Link } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { userProfile } from '../Data';

const Footer = () => {
  return (
    <footer className='flex sm:hidden justify-evenly gap-7 z-10 bg-white pt-3 pb-4 px-3 text-2xl fixed bottom-0 left-0 right-0'>
        <Link to={"/"}>
        <GoHome />
        {/* <GoHomeFill /> */}
        </Link>
        <Link to={"/explore"}>
        <FiSearch />
        </Link>
        <Link to={"#"}>
            <MdOutlineAddBox />
        </Link>
        <Link to={"#"}>
        <BiMoviePlay />
        </Link>
        <Link to={"/profile"}>
        <div className='flex flex-col items-center gap-2 border-2 border-slate-200 relative w-6 h-6 rounded-full'>
            <img
            className='w-full h-full rounded-full object-fill'
            src={userProfile?.pfp || "../assets/images/userpng.png"} alt="pro_pic" />
        </div>
        </Link>
    </footer>
  )
}

export default Footer