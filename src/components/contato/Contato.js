import React, { useState } from 'react'

import './Contato.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result =() =>{
  return(
    <p className='report-message'>Sua Mensagem foi enviada com sucesso!
    </p>
  );
}

export const Contato = () => {
  const [result,showResult] = useState(false)
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_12dqucf', 'template_p5dujta', form.current, 'Nmv2F8_td3WcKDmL4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <>  
        <section id='Contato' className='content-contato'>
            <h1>Contato</h1>
            <div id="contato-container">
              <div className='contact-info'>
                <h4>
                  Informação contato
                </h4>
                <p>preencha o formulário e eu entrarei em contato com você em até 24 horas</p>
                <div className='icon-text'>
                  <i class="fa-solid fa-phone" ></i>
                  <span>(11) 96071-9806</span>
                </div>
                <div className='icon-text'>
                  <i class="fa-solid fa-envelope" ></i>
                  <span>daviddev.contato@gmail.com</span>
                </div>
                <div className='icon-text'>
                  <i class="fa-solid fa-location-dot" ></i>
                  <span>Barueri, SP</span>
                </div>
                <div className='social-media'>
                  <a href='https://www.linkedin.com/in/david-sousa-dev/' className='icon-circle'>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href='https://github.com/David-Sousa-Web' className='icon-circle'>
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href='https://www.instagram.com/david01sousa/' className='icon-circle'>
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
              <form form ref={form} onSubmit={sendEmail}>
                <div className='form-part'>
                  <div className='form-group'>
                    <label>Nome Completo</label>
                    <input type='text' name='fullName'/>
                  </div>
                </div> 
                <div className='form-part'>
                  <div className='form-group'>
                    <label>E-mail</label>
                    <input type='email' name='email'/>
                  </div>
                  <div className='form-group'>
                    <label>Telefone</label>
                    <input type='tel' name='telefone'/>
                  </div>
                </div>
                <div className='form-part'>
                  <div className='form-group'>
                    <label>Mensagem</label>
                    <textarea name='message'></textarea>
                  </div>
                </div>
                <div className='col'>
                  <div className='form-group-button'>
                    <button className='primary'>Enviar</button>
                  </div>
                </div>
                <div className='message-send'>{result ? <Result/> : null}</div>
              </form>
            </div>
        </section>
    </>
  )
}

export default Contato