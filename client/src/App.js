import NavBar from './components/NavBar'
import About from './pages/About'
import Engagements from './pages/Engagements'
import Analytics from './pages/Analytics'
import Testing from './pages/Testing'
import Project from './pages/Project'

const App = () => {
  
  return (
    <>
      <NavBar />
      <div id="outer-container">
        <About id="about"/>
        <Engagements id="engagements"/>
        <Analytics id="analytics"/>
        <Project id="project"/>
        <Testing id="testing"/>
      </div>
    </>
  )
};

export default App;