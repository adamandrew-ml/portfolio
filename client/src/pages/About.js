import Expandable from '../components/bank/Expandable'
import RenderText from '../components/bank/RenderText'
import RenderImageLocal from '../components/bank/RenderImageLocal'
import aboutText from '../data/about_text.json'
import AboutTechCont from '../components/app/AboutTechCont'


const About = () => {

  const dataProps = {
    "textArray" : aboutText,
    "imageID"   : "about-img",
    "imagePath" : "/images/aa_img2.jpeg"
  }

  const classProps = {
    "imageClass": "about-image",
    "pageClass" : "about-container"
  }

  return (
    <div id="about" class="page" style={{paddingTop: "120px"}}>
      <div className="page-content">
        <RenderImageLocal id = "about-img" {...dataProps} {...classProps}/>
        <RenderText {...dataProps}/>
      </div>
      <Expandable style={{width: "80%"}}{...dataProps} {...classProps} boxContent={<AboutTechCont/>}/>
    </div>
  )
}

export default About