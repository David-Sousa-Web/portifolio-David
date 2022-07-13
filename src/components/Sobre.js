import React from 'react'
import '../App.css'
import './Sobre.css'

function Sobre() {
  return (
    <>
      <section id='Sobre' className='sobre-content'>
          <div className='content-sobre'>
              <div className='image-david'>
                <img src='./images/Pigeon.png' alt=''/>
              </div>
              <div className='sobre-container'>
                <h1>Sobre Mim:</h1> 
                <div className='content-text'>
                  <p>Sou Desenvolvedor Full Stack Web, atualmente estou<br/> cursando o superior
                  em Analise e desenvolvimento de<br/> sistemas e tenho o ensino medio
                  técnico em informática -<br/> desenvolvimento de sistemas, sou apaixonado<br/> por tecnologia e
                  estudo progamação desde 2017.</p>
                </div>
              </div>
              <div className='perfil-container'>
                  <h1>Perfil:</h1>
                  <h3>David Leite Sousa</h3>
                  <p className='cargo'>Desenvolvedor Web Full Stack</p>
                  <p className='button-empurrar'>david01sousa@hotmail.com</p>
                  <button className='contato'>Entre em Contato</button>
                  <a className='cv' href='CV_David Sousa_En.pdf' download={'CV_David Sousa_En.pdf'}>Download CV</a>
              </div>
          </div>
          <div className='habilidade-content'>
            <h1>Skills</h1>
            <div className='icons fa-3x'>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-js-square"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-node"></i>
              <i class="fa-brands fa-vuejs"></i>
              <i class="fa-brands fa-aws"></i>
              <i class="fa-solid fa-database"></i>
            </div> 
          </div>

      </section>
    </>
  )
}

export default Sobre