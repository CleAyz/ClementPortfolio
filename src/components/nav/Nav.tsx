import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")

    const navToState = (page: any) => {
        setActiveNav(page);
    }

    //TOOD: transition left and right.

    return (
        <nav>
            <a href="#" onClick={() => navToState('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => navToState('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => navToState("#experience")} className={activeNav === '#experience' ? 'active' : ''} ><BiBook /></a>
            <a href="#projects" onClick={() => navToState("#projects")} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => navToState("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav