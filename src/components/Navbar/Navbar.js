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



  window.location.pathname == "/" ? homeRef.current.style.color = "purple" : homeRef.current.style.color = "white"
  window.location.pathname == "/about" ? aboutRef.current.style.color = "purple" : aboutRef.current.style.color = "white"
  window.location.pathname == "/services" ? serviceRef.current.style.color = "purple" : serviceRef.current.style.color = "white"

  return (
    <div className='navbar'>
        <h1><a href="https://clarusway.com/"><span>Clarusway</span></a> Web Design</h1>
        <div className='pages'>
          <h1 onClick={() => navigate("/")} ref={homeRef}>Home</h1>
          <h1 onClick={() => navigate("/about")} ref={aboutRef}>About</h1>
          <h1 onClick={() => navigate("/services")} ref={serviceRef}>Services</h1>
        </div>
    </div>
  )
}

export default Navbar