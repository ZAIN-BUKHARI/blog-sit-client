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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, facere excepturi! Iste magnam expedita soluta molestias! Culpa dicta esse quo fuga ipsum quas, eius iusto ipsam veritatis distinctio dolorem cumque!</p>
            <Link href={'/contact'}><button className="primary-btn">Contact Us</button></Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero