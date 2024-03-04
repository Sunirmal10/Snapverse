import React from 'react'
import { Link } from 'react-router-dom'
import { storyData, userProfile } from '../Data'

const RightBar = () => {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className='hidden xl:flex flex-col w-[18rem] m-2 ml-24'>
      <header className='flex w-full justify-between items-center mt-8'>
      <Link to={"/profile"}>
          <div className='flex justify-center items-center gap-2'>
          <img
          className='w-12 h-12 border-2 border-gray-300 rounded-full'
          src={userProfile.pfp} alt="" />
       
       <span className='text-sm font-semibold'>{userProfile.handleId}</span>
           
          </div>          
        </Link>
        <span className='text-xs font-bold text-blue-400 cursor-pointer'>Switch</span>
      </header>
      <main className='flex flex-col justify-center items-center'>
        <span className='flex w-full justify-between ic text-sm mt-4 mb-2 text-gray-500 font-semibold'>
          <span>Suggested for you</span>
          <span className='text-xs text-slate-900 font-bold cursor-pointer'>See All</span>
        </span>

        {
          storyData.slice(0,5).map((item)=> (
            <div className='flex w-full justify-between items-center relative my-2' key={item.id}>
            <Link to={"#"}>
                <div className='flex justify-center items-center gap-2'>
                <img
                className='w-12 h-12 border-2 border-gray-300 rounded-full mt-1'
                src={item.pfp} alt="" />
             
             <span className='text-sm font-semibold mb-5'>{item.name}</span>
                 <span className='absolute bottom-0 left-14 text-gray-400 
                 font-medium mb-1
                 tracking-tighter text-xs'>
                  Suggested for you
                 </span>
                </div>          
              </Link>
              <span className='text-xs font-bold text-blue-400 cursor-pointer mt-2'>Follow</span>
            </div>
          ))
        }

       
      </main>
      <footer className='flex flex-col text-xs font-medium text-gray-400 gap-4 mt-5 mb-1'>
        <span className='w-full flex tracking-tighter font-normal flex-wrap gap-1'>
         <Link to={"#"}>About</Link>•
         <Link to={"#"}>Help</Link>•
         <Link to={"#"}>Press</Link>•
         <Link to={"#"}>API</Link>•
         <Link to={"#"}>Jobs</Link>•
         <Link to={"#"}>Privacy</Link>•
         <Link to={"#"}>Terms</Link>•
         <Link to={"#"}>Locations</Link>•
         <Link to={"#"}>Language</Link>•
         <Link to={"#"}>Snap Verified</Link>
        </span>
        <span>
        © {year} SNAPVERSE PROJECT
        </span>
      </footer>
    </div>
  )
}

export default RightBar


