import React from 'react'
import '../../App.css'
import Homecontent from '../home/Homecontent.js'
import Sobre from '../sobre/Sobre.js';
import Portifolio from '../portifolio/Portifolio.jsx';
import Contato from '../contato/Contato.js'
import Footer from '../footer/Footer.js'

function Home (){
    return(
        <>
            <Homecontent /> 
            <Sobre />
            <Portifolio />
            <Contato />
            <Footer />
        </>
    )
}

export default Home;