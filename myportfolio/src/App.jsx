import "./style.css"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"



const App = () =>{
  return(
    <div className="app">


<Router>

  <Routes>

    <Route exact path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route  path="/Portfolio" element={<Portfolio />} />
    <Route  path="/Contact" element={<Contact />} />
  </Routes>
</Router>


    </div>
  )
}

export default App