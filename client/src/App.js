import React from 'react'

import NavBar from './pages/NavBar'
import "./styles/NavBar.css"

import About from './pages/About'
import "./styles/About.css"

import Engagements from './pages/Engagements'
import "./styles/Engagements.css"

import Analytics from './pages/Analytics'
import "./styles/Analytics.css"





const App = () => {
  
  return (
    <>
    <NavBar />
    <div className="outer-container">
      <About/>
      <Engagements />
      <Analytics />
    </div>
    </>
  )
};

export default App;