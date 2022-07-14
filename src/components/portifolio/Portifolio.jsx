import React from 'react'

import './Portifolio.css'
import PortifolioData from './PortifolioData.js'

export const Portifolio = () => {
  return (
    <>
      <section id='Portifolio' className='content-portfolio'>
        <div className="heading">
          <h1>MEUS PROJETOS</h1>
          <h3>Um pouco mais dos meus melhores projetos</h3>
        </div>
        <div className='content'>
            {PortifolioData.map((val) =>{
              return(
                <>
                  <div className='box'>
                    <div className='img'>
                      <img src={val.cover} alt="" />
                    </div>
                    <div className='overlay'>
                      <div className='text'>
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
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

export default Portifolio;