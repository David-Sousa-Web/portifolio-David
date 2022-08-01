import React from "react"
import "./Portifolio.css"
import Card from "./Card"
import Portfolio_data from "./PortifolioData"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>AQUI ESTÃO ALGUNS DOS MEUS PROJETOS</h4>
            <h1>Meu Portifólio</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} link={value.link} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio