import React, { useRef } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const navigate = useNavigate();

  // console.log(window.location.pathname);
  // console.log(homeRef.current);

  // homeRef.current.style.color = "white"
  // aboutRef.current.style.color = "white"
  // serviceRef.current.style.color = "white"

  const status = () => {
    window.location.pathname == "/" ? homeRef.current.style.color = "purple" : homeRef.current.style.color = "white"
    window.location.pathname == "/about" ? aboutRef.current.style.color = "purple" : aboutRef.current.style.color = "white"
    window.location.pathname == "/services" ? serviceRef.current.style.color = "purple" : serviceRef.current.style.color = "white"
  }

  const handleHome = () => {
    navigate("/");
    status();
  }

  const handleAbout = () => {
    navigate("/about");
    status();
  }

  const handleServices = () => {
    navigate("/services");
    status();
  }

  return (
    <div className='navbar'>
        <h1><a href="https://clarusway.com/"><span>Clarusway</span></a> Web Design</h1>
        <div className='pages'>
          <h1 onClick={handleHome} ref={homeRef} style={{color:"purple"}}>Home</h1>
          <h1 onClick={handleAbout} ref={aboutRef}>About</h1>
          <h1 onClick={handleServices} ref={serviceRef}>Services</h1>
        </div>
    </div>
  )
}

export default Navbar