import { useState, useEffect } from 'react'

import RenderText from './RenderText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import defaultText from '../../data/default_text.json'
import '../../styles/Overlay.css'

const Overlay = (props) => {

  
  const [overlayStyle,  setOverlayStyle]  = useState("");
  const overlayStyleOpen    = {height: "630px", backgroundColor: "#ffffff95"}
  const overlayStyleClosed  = {height: "25px", backgroundColor: "#00000095"}

  useEffect(() => {setOverlayStyle(props.overlayOpen ? overlayStyleOpen: overlayStyleClosed)}, [props.overlayOpen])

  return (
    <div className="expandable-overlay" style={{...overlayStyle}}>
      <div className="flex-sp-bet" style={{padding: "2px"}}>
        <ul className="list-horizontal height20" style={props.overlayOpen ? {opacity: 0, width: "40%"} : {opacity: 1, width: "40%"}}>
          {!props.overlayNavData ? <></> : props.overlayNavData.map((item, i) => <li className="link"onClick={() => {item.setFunc(!item.stateVar)}}>{item.text}</li>)}
        </ul>
        <div className="flex-center-all link"
          onClick={() => props.setOverlayOpen(!props.overlayOpen)}
          style={{marginRight: "10px", color: props.overlayOpen || props.overlayOpen === undefined ? "black" : "white"}}>
          <text>{props.overlayOpen ? "Hide  " : "Show  "} <FontAwesomeIcon icon={props.overlayOpen ? faCaretUp : faCaretDown} /></text> 
        </div>
      </div>
      <img className="expandable-overlay-image expanable-overlay-stuff" src={props.overlayBackground}></img>
      <div className="expandable-overlay-textbox" style={!props.overlayOpen ?
          {opacity: 0, transition: "0.4s", transitionDelay: "0s"} : {opacity: 1, transition: "0.4s", transitionDelay: "0.4s"}}>
        <RenderText textArray={props.overlayText ? props.overlayText : defaultText}/>
      </div>
    </div>
  )
}

export default Overlay