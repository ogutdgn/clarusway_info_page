import React from 'react';
import html from "../assets/logo_html.png";
import css from "../assets/logo_css.png";
import brush from "../assets/logo_brush.png";
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='home_page'>

      <div className='subscrise'>
        <h2>Subscrise To Our Newsletter</h2>
        <div className="input">
          <input type="email" placeholder='Enter email'/>
          <button>Subscrise</button>
        </div>
      </div>

      <div className="images">

        <div className="html">
          <img src={html} alt="" style={{height:"100px"}} onClick={() => navigate("/html")}/>
          <h4>HTML5 Markup</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis ipsum incidunt optio repellendus</p>

        </div>

        <div className="css">
          <img src={css} alt="" style={{height:"100px"}} onClick={() => navigate("/css")}/>
          <h4>CSS3 Styling</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis ipsum incidunt optio repellendus</p>        </div>

        <div className="brush">
          <img src={brush} alt="" style={{height:"100px"}} onClick={() => navigate("/brush")}/>
          <h4>Graphic Design</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis ipsum incidunt optio repellendus</p>
        </div>
      </div>
    </div>
  )
}

export default Home