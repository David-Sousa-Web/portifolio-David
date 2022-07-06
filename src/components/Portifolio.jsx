import React from 'react'
import '../App.css'
import './Portifolio.css'
import PortifolioData from './PortifolioData.js'

export const Portifolio = () => {
  return (
    <>
      <section className='content-portfolio'>
        <div className="heading">
          <h3>MEUS PROJETOS</h3>
          <h1>um pouco mais dos meus melhores projetos</h1>
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