import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Footer from '../components/Footer'
import Posts from '../components/Posts'

const Home = () => {
  return (
    <div>
        <Header/>
        <Stories/>
        <Posts/>
        <Footer/>
    </div>
  )
}

export default Home