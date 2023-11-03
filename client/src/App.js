import NavBar from './structure/NavBar'
import About from './pages/About'
import Engagements from './pages/Engagements'
import Analytics from './pages/Analytics'
import Testing from './pages/Testing'

import "./styles/Defaults.css"

//https://www.pexels.com/


const App = () => {
  
  return (
    <>
    <NavBar />
    <div id="outer-container">
      <About/>
      <Engagements />
      <Analytics />
      <Testing/>
    </div>
    </>
  )
};

export default App;