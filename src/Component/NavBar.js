import React, { useState } from 'react'
import '../css/NavBar.css'

export default function NavBar() {
  const[isActive,setActive]=useState(false);

  const toggleNav=()=>{
    setActive(!isActive);
  }
  return (
    <>
      <nav>
          <div className={isActive?'navToggle active':'navToggle'} onClick={toggleNav}>
            <span></span> 
            <span></span> 
            <span></span> 
          </div>
          <h1 className='logo'>&lt;/&gt;</h1>
          <ul id="menu">
            <li className="navItem active"><a href="/">Home</a></li>
            <li className="navItem"><a href="/project">Projects</a></li>
            <li className="navItem"><a href="/skill">Skills</a></li>
            <li className="navItem"><a href="/resume">Resume</a></li>
            <li className="navItem"><a href="/about">About Me</a></li>
            <li className="navItem"><a href="/contact">Contact Me</a></li>
          </ul>
      </nav>
    </>
  )
}
