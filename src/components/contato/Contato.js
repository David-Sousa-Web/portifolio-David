import React from 'react'

import './Contato.css'
//import { useRef } from 'react';
//import emailjs from '@emailjs/browser';
import { useForm, ValidationError } from '@formspree/react';

/*const Result =() =>{
  return(
    <p className='report-message'>Sua Mensagem foi enviada com sucesso!
    </p>
  );
}*/

export const Contato = () => {
  /*const [result,showResult] = useState(false)
  const form = useRef()*/

  const [state, handleSubmit] = useForm("mdojnlgj");
  if (state.succeeded) {
      return (
        <div className='content-contato'>
          
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

                  <a href='https://www.linkedin.com/in/david-sousa-dev/' className='icon-circle' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a href='https://github.com/David-Sousa-Web' className='icon-circle' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github"></i>
                  </a>

                  <a href='https://www.instagram.com/david01sousa/' className='icon-circle' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  
                </div>

              </div>

              <div className='center-validation'>

                <p id='message-validation'>Mensagem enviada com sucesso !</p>

              </div>

          </div>
        </div>
      );
  }

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

                  <a href='https://www.linkedin.com/in/david-sousa-dev/' className='icon-circle' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a href='https://github.com/David-Sousa-Web' className='icon-circle' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github"></i>
                  </a>

                  <a href='https://www.instagram.com/david01sousa/' className='icon-circle' target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  
                </div>

              </div>

              <form onSubmit={handleSubmit}>

                <div className='form-part'>

                  <div className='form-group'>

                    <label>Nome Completo</label>

                    <input id='nome' type='text' name='Nome Completo' required=""/>

                    <ValidationError 
                      prefix="Nome" 
                      field="Nome Completo"
                      errors={state.errors}
                    />

                  </div>

                </div>

                <div className='form-part'>

                  <div className='form-group'>

                    <label>E-mail</label>

                    <input id='email' type='email' name='email' required=""/>

                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />

                  </div>

                  <div className='form-group'>
                    
                    <label>Telefone</label>

                    <input id='telefone' type='tel' name='telefone' required=""/>

                    <ValidationError 
                      prefix="Telefone" 
                      field="telefone"
                      errors={state.errors}
                    />

                  </div>

                </div>

                <div className='form-part'>

                  <div className='form-group'>

                    <label>Mensagem</label>

                    <textarea id='message' name='message'/>

                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />

                  </div>

                </div>

                <div className='col'>

                  <div className='form-group-button'>

                    <button className='primary' type="submit" disabled={state.submitting}>Enviar</button>

                  </div>

                </div>

                {/*<div className='message-send'>{result ? <Result/> : null}</div>*/}

              </form>

            </div>

        </section>
    </>
  )
}

export default Contato