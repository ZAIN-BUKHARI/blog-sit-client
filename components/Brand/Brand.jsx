'use client'
import React,{useContext} from 'react'
import data from '../../Data';
import { ThemeContext } from '../../context/ThemeContext';
const Brand = () => {
  const {animation} = useContext(ThemeContext)
  return (
    <>
    <section className="branding" >
      <div className="containersui grid">
        {data.map((value)=>{
          return <div className="box flex">
                   {animation && <div className="text" data-aos="fade-right" data-aos-duration="2000" >
                     <h1>{value.id}</h1>
                    </div>}
                   {!animation && <div className="text" >
                     <h1>{value.id}</h1>
                    </div>}

                    {animation &&   <div className="para" data-aos="fade-left" data-aos-duration="2000" >
                      <h2>{value.title}</h2>
                      <p>{value.desc}</p>
                    </div>}
                    {!animation &&   <div className="para"  >
                      <h2>{value.title}</h2>
                      <p>{value.desc}</p>
                    </div>}
          </div>
        })}
      </div>
    </section>
    </>
  )
}

export default Brand