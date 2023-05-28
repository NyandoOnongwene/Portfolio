import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/Portfolio1.png'
import Portfolio2 from '../../assets/Portfolio2.png'
import Portfolio3 from '../../assets/Portfolio3.png'
import Portfolio4 from '../../assets/Portfolio4.png'
import LMS from '../../assets/LMS.png'
import solar from '../../assets/solar.png'
import twitter from '../../assets/twitter.png'
import basketball from '../../assets/basketball.png'
import cats from '../../assets/cats.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="Glassmorphic Bank card" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/NyandoOnongwene/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LMS} alt="Library System" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/NyandoOnongwene/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio3} alt="Clothing Website" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/NyandoOnongwene/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio4} alt="Slider" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/NyandoOnongwene/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={cats} alt="A cat pet website" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/twitter" className='btn'>Github</a>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/twitter/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio2} alt="Shopping Website" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://githup.com" className='btn'>Github</a>
          <a href="https://githup.com/NyandoOnongwene/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={twitter} alt="Twitter home page" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/twitter" className='btn'>Github</a>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/twitter/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={basketball} alt="Counts number of baskets for two teams" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/Basketball" className='btn'>Github</a>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/Basketball" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={solar} alt="Solar System" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/SimpleSolarSystem" className='btn'>Github</a>
          <a href="https://github.com/NyandoOnongwene/FRONTEND-2/tree/New-Features/SimpleSolarSystem" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>
        
      </div>

       
    </section>
  )
}

export default Portfolio
