import React from "react"
import "./Portifolio.css"
import Card from "./Card"
import Portfolio_data from "./PortifolioData"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='Portfolio'>

        <div className='container'>

          <div className='heading text-center '>

            <h1>MEUS PROJETOS</h1>

          </div>

          <div className='content grid'>

            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} 
              totalLike={value.totalLike} title={value.title} text={value.Text} text2={value.Text2} like={value.like} link={value.link} />
            })}

          </div>

        </div>

      </section>
      
    </>
  )
}

export default Portfolio