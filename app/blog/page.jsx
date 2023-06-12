
import Box from '@/components/BoxBlog/Box'
import React from 'react'

async function getData() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog =async () => {
  const blogs = await getData()
  return (
   <>
   <Box blogs={blogs}/>
   </>
  )
}

export default Blog