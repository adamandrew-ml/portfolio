// FAR TOO MUCH GOING ON HERE - SIMPLIFY


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import techIcons from "../data/image_locations.json"
import { useState, useEffect } from 'react' 
// https://fontawesome.com/v5/docs/web/use-with/react


const AboutTech = () => {

  const [isClicked, setIsClicked] = useState(false);

  const techTypes = techIcons.map(item => item.group);
  const [techSpecifics,   setTechSpecifics]    = useState([])
  const [techSelected,    setTechSelected]     = useState("")
  const [techDescription, settechDescription]  = useState("")

  const [techStackStyle,  setTechStackStyle]   = useState({height: "0px", opacity: 0})
  useEffect(() => {setTechStackStyle({height: "100px", opacity: 1})}, [isClicked]);

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
    <div className="find-out-more-expandable">
      <div id="find-out" onClick={() => {setIsClicked(!isClicked);}}>
        <text>Find out more</text>
        <FontAwesomeIcon icon={isClicked ? faCaretUp : faCaretDown} />
      </div>
      {!isClicked ? <></> :

        <ul className="tech-stack-container" style={{width: techDetailsStyle.width}}>
        <li className="tech-stack-groups">
          <ul style={{...techStackStyle}}>
            {techTypes.map((item, i) => (<li key={i} onClick={() => handleTechSelection(item)}>{item}</li>))}
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
          <ul>
            {techSpecifics.map((item, i) => (
              <li key={i}><img alt="Nothing here" src ={process.env.PUBLIC_URL + item.iconsrc}/></li>
            ))}
          </ul>
        </li>
        </ul>

      }
    </div>
  )
}

export default AboutTech


