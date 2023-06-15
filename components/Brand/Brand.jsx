import React from 'react'
import data from '../../Data';

const Brand = () => {
  
  return (
    <>
    <section className="branding" >
      <div className="containersui grid">
        {data.map((value)=>{
          return <div className="box flex">
                    <div className="text" >
                      <h1>{value.id}</h1>
                    </div>
                    <div className="para" >
                      <h2>{value.title}</h2>
                      <p>{value.desc}</p>
                    </div>
          </div>
        })}
      </div>
    </section>
    </>
  )
}

export default Brand