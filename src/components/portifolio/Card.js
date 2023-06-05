import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>

        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
        </div>

        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>

          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>

      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>

          <div onClick={toggleModal} className='overlay'></div>

          <div className='modal-content d_flex'>

            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>

            <div className='modal-text right'>

              <span>Desenvolvimento Web</span>

              <h1>{props.title}</h1>

              <p>{props.text} <br/>
                {props.text2}
              </p>

              <div className='button f_flex mtop'>

                <a className='btn_shadow' href={props.link} target="_BLANK" rel="noreferrer">
                  VIEW PROJECT <i class='fas fa-chevron-right'></i>
                </a>

                <a className='btn_shadow' href={props.git} target="_BLANK" rel="noreferrer">
                  GIT HUB <i class="fa-brands fa-github"></i>
                </a>

              </div>

              <button className='close-modal' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>

            </div>

          </div>
          
        </div>
      )}
    </>
  )
}

export default Card