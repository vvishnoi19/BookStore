import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Routes path='/'>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default App
