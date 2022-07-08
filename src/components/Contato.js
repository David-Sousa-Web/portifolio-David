import React from 'react'
import '../App.css'
import './Contato.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contato = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_12dqucf', 'template_p5dujta', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
                  <a href='#' className='icon-circle'>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href='#' className='icon-circle'>
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href='#' className='icon-circle'>
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href='#' className='icon-circle'>
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <form form ref={form} onSubmit={sendEmail}>
                <div className='form-part'>
                  <div className='form-group'>
                    <label>Primeiro Nome :</label>
                    <input type='text'/>
                  </div>
                  <div className='form-group'>
                    <label>Sobrenome :</label>
                    <input type='text'/>
                  </div>
                </div> 
                <div className='form-part'>
                  <div className='form-group'>
                    <label>E-mail :</label>
                    <input type='email'/>
                  </div>
                  <div className='form-group'>
                    <label>Telefone :</label>
                    <input type='tel'/>
                  </div>
                </div>
                <div className='form-part'>
                  <div className='form-group'>
                    <label>Mensagem :</label>
                    <textarea></textarea>
                  </div>
                </div>
                <div className='col'>
                  <div className='form-group-button'>
                    <button className='primary'>Enviar</button>
                  </div>
                </div>
              </form>
            </div>
        </section>
    

    </>
  )
}

export default Contato