import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='socials'>
            <a href="https://www.linkedin.com/in/clementayz4341595a4849/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials