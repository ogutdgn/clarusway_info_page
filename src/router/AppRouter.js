import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/Services"
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Html from "../pages/Html"
import Css from "../pages/Css"
import Brush from "../pages/Brush"


const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/html" element={<Html/>}/>
          <Route path="/css" element={<Css/>}/>
          <Route path="/brush" element={<Brush/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default AppRouter
