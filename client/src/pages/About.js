import React from 'react'
import techIcons from "./data/image_locations.json"


const About = () => {

  return (
    <div className="outer-container">
      <div className="about-container">
        <div className = "about-image">
          <img id = "about-img" src={process.env.PUBLIC_URL + "/images/aa_img.jpeg"}/>
        </div>
        <p class = "about-textbox">
          <b>My name is Adam Andrew.</b> I am a professional data analytics consultant specialising in extracting meaningful and insightful stories from data of all shapes and sizes. Since 2012 I've been working with organisations to identify opportunities for data-enabled improvement, working businesses big and small across a range of industries.
          <br/><br/>
          My technical experience spans the data lifecycle from data strategy and enablement to expoloratory analytics, applying data science methods, developing intelligent solutions based on AI and machine learning, and creating business facing outpouts such as web applications, BI solutions and presentations for senior audiences.
        </p>
        <ul className="about-icon-boxes">
          {techIcons.map((item) => (
            <li><img src ={process.env.PUBLIC_URL + item.iconsrc}/></li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}

export default About