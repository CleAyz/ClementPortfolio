import React from 'react'
import CV from '../../assets/cv.pdf'

const Resume = () => {

    return (
        <div className="cta">
            <a href={CV} download="clement cv.pdf" className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default Resume