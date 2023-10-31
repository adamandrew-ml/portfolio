import React from 'react'

import NavBar from './pages/NavBar'
import About from './pages/About'
import Engagements from './pages/Engagements'
import Analytics from './pages/Analytics'


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