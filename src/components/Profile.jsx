import React from "react";
import Footer from "./Footer";
import { userProfile } from "../Data";
import { IoLockClosed } from "react-icons/io5";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineAddBox, MdOutlineEdit, MdOutlineShare, MdOutlineWatchLater } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosSettings, IoMdAdd, IoMdGrid } from "react-icons/io";
import { BiMoviePlay, BiUserPin } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="flex flex-col gap-2 xxs:w-[320px] h-full xms:w-[375px] xs:w-[425px] sm:w-[640px] lg:mx-20">
      {/* header for small screens */}
      <header className="flex md:hidden gap-1 w-full fixed justify-between items-center py-2 px-4 dark:text-white bg-white dark:bg-[#151515] shadow-sm">
        <span className="flex gap-1 items-center">
          <LuLock className="text-xs" />
          <span className="text-lg font-bold ml-1">{userProfile.handleId}</span>
          <RxCaretDown className="" />
        </span>
        <span className="flex gap-4">
          <MdOutlineAddBox className=" text-2xl" />
          <RxHamburgerMenu className=" text-2xl font-bold" />
        </span>
      </header>

      {/* main body for 320 - < 768px screens */}

      <main className="flex md:hidden flex-col w-full h-full xms:items-center xs:justify-normal py-3 grow mt-12 mb-8">
        {/* profile pic and followers */}
        <div className="flex w-full gap-3 px-5 items-center justify-between">
          {/* pro pic */}
          <div className="flex justify-center items-center gap-2">
            <img
              className="w-16 h-16 border-2 border-blue-400  p-1 dark:border-transparent rounded-full"
              src={userProfile.pfp}
              alt="pro_pic"
            />
          </div>

          {/* posts followers following */}
          <div className="posts flex flex-col items-center dark:text-white">
            <span className="font-bold">{userProfile.posts}</span>
            <span className="text-xs font-medium">Posts</span>
          </div>
          <div className="followers flex flex-col items-center dark:text-white">
            <span className="font-bold dark:text-white">{userProfile.followers}</span>
            <span className="text-xs font-medium">Connections</span>
          </div>
          <div className="following flex flex-col items-center dark:text-white">
            <span className="font-bold">{userProfile.following}</span>
            <span className="text-xs font-medium">Following</span>
          </div>
        </div>
        {/* name and pronouns */}
        <span className="flex w-full justify-start gap-1 text-gray-500 my-1 px-5 text-xs">
          <span className="font-bold text-slate-900 dark:text-white"> {userProfile.name}</span>{" "}
          {userProfile.pronouns}
        </span>
        {/* bio */}
        <div className="flex w-full h-auto flex-wrap px-5 text-xs font-normal py-3 tracking-tight dark:text-white">
          {userProfile.bio}
        </div>
        {/* Edit profile etc buttons */}
        <div className="flex xxs:gap-[5px] w-full justify-center sm:justify-start xs:gap-2 px-4">
          <button className="rounded flex justify-center gap-2 items-center text-sm font-semibold bg-gray-300 dark:bg-zinc-400 hover:bg-gray-400 dark:hover-zinc-500 py-1 px-6">
          <MdOutlineEdit /> <span>Edit</span>
          </button>
          <button className="rounded flex justify-center gap-2  items-center text-sm font-semibold bg-gray-300 dark:bg-zinc-400 hover:bg-gray-400 dark:hover-zinc-500 py-1 px-6">
          <MdOutlineShare /> <span>Share</span>
          </button>
          <button className="rounded flex justify-center items-center text-sm font-semibold bg-gray-300 dark:bg-zinc-400 py-1 px-2">
            <AiOutlineUserAdd />
          </button>
        </div>
        {/* story highlights */}
        <div className="flex flex-col w-full">
          <span className="text-xs font-bold px-5 mt-3 mb-2 dark:text-white">
            Story highlights
          </span>
          {/* story circle add */}
          <span className="flex px-5 w-full justify-start items-center mb-2">
            <div className="flex justify-center items-center p-3 border-[1px] text-xl border-gray-600 dark:border-white dark:text-white relative rounded-full w-14 h-14">
              <IoMdAdd />
              <span className="text-[10px] tracking-tighter text-gray-600 dark:text-white absolute top-14 font-medium">
                New
              </span>
            </div>
          </span>
        </div>
        {/* pics videos tags etc */}
        <div className="flex w-full flex-col mt-8">
          {/* icons */}
          <div className="flex w-full 0">
            <span className="flex border-b-slate-800 dark:text-white dark:border-b-white border-b-[2px] justify-center items-center flex-1 text-2xl">
              <IoMdGrid />
            </span>
            <span className="flex justify-center items-center flex-1 text-zinc-400 text-2xl">
              <BiMoviePlay />
            </span>
            <span className="flex justify-center items-center flex-1 text-zinc-400 text-2xl">
              <BiUserPin />
            </span>
          </div>
          {/* content - pics, videos, tags */}
          <div className="flex w-full flex-wrap gap-[1px] sm:gap-[2px] md:gap-1 mt-[2px]">
            {userProfile.pics.map((pic, i) => (
              <img
                className="
                        xxs:w-[106px] xms:w-[124px] xs:w-[141px] sm:w-[212px]
                        xxs:h-[106px] xms:h-[124px] xs:h-[141px] sm:h-[212px]
                        "
                src={pic ? pic : "/images/beach.jpg"}
                alt="post_pic"
                key={i}
              />
            ))}
          </div>
        </div>
      </main>

      {/* main body for > 768px screens */}

      <main className="hidden md:flex flex-col gap-2">
        {/* top */}
        <div className="flex gap-5 md:gap-2 min-h-44 mt-10 lg:gap-10 justify-center">
          {/* pro pic */}
          <div className="flex justify-center h-auto gap-2">
            <img
              className="w-28 h-28 border-4 p-1 border-blue-400 dark:border-transparent rounded-full"
              src={userProfile.pfp}
              alt="pro_pic"
            />
          </div>
          {/* right section of pro pic */}
          <div className="flex flex-col h-10 gap-4 md:gap-2 items-center justify-start">
            <span className="flex items-center">
              <span className="text-lg font-medium text-sky-500 cursor-pointer dark:text-white">
                @{userProfile.handleId}
              </span>
              {/* Edit profile etc buttons */}
              <div className="flex xxs:gap-[5px] w-full justify-center sm:justify-start xs:gap-2 px-3">
                <button className="rounded-lg flex justify-center gap-1 items-center text-sm font-semibold bg-gray-200 py-2 px-4 md:px-3 hover:bg-gray-300 hover:dark:bg-zinc-400 dark:text-white dark:bg-zinc-500">
                <MdOutlineEdit /> <span>Edit</span> 
                </button>
                <button className="rounded-lg flex gap-1 justify-center items-center text-sm font-semibold bg-gray-200 dark:bg-zinc-500 py-1 px-4 md:px-3 hover:bg-gray-300 hover:dark:bg-zinc-400 dark:text-white">
                <MdOutlineShare /> <span>Share</span>
                </button>
                <button className="rounded-lg flex gap-1 justify-center items-center text-lg font-semibold bg-gray-200 dark:bg-zinc-500 p-1 md:px-2 hover:bg-gray-300 hover:dark:bg-zinc-400 dark:text-white">
                  <IoIosSettings />
                </button>
              </div>
            </span>

            {/* posts followers following */}
            <div className="flex justify-between w-full dark:text-white">
              <div className="posts flex gap-2 items-center">
                <span className="font-bold">{userProfile.posts}</span>
                <span className="text-xs font-medium">Posts</span>
              </div>
              <div className="followers flex gap-2 items-center mr-5">
                <span className="font-bold">{userProfile.followers}</span>
                <span className="text-xs font-medium">Connections</span>
              </div>
              <div className="following flex gap-2 items-center mr-10">
                <span className="font-bold">{userProfile.following}</span>
                <span className="text-xs font-medium">Following</span>
              </div>
            </div>
            {/* pronouns */}
            <div className="flex w-full justify-start text-sm text-gray-400">
              {userProfile.pronouns}
            </div>

            {/* bio */}

            <div className="flex w-full flex-wrap justify-start text-sm dark:text-white">
              {userProfile.bio}
            </div>
          </div>
        </div>
        {/* story highlights */}

              <div>
              <span className="flex px-5 w-full justify-start items-center">
            <div className="flex justify-center items-center p-3 border-[1px] text-xl border-gray-400 dark:text-white relative rounded-full w-14 h-14 cursor-pointer">
              <IoMdAdd />
              <span className="text-[10px] tracking-tighter text-gray-400 absolute top-14 font-medium">
                New
              </span>
            </div>
          </span>
              </div>

        {/* pics videos saved tags */}
        <div className="w-full border-t-2 mt-5 border-gray-300 dark:border-gray-400">
          {/* icons */}
          <div className="flex h-14 text-sm font-medium gap-10 justify-center">
            <div className=" border-t-2 border-t-slate-900 dark:border-t-white mt-[-1px] flex items-center dark:text-white justify-center gap-2 cursor-pointer"> <IoMdGrid className="mt-[2px]" />
              POSTS</div>
            <div className="flex items-center justify-center text-zinc-400 gap-2 cursor-pointer"><MdOutlineWatchLater className="mt-[2px]" />
              SAVED</div>
            <div className="flex items-center justify-center text-zinc-400 gap-2 cursor-pointer">
              <BiUserPin className="mt-[2px]" />
              TAGGED</div>
          </div>
          {/* posts */}
          <div className="flex justify-center flex-wrap md:gap-[6px]">
            {userProfile.pics.map((pic, i) => (
              <img
                className="
                        md:w-[172px]
                       md:h-[172px]
                        "
                src={pic}
                alt="post_pic"
                key={i}
              />
            ))}
          </div>
        </div>

      </main>

      <footer className="block md:hidden">
        <Footer />
      </footer>
    </div>
  );
};

export default Profile;
