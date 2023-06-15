import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <>
    <section className="hero ">
        <div className="containersui flex">
            {/* left  */}
            <div className="left">
               <div className="img">
                <img src="home.png" alt="" />
               </div>
            </div>
            {/* right  */}
            <div className="right topMargin">
                <h1>Welcome to<br />
                Blog<span className='text-green-400'>ger</span>
                </h1>
            <p>Blogging refers to the act of creating and maintaining a blog, which is a website or an online platform where individuals.Fashion is a popular and ever-evolving form of self-expression that encompasses clothing, accessories, hairstyles!</p>
            <Link href={'/contact'}><button className="primary-btn">Contact Us</button></Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero