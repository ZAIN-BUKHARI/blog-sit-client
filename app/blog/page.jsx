
import Box from '../../components/Boxblog/Box'
import React from 'react'
import Services from '../../components/Services/Services'
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
  // const blogs = await getData()
  const blogs=[
    {
      title:"a lifesaver and timesaver indeed. Putting the headers in routes did the trick for me",
      slug:"a lifesaver and timesaver indeed. Putting the headers in routes did the trick for me",
      img:"https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author:"Jamy",
      Feature:"NO",
      month:"June",
      date:"2023-06-12",
      img2:"https://images.pexels.com/photos/1426720/pexels-photo-1426720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"I know im answering a pretty old post, but i've just battled with this issue my self for the better part of two days, so if someone else stumbles up this, i hope it can help.. What solved the issue for me was the following in the vercel.jsonTurns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request.",
      desc2:"Turns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request.Turns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request."
    },
    {
      title:"a lifesaver and timesaver indeed. Putting the headers in routes did the trick for me",
      slug:"a lifesaver and timesaver indeed. Putting the headers in routes did the trick for me",
      img:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author:"Jamy",
      Feature:"NO",
      month:"June",
      date:"2023-06-12",
      img2:"https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"I know im answering a pretty old post, but i've just battled with this issue my self for the better part of two days, so if someone else stumbles up this, i hope it can help.. What solved the issue for me was the following in the vercel.jsonTurns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request.",
      desc2:"Turns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request.Turns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request."
    },
    {
      title:"a lifesaver and timesaver indeed. Putting the headers in routes did the trick for me",
      slug:"a lifesaver and timesaver indeed. Putting the headers in routes did the trick for me",
      img:"https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75",
      author:"Jamy",
      Feature:"NO",
      month:"June",
      date:"2023-06-12",
      img2:"https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc:"I know im answering a pretty old post, but i've just battled with this issue my self for the better part of two days, so if someone else stumbles up this, i hope it can help.. What solved the issue for me was the following in the vercel.jsonTurns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request.",
      desc2:"Turns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request.Turns out vercel overwrites the cors settings you put anywhere outside the json. It's not possible to mix a headers array and routes array in the same file. But you can just put a header inside the routes. Dont forget the methods, particularly the options, since it apparently converts many requests into an options request."
    }
  ]
  return (
   <>
   {/* <Box blogs={blogs}/> */}
   
   <Services/>
   </>
  )
}

export default Blog