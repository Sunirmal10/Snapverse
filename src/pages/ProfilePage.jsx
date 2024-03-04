import React from 'react'
import LeftNavBar from '../components/LeftNavBar'
import Profile from '../components/Profile'

const ProfilePage = () => {
  return (
    <div className='flex bg-white dark:bg-[#151515]'>
        <span className='hidden md:flex'>
            <LeftNavBar/>
        </span>
        <Profile/>
    </div>
  )
}

export default ProfilePage