import NavBar from './structure/NavBar'
import About from './pages/About'
import Engagements from './pages/Engagements'
import Analytics from './pages/Analytics'

import "./styles/Defaults.css"

//https://www.pexels.com/


const App = () => {
  
  return (
    <>
    <NavBar />
    <div className="outer-container">
      <About/>
      <Engagements />
      <Analytics />
      <About/>
    </div>
    </>
  )
};

export default App;