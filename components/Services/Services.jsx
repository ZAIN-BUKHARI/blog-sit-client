'use client'
import React from 'react'
import ServicesData from '../../ServicesData'
import { useRouter } from 'next/navigation'

const Service = () => {
    const router = useRouter('')
    const link=(slug)=>{
        router.push(`/blog/${slug}`)
    }
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
                        <>
                        <div className="box " data-aos="fade-down" data-aos-duration="2000">
                            <div className="img point" onClick={()=>{link(val.slug)}}>
                                <img src={val.img} alt="" />
                            </div>
                            <div className="text">
                                <h2>{val.author}</h2>
                                <p>{val.title}</p>
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