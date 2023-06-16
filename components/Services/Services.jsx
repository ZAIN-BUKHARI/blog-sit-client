'use client'
import React,{useContext} from 'react'
import ServicesData from '../../ServicesData'
import { useRouter } from 'next/navigation'
import {ThemeContext} from '../../context/ThemeContext'

const Service = () => {
    const{ animation,mode } = useContext(ThemeContext)
    const router = useRouter('')
    const link=(slug)=>{
        router.push(`/blog/${slug}`)
    }
  return (
    <>
    <section className={`services topMargin ${mode=='dark'?'bg-[#111]':'bg-white'} `}>
        <div className="containersui">
           {animation && <div className="heading" data-aos="zoom-in" data-aos-duration="2000">
                <h3 >LATEST BLOGS</h3>
                <h1>Read Inspirational Blogs Everyday</h1>
            </div>}
           {!animation && <div className="heading">
                <h3>LATEST BLOGS</h3>
                <h1>Read Inspirational Blogs Everyday</h1>
            </div>}

            <div className="container grid topMargin">
                {
                    ServicesData.map((val)=>{
                        return (
                        <>
                        {animation && <div className="box "  data-aos="flip-left" data-aos-duration="3000">
                            <div className="img point" onClick={()=>{link(val.slug)}}>
                                <img src={val.img} alt="" />
                            </div>
                            <div className="text">
                                <h2>{val.author}</h2>
                                <p>{val.title}</p>
                            </div>
                        </div>}
                        {!animation && <div className="box " >
                            <div className="img point" onClick={()=>{link(val.slug)}}>
                                <img src={val.img} alt="" />
                            </div>
                            <div className="text">
                                <h2>{val.author}</h2>
                                <p>{val.title}</p>
                            </div>
                        </div>}
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