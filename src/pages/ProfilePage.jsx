import React from 'react'
import LeftNavBar from '../components/LeftNavBar'
import Profile from '../components/Profile'

const ProfilePage = () => {
  return (
    <div className='flex'>
        <span className='hidden md:flex'>
            <LeftNavBar/>
        </span>
        <Profile/>
    </div>
  )
}

export default ProfilePage