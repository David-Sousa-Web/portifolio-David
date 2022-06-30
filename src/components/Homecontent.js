import React from 'react'
import '../App.css'
import './Homecontent.css'

function Sobre() {
  return (
    <div className='homecontent-container'>
        <video src='./videos/video-2.mp4' autoPlay loop muted/>
        <h1>P O R T I F O L I O</h1>
        <p>David Sousa</p>
        <h3>| Full Stack Developer |</h3>
        <div className='fa-2x'>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
  )
}

export default Sobre