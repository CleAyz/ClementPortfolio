import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BiUpArrowCircle } from 'react-icons/bi'
// import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'><BiUpArrowCircle /></a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="socials-icon">
                <a href="https://www.facebook.com/Clement.Ayz/"><FaFacebookF /></a>
                <a href="https://www.instagram.com/cle_ayz/"><FiInstagram /></a>
                {/* <a href="https://twitter.com"><IoLogoTwitter /></a> */}
            </div>

            <div className="footer__copyright">
                <small>&copy; ClementAyz.</small>
            </div>
        </footer>
    )
}

export default Footer