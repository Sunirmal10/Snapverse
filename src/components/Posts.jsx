import React from 'react'
import SinglePost from './SinglePost'
import { feedPosts } from '../Data'

const Posts = () => {
  return (
    <div className='flex flex-col max-w-[640px] gap-1 items-center mb-20 lg:mb-4'>
      {
        feedPosts.map((post) => (
          <SinglePost post={post} key={post.userId}/>
        ))
      }
       
    </div>
  )
}

export default Posts