import { useState, useEffect } from 'react' 
import techIcons from "../../data/image_locations.json"

const AboutTech = (props) => {

  const techTypes = techIcons.map(item => item.group);

  const [techBarOpen,     setTechBarOpen]      = useState(false)
  const [techSpecifics,   setTechSpecifics]    = useState([])
  const [techSelected,    setTechSelected]     = useState("")
  const [techDescription, settechDescription]  = useState("")

  const styleDefaults = {opacity: 0, visibility: "hidden",  transitionDelay: "0s",   transitionDuration: "0s"}
  const styleUpdated  = {opacity: 1, visibility: "visible", transitionDelay: "0.3s", transitionDuration: "0.5s"}

  const [techDetailsStyle, setTechDetailsStyle] = useState(styleDefaults)
  useEffect(() => {
    techSpecifics.length > 0 ? setTechDetailsStyle(styleUpdated) : setTechDetailsStyle(styleDefaults)
  }, [techSpecifics]);

  const handleTechSelection = (item) => {
    if (techSelected === item && techSpecifics.length > 0) {
      setTechBarOpen(false);
      setTechSpecifics([]);
    } else {
      setTechBarOpen(true);
      setTechSpecifics(techIcons[techTypes.indexOf(item)].tech)
    }
    settechDescription(techIcons.filter(d => d.group === item)[0].capability);
    setTechSelected(item);
  }

  return (
    <ul className="tech-stack-container borderrad-5 padding-tb-0 padding-lr-0 flex-sp-bet height-100"
      style={{width: techBarOpen === true ? "100%" : "30%"}}>
      <li key={"headers"} className="tech-stack-groups float-left">
        <ul className = "list-vertical">
          {techTypes.map((item, i) => (<li className="link" key={i}
          onClick={() => handleTechSelection(item)}>{item}</li>))}
        </ul>
      </li>

      <li key={"desc"} className="tech-capability-desc" style={{...techDetailsStyle}}>
        <p>{techDescription}</p>
      </li>

      <li key={"icons"} className="tech-stack-specifics" style={{...techDetailsStyle}}>
        <ul className = "list-wrap">
          {techSpecifics.map((item, i) => (
            <li key={i}><img alt="Nothing here" src ={process.env.PUBLIC_URL + item.iconsrc}/></li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default AboutTech