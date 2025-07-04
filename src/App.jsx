import { Navbar } from "./components"
import { BrowserRouter } from "react-router-dom"
import {About} from './pages'
function App() {
 

  return (
    <>
   <BrowserRouter>
  <div >
  <Navbar/>
  <About/>
  </div>
   </BrowserRouter>
    </>
  )
}

export default App
