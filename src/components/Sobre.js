import React from 'react'
import '../App.css'
import './Sobre.css'

function Sobre() {
  return (
    <section id='Sobre' className='sobre-content'>
        <div className='content'>
            <div className='image-david'>
              <img src='./images/Pigeon.png' alt=''/>
            </div>
            <div className='sobre-container'>
              <h1>Sobre Mim:</h1> 
              <div className='content-text'>
                <p>Sou Desenvolvedor Full Stack Web, atualmente estou<br/> cursando o superior
                em Analise de desenvolvimento de<br/> sistemas e tenho o ensino medio tecnico em
                técnico em<br/> informática - desenvolvimento de sistemas, sou apaixonado<br/> por tecnologia e
                estudo progamação desde 2017.</p>
              </div>
            </div>
            <div className='perfil-container'>
                <h1>Perfil:</h1>
                <h3>David Leite Sousa</h3>
                <p className='cargo'>Desenvolvedor Web Full Stack</p>
                <p className='button-empurrar'>david01sousa@hotmail.com</p>
                <button className='contato'>Entre em Contato</button>
                <button className='cv'>Download CV</button>
            </div>
        </div>
        <div className='habilidade-content'>
          <h1>Skills</h1>






        </div>

    </section>
  )
}

export default Sobre