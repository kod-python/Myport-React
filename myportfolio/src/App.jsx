import "./style.css"

import Home from "./Pages/Home/Home"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"



const App = () =>{
  return(
    <div className="app">


<Router>

  <Routes>

    <Route exact path="/" element={<Home />} />
  </Routes>
</Router>


    </div>
  )
}

export default App