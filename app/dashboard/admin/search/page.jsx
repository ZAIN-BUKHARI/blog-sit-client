'use client'
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router=useRouter()
    useEffect(()=>{
      if(!localStorage.getItem('token')){
        router.push('/dashboard')
      }
    },[])
  return (
    <div>page</div>
  )
}

export default page