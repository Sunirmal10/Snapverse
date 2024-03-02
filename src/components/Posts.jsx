import React from 'react'
import SinglePost from './SinglePost'
import { feedPosts } from '../Data'

const Posts = () => {
  return (
    <div className='flex flex-col max-w-[640px] items-center mb-20'>
      {
        feedPosts.map((post) => (
          <SinglePost post={post} key={post.userId}/>
        ))
      }
       
    </div>
  )
}

export default Posts