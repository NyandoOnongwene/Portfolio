import React from 'react'
import './about.css'
import me1 from '../../assets/me1.png'
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
        <img src={me1}  alt="About Image" />
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
      
      <div>
      <p>
        Hi there viewer.My name is Nyando Onongwene. I'm a computer engineering student at the Faculty of
       Engineering and Technology, University of Buea.
       Thanks for visiting my profile.
       I'm also a ui/ux designer. And an aspiring Frontend developer. I'm working on gaining more skills.
       And also getting internships on this journey. Especially tech inclined to help me in my field and I wish to achieve
       academic excellence and also be very successful at my job site.
       Thank you
      </p>
      </div>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
     </div>
   </div>
   </section>
  )
}

export default About

