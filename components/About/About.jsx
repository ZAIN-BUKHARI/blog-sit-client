import React from 'react'
import Link from 'next/link'
const About = () => {
    const Data = [
        {
          id: 1,
          title: "Who I Am And What I DO",
          desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          desc3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        
    ]
  return (
    <>
    <section className="about topMargin">
        <div className="containersui flex">
        {Data.map((value)=>{
        return (
        <><div className="left mtop">
        <div className="heading">
            <h3>About Me</h3>
            <h1>{value.title}</h1>
        </div>
         <p>{value.desc1}</p>
         <p>{value.desc2}</p>
         <p>{value.desc3}</p>
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