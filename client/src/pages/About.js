import RenderText from '../components/bank/RenderText'
import RenderImageLocal from '../components/bank/RenderImageLocal'
import aboutText from '../data/about_text.json'
import AboutTech from '../components/specific/AboutTech'


const About = (props) => {

  const dataProps = {
    "textArray" : aboutText,
    "imageID"   : "about-img",
    "imagePath" : "/images/aa_img2.jpeg"
  }

  return (
    <div id={props.id} class="page flex-center-all">
      <div className="width-80pc">
        <div className="flex-sp-bet">
          <RenderImageLocal id = "about-img" className="img-cover width-30pc height-300 float-left" {...dataProps}/>
          <RenderText className="width-60pc float-right" {...dataProps}/>
        </div>
        <AboutTech/>
      </div>
    </div>
  )
}

export default About