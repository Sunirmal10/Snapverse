import React, { useEffect, useRef } from 'react'
import SinglePost from './SinglePost'
import { feedPosts } from '../Data'
import { useState } from 'react'

const Posts = () => {
  const [endPostNumber, setEndPostNumber] = useState(3);
  const [loading, setLoading] = useState(false);
  
  const infiniteRef = useRef();

  useEffect(() => {
    
    const options = {
        root: null, 
        rootMargin: "20px",        
        threshold: 1.0,     };

    const observer = new IntersectionObserver(([entry])=> { 
        if(entry.isIntersecting ) {
          setLoading(true)
          setEndPostNumber((prev)=> prev + 2);
          setLoading(false)
        }
    }, options);

    if(infiniteRef.current) { 
        observer.observe(infiniteRef.current)
    }

    return () => {
        if(infiniteRef.current) {           
            observer.unobserve(infiniteRef.current);
        }
    }
}, [infiniteRef, loading])

  return (
    <div className='flex flex-col max-w-[640px] gap-1 items-center mb-20 lg:mb-4'>
      {
        feedPosts.slice(0,endPostNumber).map((post) => (
          <SinglePost post={post} key={post.userId}/>
        ))
      }
      
      {loading && <div className='text-gray-400 font-bold text-sm'>Loading....</div>}


      <div ref={infiniteRef}></div>
       
    </div>
  )
}

export default Posts