import React from 'react'

const AboutImage = () => {
  return (
    <div className = "about-image">
      <img alt="Nothing here" id = "about-img" src={process.env.PUBLIC_URL + "/images/aa_img.jpeg"}/>
    </div>
  )
}

export default AboutImage