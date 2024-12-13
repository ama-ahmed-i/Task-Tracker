
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import Home from "./pages/Home"
import EditTask from "./pages/EditTask"
import Notfound from "./pages/Notfound"
import Nav from "./components/Nav"


function App() {


  return (
   <Router>
    <Nav/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/task/:id" element={<EditTask/>}/>
      <Route path="*" element={<Notfound/>}/>
      
    </Routes>
   </Router>
  )
}

export default App
