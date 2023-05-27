import React from 'react'
import './about.css'
import me1 from '../../assets/me1.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={me1} alt="About Image" />
      </div>

    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ Years Working</small>

        </article>
         <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>10+ Worldwide</small>
        </article>

         <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>20+ Completed Projects</small>
        </article>
         
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Doloribus voluptatum quibusdam commodi. 
        Accusantium, vel fugiat ipsa fuga itaque quis magni excepturi id, 
        cumque culpa animi inventore, a voluptatum commodi labore.
      </p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
   </div>
   </section>
  )
}

export default About

