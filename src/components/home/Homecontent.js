import React from 'react'

import './Homecontent.css'
import '../sobre/Sobre.js'

function Homecontent() {
  return (
    <div id='Home' className='homecontent-container'>

        <video src='./videos/Geometric - 80081.mp4' autoPlay loop muted/>

          <h1>PORTIFÓLIO</h1>

          <p>DAVID SOUSA</p>

          <h3> Full Stack Developer </h3>
          
          <div className='fa-2x'>

             <a href='#Sobre'><i class="fa-solid fa-chevron-down"></i></a>

          </div>    
               
    </div>
  )
}

export default Homecontent