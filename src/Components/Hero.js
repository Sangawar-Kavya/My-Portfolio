import React from 'react'
import './Hero.css'
import profile_img from '../assets/profile_img.jpg'
import { Link } from 'react-scroll'
import linkdein_icon from '../assets/linkdein.svg'
import git_icon from '../assets/github.svg'
const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt='' className='profileIMG' />
            <h1> <span>I'm Kavya Sangawar</span>, frontend developer based in India.</h1>
            <p>Recent 2024 Graduate in Computer Science Engineering with a strong passion for web development.
                Proficient in HTML, CSS, and JavaScript.
                Experienced in building responsive and dynamic user interfaces using React.js, jQuery, and Bootstrap.
            </p>
            <div className='hero-action'>
                <div className='hero-accounts'>
                    <a href="https://github.com/Sangawar-Kavya" target="_blank" rel="noopener noreferrer">
                        <img src={git_icon} alt="GitHub Profile" />
                    </a>

                    <a href="https://www.linkedin.com/in/kavyasangawar" target="_blank" rel="noopener noreferrer">
                        <img src={linkdein_icon} alt="LinkedIn Profile" />
                    </a>
                </div>
                <div className='hero-connect'>
                    <Link to='contact' smooth={true} duration={500} >
                        Connect with me
                    </Link>
                </div>
                <div className="hero-resume">
                    <a href="https://drive.google.com/file/d/1fVd3CWWC2XUwkg3_BYudG48wghqOfqQx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
