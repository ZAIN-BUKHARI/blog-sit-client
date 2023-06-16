'use client'
import React,{useContext} from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext';
const About = () => {
  const {animation} = useContext(ThemeContext)
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
    {/* data-aos="fade-left" data-aos-duration="2000" */}
    <section className="about topMargin">
        <div className="containersui flex">
        {Data.map((value)=>{
        return (
        <><div className="left mtop">
        <div className="heading">
        {animation && <h3 data-aos="fade-down"  data-aos-duration="500">About Me</h3>}
        {!animation && <h3>About Me</h3>}
           {animation && <h1 data-aos="fade-down" data-aos-duration="1000">{value.title}</h1>}
           {!animation && <h1 >{value.title}</h1>}
        </div>
        {animation && <p data-aos="fade-down" data-aos-duration="5000" >{value.desc3}</p>}
        {animation && <p data-aos="fade-down" data-aos-duration="4000" >{value.desc2}</p>}
        {animation && <p data-aos="fade-down" data-aos-duration="2000" >{value.desc1}</p>}
        {!animation && <p>{value.desc1}</p>}
        {!animation && <p>{value.desc2}</p>}
        {!animation && <p>{value.desc3}</p>}
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