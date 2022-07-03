import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () =>{
        if(window.scrollY >= 80){
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
                <Link to="/" className='navbar-logo'>
                   <img src='./images/DAVID_LOGO_BRANCO_3.png' alt=''/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ?'fas fa-times' : 'fas fa-bars'} />             
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home  
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sobre' className='nav-links' onClick={closeMobileMenu}>
                            Sobre 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portifolio' className='nav-links' onClick={closeMobileMenu}>
                            Portifolio  
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contato' className='nav-links' onClick={closeMobileMenu}>
                            Contato  
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar