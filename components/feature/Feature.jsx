'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Feature = ({blogs}) => {
  const router = useRouter()
  const push = (slug)=>{
    router.push(`/blog/`+slug)

  }
  return (
    <>
     <section class="text-gray-600 body-font">
  <div class="">
  
    <div class="flex flex-wrap md:mx-16 ">


        {/* 1 */}
        { blogs && blogs.slice(0,2).map((item)=>(
      <div class="p-4 lg:w-1/2 md:w-1/2">
        
        {/* <Link href={`/blog/${item.slug}`}> */}
        <div onClick={()=>{push(item.slug)}}  class="h-full  flex flex-col items-center text-center">
          <img alt="team" class=" trans flex-shrink-0 rounded-lg w-full  md:h-[300px] h-[200px] object-cover object-center mb-4" src={item.img}/>
          <div class="w-full">
            
            <h2 class="title-font font-medium text-lg text-gray-900">
              {item.author}</h2>
            <h3 class="text-gray-500 mb-3">{item.category}</h3>
            <p class="mb-4">{item.desc.slice(0,73)}</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        {/* </Link> */}
      </div>
        ))}
     
      
     
    </div>
  </div>
</section>
    </>
  )
}

export default Feature