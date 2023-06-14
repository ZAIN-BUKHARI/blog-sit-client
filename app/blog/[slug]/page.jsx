
import Link from "next/link";
import Container from "../../../slugcomp/container";
import { notFound } from "next/navigation";
import React from 'react'

async function getData(slug) {
  const res = await fetch(`http://localhost:3000/api/slug/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const Post=async ({params})=> {
  
const data = await getData(params.slug)

  return (
    <>
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <h2 className="font-serif text-gray-800 text-2xl">{data.category}</h2>
          </div>

          <h1 className="text-black mb-3 mt-2 text-center text-3xl font-semibold tracking-tight  lg:text-4xl lg:leading-snug">
            {data.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative  flex-shrink-0">
                  <Link href={`#`} className="">
                    <img
                    src={data.img}
                      className="rounded-full h-9 w-[40px]  object-cover"
                      fill
                      // sizes="40px"
                    />
                  </Link>
              </div>
              <div>
                <p className="text-gray-1000 ">
                  <Link href={`#`}>
                    {data.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    >
                  <span> {data.month} {data.date.slice(5)}· 5 min read</span>
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="relative mt-10 mb-10 z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        
          <img
          // src="https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={data.img}
          // src='https://images.pexels.com/photos/5868740/pexels-photo-5868740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            loading="eager"
            fill
            // sizes="100vw"
            className=" w-[800px] h-[500px]  object-cover "
          />
      </div>
      {/* https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}

      <Container>
        <article className="mx-auto max-w-screen-md font-light  ">
          <div className="prose mx-auto my-3 text-gray-500 text-[20px] font-sans ">
            {data.desc.slice(0,1000)}
            <br/>
            <br/>
            <br/>
            <div className="relative mt-10 mb-10 z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        
        <img
        // src="https://images.pexels.com/photos/3951790/pexels-photo-3951790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src={data.img2}
        // src='https://images.pexels.com/photos/5868740/pexels-photo-5868740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          loading="eager"
          fill
          // sizes="100vw"
          className=" w-[800px] h-[500px]  object-cover "
        />
    </div>
            {data.desc2.slice(0,1000)}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
          </div>
        </article>
      </Container>
    </>
  );
}

export default Post
