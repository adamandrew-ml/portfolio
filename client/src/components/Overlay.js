import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import RenderText from '../components/RenderText'
import analyticsText from '../data/analytics_text.json'

const Overlay = (props) => {

  const softIntroStyleOpen   = {height: "630px", backgroundColor: "#ffffff95"}
  const softIntroStyleClosed = {height: "25px", backgroundColor: "#00000095"}
  const [softIntroStyle, setSoftIntroStyle] = useState("");
  useEffect(() => {
    setSoftIntroStyle(props.softIntroOpen ? softIntroStyleOpen: softIntroStyleClosed)}, [props.softIntroOpen])
  const handleSoftIntro = () => props.setSoftIntroOpen(!props.softIntroOpen);

  return (
    <div className="analytics-navbar-overlay" style={{...softIntroStyle}}>
      <div className="analytics-navbar">
        <ul className="analytics-content-filters" style={props.softIntroOpen ? {opacity: 0} : {opacity: 1}}>
          <li onClick={() => {props.setShowFilters(!props.showFilters)}}>Filters</li>
          <li onClick={() => {props.setShowPlayers(!props.showPlayers)}}>Players</li>
          <li onClick={() => {props.setShowAnalysis(!props.showAnalysis)}}>Analysis</li>
        </ul>
        <div className="analytics-navbar-overlay-expander" onClick={handleSoftIntro} style={props.softIntroOpen ? {color: "black"} : {opacity: "white"}}>
          <text>{props.softIntroOpen ? "Hide  " : "Show  "}</text> <FontAwesomeIcon icon={props.softIntroOpen ? faCaretUp : faCaretDown} />
        </div>
      </div>
      <img className="analytics-navbar-image" src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg"></img>
      {
        !props.softIntroOpen ? <></> :
        <div className="bigblockoftext">
          <RenderText textArray={analyticsText} textClass="about-textbox"/>
        </div>
      }
    </div>
  )
}

export default Overlay