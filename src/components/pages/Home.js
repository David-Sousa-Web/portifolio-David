import React from 'react'
import '../../App.css'
import Homecontent from '../Homecontent.js'
import Sobre from '../Sobre.js';
import Portifolio from '../Portifolio.jsx';
import Contato from '../Contato.js'

function Home (){
    return(
        <>
            <Homecontent /> 
            <Sobre />
            <Portifolio />
            <Contato />
        </>
    )
}

export default Home;