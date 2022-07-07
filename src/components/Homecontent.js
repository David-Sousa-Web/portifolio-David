import React from 'react'
import '../App.css'
import './Homecontent.css'
import './Sobre.js'

function Homecontent() {
  return (
    <div id='Home' className='homecontent-container'>
        <video src='./videos/Geometric - 80081.mp4' autoPlay loop muted/>   
          <h1>P O R T I F Ó L I O</h1>
          <p>David Sousa</p>
          <h3>| Full Stack Developer |</h3>
          <div className='fa-2x'>
             <a href='#Sobre'><i class="fa-solid fa-chevron-down"></i></a>
          </div>         
    </div>
  )
}

export default Homecontent