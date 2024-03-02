import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Footer from '../components/Footer'
import Posts from '../components/Posts'
import LeftNavBar from '../components/LeftNavBar'
import RightBar from '../components/RightBar'

const Home = () => {
  return (
    <div className='flex flex-col w-full xs:items-center'>
        <Header/>
        <main className='p-0 m-0 flex w-full'>
          <LeftNavBar/>
          <div className='flex flex-col'>
          <Stories/>
        <Posts/>
          </div>
       <RightBar/>
        </main>
       
        <Footer/>
    </div>
  )
}

export default Home