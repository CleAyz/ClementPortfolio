import React from 'react'
import './about.css'
import aboutpic from '../../assets/pic1.jpeg'

import { RiAwardFill } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { RiFolderOpenLine } from 'react-icons/ri'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={aboutpic} alt="" >
                        </img>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <RiAwardFill className='about__icon' />
                            <h5>Experience</h5>
                            <small>&gt; 2 year</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>4 companies</small>
                        </article>

                        <article className='about__card'>
                            <RiFolderOpenLine className='about__icon' />
                            <h5>Projects</h5>
                            <small>4+ Completed</small>
                        </article>
                    </div>
                    <p>I am a Mobile Developer for React and Android currently in OCBC Bank
                        I enjoy playing outdoor water sports and work on my professional skills by learning new things during my free time.
                        I strongly believe in lifelong learning as it fuels our knowledge and skills in meaningful ways.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>


        </section >
    )
}

export default About