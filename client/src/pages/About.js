import React from 'react'
import FindOutMore from './components/FindOutMore'
import "../styles/About.css"

const About = () => {

  return (
    <div className="outer-container">
      <div className="about-container">
        <div className = "about-image">
          <img alt="Nothing here" id = "about-img" src={process.env.PUBLIC_URL + "/images/aa_img.jpeg"}/>
        </div>
        <div className = "about-textbox">
          <p style={{"fontSize": "30px"}}>Adam Andrew, Leeds UK</p>
          <p style={{"fontSize": "20px"}}>Professional data analytics and web development consultant</p>
          <p style={{"fontSize": "16px"}}>Since 2012, Adam has worked with organisations to identify opportunities for digital improvement,
            a specialist in extracting meaningful and insightful stories from data of all shapes and sizes.</p>
          <p style={{"fontSize": "18px"}}>Above all else, Adam is able to bring data to life for technical and non-technical audiences</p>
        </div>
      </div>
      <FindOutMore />

    </div>
  )
}

export default About