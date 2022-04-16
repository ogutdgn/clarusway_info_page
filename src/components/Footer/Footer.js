import React from 'react'
import "./Footer.css"
import cw from "../../assets/clarusway.png"

const Footer = () => {
  return (
    <div className='footer'>
      <p>Clarusway Web Design, Copyright © 2022</p>
      <a href="https://clarusway.com/"> <img src={cw} alt="" style={{width: "150px"}}/> </a>
    </div>
  )
}

export default Footer