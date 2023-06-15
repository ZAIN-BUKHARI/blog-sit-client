import React from 'react'
import Link from 'next/link'
const About = () => {
    const Data = [
        {
          id: 1,
          title: "Who I Am And What I DO",
          desc1: "At [Blogger], we are a passionate team of writers, creators, and enthusiasts who love knowledge on a wide range of topics.",
          desc2: "Our goal is to create a platform that serves hub for insightful and engaging content, informed, entertained, and inspired.",
          desc3: "Lifestyle: Our lifestyle section encompasses articles on health and wellness, personal development, travel, fashion.",
        },
        
    ]
  return (
    <>
    <section className="about topMargin">
        <div className="containersui flex">
        {Data.map((value)=>{
        return (
        <><div className="left mtop">
        <div className="heading" data-aos="fade-left" data-aos-duration="5000">
            <h3>About Me</h3>
            <h1>{value.title}</h1>
        </div>
         <p  data-aos-duration="5000" data-aos="fade-left">{value.desc1}</p>
         <p  data-aos-duration="5000" data-aos="fade-left">{value.desc2}</p>
         <p  data-aos-duration="5000" data-aos="fade-left">{value.desc3}</p>
         <Link href={'/about'}><button className="primary-btn">
            See more
         </button></Link>
        </div>
        <div className="right">
            <div className="img">
                <img src="hero.png" alt="" />
            </div>
        </div>
        </>
        )
        })}
        </div>
    </section>

    </>
  )
}

export default About