import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/SoftIntro.css'


const SoftIntroHandler = (props) => {

  const softIntroStyleOpen   = {height: "660px"}
  const softIntroStyleClosed = {height: "25px"}
  const [softIntroStyle, setSoftIntroStyle] = useState("");
  useEffect(() => {
    setSoftIntroStyle(props.softIntroOpen ? softIntroStyleOpen: softIntroStyleClosed)}, [props.softIntroOpen])
  const handleSoftIntro = () => props.setSoftIntroOpen(!props.softIntroOpen);

  return (
    <div className="analytics-soft-intro-handler" style={{...softIntroStyle}}>
      <div className="analytics-navbar">
        <ul className="analytics-content-filters" style={props.softIntroOpen ? {opacity: 0} : {opacity: 1}}>
          <li onClick={() => {props.setShowFilters(!props.showFilters)}}>Filters</li>
          <li onClick={() => {props.setShowPlayers(!props.showPlayers)}}>Players</li>
          <li onClick={() => {props.setShowAnalysis(!props.showAnalysis)}}>Analysis</li>
        </ul>
        <div className="analytics-soft-intro-expander" onClick={handleSoftIntro}>
          <text>{props.softIntroOpen ? "Hide  " : "Show  "}</text> <FontAwesomeIcon icon={props.softIntroOpen ? faCaretUp : faCaretDown} />
        </div>
      </div>
    </div>
  )
}

export default SoftIntroHandler