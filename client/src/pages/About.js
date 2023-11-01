import "../styles/About.css"
import AboutTech from '../components/AboutTech'
import RenderText from '../components/RenderText'
import RenderImageLocal from '../components/RenderImageLocal'
import aboutText from '../data/about_text.json'



const About = (bgc) => {

  return (
    <div id="about">
      <div className="about-container">
        <RenderImageLocal
          imageID="about-img"
          imagePath="/images/aa_img2.jpeg"
          imageClass="about-image"/>
        <RenderText
          textArray={aboutText} textClass="about-textbox"/>
      </div>
      <AboutTech />
    </div>
  )
}

export default About