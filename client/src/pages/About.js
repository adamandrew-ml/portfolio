import AboutTech from '../components/AboutTech'
import RenderText from '../components/RenderText'
import RenderImageLocal from '../components/RenderImageLocal'
import aboutText from '../data/about_text.json'



const About = () => {

  const dataProps = {
    "textArray" : aboutText,
    "imageID"   : "about-img",
    "imagePath" : "/images/aa_img2.jpeg"
  }

  const classProps = {
    "imageClass": "about-image",
    "textClass" : "about-textbox"
  }

  return (
    <div id="about">
      <div className="about-container">
        <RenderImageLocal {...dataProps} {...classProps}/>
        <RenderText {...dataProps} {...classProps}/>
      </div>
      <AboutTech />
    </div>
  )
}

export default About