import React from 'react'
import ServicesData from '../../ServicesData'

const Service = () => {
  return (
    <>
    <section className="services topMargin">
        <div className="containersui">
            <div className="heading">
                <h3>LATEST BLOGS</h3>
                <h1>Read Inspirational Blogs Everyday</h1>
            </div>

            <div className="container grid topMargin">
                {
                    ServicesData.map((val)=>{
                        return (
                        <><div className="box">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                        </>
                        )
                    })
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Service