import { useState, useEffect } from 'react' 
import techIcons from "../data/image_locations.json"
import '../styles/AboutTechCont.css'

const AboutTechCont = () => {

  const techTypes = techIcons.map(item => item.group);
  const [techSpecifics,   setTechSpecifics]    = useState([])
  const [techSelected,    setTechSelected]     = useState("")
  const [techDescription, settechDescription]  = useState("")
  // const [techStackStyle,  setTechStackStyle]   = useState({height: "0px", opacity: 0})

  const styleDefaults = {width: "29%",  opacity: 0, visibility: "hidden",  transitionDelay: "0s",   transitionDuration: "0.1s"}
  const styleUpdated  = {width: "100%", opacity: 1, visibility: "visible", transitionDelay: "0.3s", transitionDuration: "0.5s"}

  const [techDetailsStyle, setTechDetailsStyle] = useState(styleDefaults)
  useEffect(() => {
    techSpecifics.length > 0 ? setTechDetailsStyle(styleUpdated) : setTechDetailsStyle(styleDefaults)
  }, [techSpecifics]);

  const handleTechSelection = (item) => {
    {techSelected === item && techSpecifics.length > 0 ? setTechSpecifics([]) : setTechSpecifics(techIcons[techTypes.indexOf(item)].tech)};
    settechDescription(techIcons.filter(d => d.group === item)[0].capability);
    setTechSelected(item);
  }


  return (
    <ul className="tech-stack-container" style={{width: techDetailsStyle.width}}>
      <li className="tech-stack-groups">
        <ul className = "list-vertical">
          {techTypes.map((item, i) => (<li className="link" key={i} onClick={() => handleTechSelection(item)}>{item}</li>))}
        </ul>
      </li>

      <li className="tech-capability-desc" style={
        {
          opacity: techDetailsStyle.opacity,
          visibility: techDetailsStyle.visibility,
          transitionDuration: techDetailsStyle.transitionDuration,
          transitionDelay: techDetailsStyle.transitionDelay
        }
        }>
        <p>{techDescription}</p>
      </li>

      <li className="tech-stack-specifics" style={
        {
          opacity: techDetailsStyle.opacity,
          visibility: techDetailsStyle.visibility,
          transitionDuration: techDetailsStyle.transitionDuration
        }
        }>
        <ul className = "list-wrap">
          {techSpecifics.map((item, i) => (
            <li key={i}><img alt="Nothing here" src ={process.env.PUBLIC_URL + item.iconsrc}/></li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default AboutTechCont