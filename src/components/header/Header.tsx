import React from 'react'
import './header.css'
import HEADERPHOTO from '../../assets/profile2.png'
import HeaderSocials from './HeaderSocials'
import Resume from './Resume'

const Header = () => {

    return (
        <header id="#">
            <div className="container header__container" >
                <h5 className="typewriter">Hello I'm </h5>
                <div className="fade">
                    <h1>Clement Ang</h1>
                    <h5 className="text-light">Mobile Developer</h5>
                    <Resume />
                    <HeaderSocials />
                    <div className="me fadelast">
                        <img src={HEADERPHOTO} alt="" />
                    </div>
                    <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>
            </div>
        </header>
    )
}

export default Header