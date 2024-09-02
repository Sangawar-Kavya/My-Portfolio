import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo from '../assets/logo.png'
import underline from '../assets/nav_underline.svg'
import { Link } from 'react-scroll'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("hero")
  const menuRef = useRef()

  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }


  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
        <li><Link to='hero' smooth={true} duration={500}><p onClick={() => setMenu("hero")}>Home</p>{menu === "hero" ? <img src={underline} alt="" /> : <> </>} </Link></li>
        <li><Link to='about' smooth={true} duration={500}><p onClick={() => setMenu("about")}>About Me</p>{menu === "about" ? <img src={underline} alt="" /> : <> </>} </Link></li>
        <li><Link to='projects' smooth={true} duration={500}><p onClick={() => setMenu("projects")}>Projects</p>{menu === "projects" ? <img src={underline} alt="" /> : <> </>} </Link></li>
        <li><Link to='contact' smooth={true} duration={500}><p onClick={() => setMenu("contact")}>Contact</p>{menu === "contact" ? <img src={underline} alt="" /> : <> </>} </Link></li>
      </ul>
      <div className='nav-connect'>
        <Link to='contact' smooth={true} duration={500} >
          Connect With Me </Link>
      </div>
    </div>
  )
}

export default Navbar
