import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Homecontent.js'
import './Sobre.js';
import './Portifolio.jsx';
import './Contato.js'

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () =>{
        if(window.scrollY >= 300){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeBackground);

  return (
    <>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className='navbar-container'>
                <a href="#Home" className='navbar-logo'>
                   <img src='./images/DAVID_LOGO_BRANCO_3.png' alt=''/>
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ?'fas fa-times' : 'fas fa-bars'} />             
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#Home' className='nav-links' onClick={closeMobileMenu}>
                            Home  
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Sobre' className='nav-links' onClick={closeMobileMenu}>
                            Sobre 
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Portifolio' className='nav-links' onClick={closeMobileMenu}>
                            Portifolio  
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Contato' className='nav-links' onClick={closeMobileMenu}>
                            Contato  
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar