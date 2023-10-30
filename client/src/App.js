import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import FindOutMore from './components/FindOutMore'
import Fifa from './components/Fifa'

import "./styles/NavBar.css"
import "./styles/About.css"


const App = () => {
  
  return (
    <>
    <NavBar />
    <div className="outer-container">
      <About />
      <FindOutMore />
      <Fifa />
    </div>
    </>
  )
};

export default App;