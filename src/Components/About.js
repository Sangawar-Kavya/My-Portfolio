import React from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg'
import profile_img from '../assets/profile_img.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} alt='' />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p> I'm really into building cool stuff with ReactJS - I love how it lets me create fast and smooth user experiences! It's all about problem-solving and collaborating with others to bring ideas to life.</p>
                        <p>I'm also excited to level up my skills with Backend soon - can't wait to take my skills to the next level and build even more awesome things.</p>
                        <p className='skills'>
                        Experienced in building responsive and dynamic user interfaces using<br/>
                            Frontend : HTML, CSS, JavaScript, React.js, jQuery, Bootstrap<br/>
                            Version Control: Git & GitHub<br/>
                            Tools: VS Code, NPM
                        </p>
                    </div>
                </div>
            </div>
            <div className='about-skills'>
                <div className='about-skill'><p>HTML&CSS </p><hr style={{ width: "60%" }} /></div>
                <div className='about-skill'><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
                <div className='about-skill'><p>ReactJS</p><hr style={{ width: "60%" }} /></div>
                <div className='about-skill'><p>Version Control: <br />Git & GitHub </p><hr style={{ width: "50%" }} /></div>
                <div className='about-skill'><p>Tools: <br />VS Code, NPM </p><hr style={{ width: "60%" }} /></div>
            </div>
        </div>
    )
}

export default About
