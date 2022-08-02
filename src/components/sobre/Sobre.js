import React from 'react'
import './Sobre.css'
import { motion } from "framer-motion"
import{useInView} from 'react-intersection-observer';
import{useEffect} from 'react'
import{useAnimation} from 'framer-motion'

function Sobre() {
    const{ref,inView} = useInView();
    const animation = useAnimation();

    useEffect(() => {
      console.log("use effect hook,inView=",inView);
      if(inView){
          animation.start({
            x: 0,
            transition:{
              type: 'spring', duration:3, bounce:0.3
            } 
          });
      }
      if(!inView){
          animation.start({x:'-100vw'})
      }
    }, [inView]);
    
  return (
    <>
      <section ref={ref } id='Sobre' className='sobre-content'>
          <motion.h1 className='titulo-sobre' animate={animation}>Sobre</motion.h1>
          <motion.div className='content-sobre'
              animate={animation}>

              <div className='image-david'>
                <img src='./images/profile-pic (9).png' alt=''/>
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
                  <a className='contato' href="#Contato">Entre em Contato</a>
                  <motion.a className='cv' href='./images/CV_David Sousa_En.pdf' download={'CV_DavidSousa.pdf'} 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
                      Download CV
                  </motion.a>
              </div>
          </motion.div>
          <motion.div className='habilidade-content' animate={animation}>
            <h1>Skills</h1>
            <div className='icons fa-3x'>
              <i class="fa-brands fa-html5" title="HTML5"></i>
              <i class="fa-brands fa-css3-alt" title="CSS3"></i>
              <i class="fa-brands fa-js-square" title="JavaScript"></i>
              <i class="fa-brands fa-react" title="React"></i>
              <i class="fa-brands fa-node" title="Node"></i>
              <i class="fa-brands fa-aws" title="AWS"></i>
              <i class="fa-solid fa-database" title="SQL"></i>
            </div> 
          </motion.div>

      </section>
    </>
  )
}

export default Sobre