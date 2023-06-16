'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Hero = () => {
  const {animation} = useContext(ThemeContext)
  return (
    <>
    <section className="hero " >
        <div className="containersui flex"   >
      
            {/* left  */}
            <div className="left">
               <div className="img" >
              {animation && <img src="home.png" alt="" data-aos="fade-left" data-aos-duration="2000"/>}
              {!animation && <img src="home.png" alt="" data-aos="fade-left" data-aos-duration="2000"/>}
               
               </div>
            </div>
            {/* right  */}
            {animation && <div className="right topMargin" data-aos="zoom-in-up" data-aos-duration="2000" >
                <h1>Welcome to<br />
                Blog<span className='text-green-400'>ger</span>
                </h1>
            <p>Blogging refers to the act of creating and maintaining a blog, which is a website or an online platform where individuals.Fashion is a popular and ever-evolving form of self-expression that encompasses clothing, accessories, hairstyles!</p>
            <Link href={'/contact'}><button className="primary-btn">Contact Us</button></Link>
            </div>}
            {/* for mobile  */}
            {!animation && <div className="right topMargin">
                <h1>Welcome to<br />
                Blog<span className='text-green-400'>ger</span>
                </h1>
            <p>Blogging refers to the act of creating and maintaining a blog, which is a website or an online platform where individuals.Fashion is a popular and ever-evolving form of self-expression that encompasses clothing, accessories, hairstyles!</p>
            <Link href={'/contact'}><button className="primary-btn">Contact Us</button></Link>
            </div>}
        </div>
    </section>
    </>
  )
}

export default Hero