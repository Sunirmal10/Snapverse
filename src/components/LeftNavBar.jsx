import React from "react";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { userProfile } from "../Data";
import { FaRegCompass } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const LeftNavBar = () => {
  return (
    <div className="hidden md:flex flex-col p-3 w-[14rem] lg:w-[16rem] border-r-[1.5px] border-r-gray-200 mr-4 lg:mr-20 xl:mr-28 h-full sticky top-0 left-0 z-20">
      <header className="lobster-font w-full pl-2 flex text-2xl tracking-tight justify-start items-center relative mb-8 mt-4">
       <Link to={"/"}>SnapVerse</Link>
      </header>

      <main className="flex flex-col w-full gap-2 mb-14">
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <GoHome className="text-[28px] " />
            Home
          </span>
        </Link>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <FiSearch className="text-[28px] " />
            Search
          </span>
        </Link>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <FaRegCompass className="text-[28px] " />
            Explore
          </span>
        </Link>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <BiMoviePlay className="text-[28px] " />
            Reels
          </span>
        </Link>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight relative">
          <div className='flex justify-center items-center w-5 h-4 absolute top-2 left-5 bottom-3 p-1 font-medium bg-red-500 border-2 border-transparent rounded-full text-white text-[10px]'>10</div>
            <RiMessengerLine className="text-[28px] " />
            Messages
          </span>
        </Link>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <SlPeople className="text-[28px] " />
            Notifications
          </span>
        </Link>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <MdOutlineAddBox className="text-[28px] " />
            Create
          </span>
        </Link>
        <Link to={"/profile"}>
          <div className="flex items-center gap-4 text-md hover:bg-gray-100 h-12 py-1 px-2 rounded-lg">
            <img
              className="w-8 h-8 rounded-full object-fill border-2 border-gray-200 transition-all delay-75"
              src={userProfile?.pfp || "../assets/images/userpng.png"}
              alt="pro_pic"
            />
            Profile
          </div>
        </Link>
      </main>
      <footer>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <IoIosHelpCircleOutline className="text-[28px] " />
            Help
          </span>
        </Link>
        <Link to={"/"}>
          <span className="flex gap-4 h-12 py-1 px-2 rounded-lg items-center text-md hover:bg-gray-100 tracking-tight">
            <RxHamburgerMenu className="text-[28px] " />
            More
          </span>
        </Link>
      </footer>
    </div>
  );
};

export default LeftNavBar;
