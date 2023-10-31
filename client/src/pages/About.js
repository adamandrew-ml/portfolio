import "../styles/About.css"
import FindOutMore from '../components/FindOutMore'
import AboutText from '../components/AboutText'
import AboutImage from '../components/AboutImage'


const About = (bgc) => {
  return (
    <div id="about" style={{backgroundColor: bgc.bgc}}>
      <div className="about-container">
        <AboutImage />
        <AboutText />
      </div>
      <FindOutMore />
    </div>
  )
}

export default About