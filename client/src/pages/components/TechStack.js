import React from 'react'
import techIcons from "../../data/image_locations.json"
import { useState } from 'react' 

const TechStack = () => {


  const techTypes = techIcons.map(item => item.group);
  // const [techSelection, setTechSelection] = useState("");
  const [techSpecifics, setTechSpecifics] = useState([])
  const [techDescription, settechDescription] = useState("EXPAND ON SELECTION")
  
  const handleTechSelection = (item) => {
    // setTechSelection(item);
    setTechSpecifics(techIcons[techTypes.indexOf(item)].tech);
    settechDescription(techIcons.filter(d => d.group === item)[0].capability);
  }

  return (
    <div className="tech-stack-container">
      
      <ul className="tech-stack-groups">
        {techTypes.map((item, i) => (<li key={i} onClick={() => handleTechSelection(item)}>{item}</li>))}
      </ul>

      <div className="tech-capability-desc">
        {techDescription}
      </div>

      <ul className="tech-stack-specifics">
        {techSpecifics.map((item, i) => (
          <li key={i}><img alt="Nothing here" src ={process.env.PUBLIC_URL + item.iconsrc}/></li>
        ))}
      </ul>
    </div>
  )
}

export default TechStack