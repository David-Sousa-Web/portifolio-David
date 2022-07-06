import React from 'react'
import '../../App.css'
import Homecontent from '../Homecontent.js'
import Sobre from '../Sobre.js';
import Portifolio from '../Portifolio.jsx';

function Home (){
    return(
        <>
            <Homecontent /> 
            <Sobre />
            <Portifolio />
        </>
    )
}

export default Home;