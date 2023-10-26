import React from 'react'
import techIcons from "../data/image_locations.json"
import { useState } from 'react' 

const TechStack = () => {
  const [techSelection, setTechSelection] = useState("");
  const [techSpecifics, setTechSpecifics] = useState([])

  const techTypes = techIcons.map(item => item.group);


  const handleTechSelection = (item) => {
    setTechSelection(item);
    setTechSpecifics(techIcons[techTypes.indexOf(item)].tech)
  }

  return (
    <div className="tech-stack-container">
      <ul className="tech-stack-groups">
        {techTypes.map((item, i) => (<li key={i} onClick={() => handleTechSelection(item)}>{item}</li>))}
      </ul>
      <div className="tech-stack-specifics">
        <ul>
          {techSpecifics.map((item, i) => (
            <li key={i}><img src ={process.env.PUBLIC_URL + item.iconsrc}/></li>
          ))}
        </ul>
        <div className="capability-desc">
          Placeholder
        </div>
      </div>
    </div>
  )
}




    {/* <p style={{"fontSize": "16px"}}>Adam's technical experience spans the data lifecycle from data strategy and enablement to expoloratory analytics,
      applying data science methods, developing intelligent solutions based on AI and machine learning,
      and creating business facing outpouts such as web applications</p> */}




export default TechStack