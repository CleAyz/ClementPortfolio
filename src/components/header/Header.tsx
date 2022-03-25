import React, { useEffect } from 'react'
import './header.css'
import HEADERPHOTO from '../../assets/profile2.png'

const Header = () => {

    return (
        <header>
            <div className="container header__container" >
                <h5 className="typewriter">Hello I'm </h5>
                <div className="fade">
                    <h1>Clement Ang</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                </div>
                <div className="me fadelast">
                    <img src={HEADERPHOTO} alt="" />
                </div>

                <a href="#contact" className='scroll__down fadephoto'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header