import React from 'react'
import SinglePost from './SinglePost'
import { feedPosts } from '../Data'

const Posts = () => {
  return (
    <div className='mb-20'>
      {
        feedPosts.map((post) => (
          <SinglePost post={post} key={post.userId}/>
        ))
      }
       
    </div>
  )
}

export default Posts