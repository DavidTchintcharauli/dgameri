import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Signup from "./page/signup"
import Home from "./page/Home"
import FurnitureDetails from "./components/FurnitureDetails"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/FurnitureDetails" element={<FurnitureDetails />}/>
        <Route path="/furniture/:id" element={<FurnitureDetails />}/>
      </Routes>
    </Router>
  )
}

export default App()
