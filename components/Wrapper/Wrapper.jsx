import React from 'react'
import Link from 'next/link'

const Wrapper = () => {
    const Data = [
        {
          id: 1,
          title: "LOOKING FOR EXCLUSIVE SERVICE",
          title2: "Get The Best For Your Business",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         
        }
    ]
  return (
    <>
    <section className="branding wrapper">
        <div className="containersui">
            {
                Data.map((val)=>{
                    return(
                        <div className="box">
                            <h3>{val.title}</h3>
                            <h2>{val.title2}</h2>
                            <p>{val.desc}</p>
                            <Link href={'/contact'}><button className="primary-btn">Contact Us</button></Link>
                        </div>
                        
                    )
                })
            }
        </div>
    </section>
    </>
  )
}

export default Wrapper