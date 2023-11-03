import { useState, useEffect } from 'react'

import Overlay from '../components/Overlay'
import AnalyticsHandler from "../components/AnalyticsHandler";


const Analytics = () => {

  const [showFilters,   setShowFilters]   = useState(false);
  const [showPlayers,   setShowPlayers]   = useState(false);
  const [showAnalysis,  setShowAnalysis]  = useState(false);
  const [overlayOpen,   setOverlayOpen]   = useState(true);
  const [overallHeight, setOverallHeight] = useState()
  const [overlayStyle,  setOverlayStyle]  = useState("");

  const overlayStyleOpen    = {height: "630px", backgroundColor: "#ffffff95"}
  const overlayStyleClosed  = {height: "25px", backgroundColor: "#00000095"}
  const sectionStyleOn      = {width: "100%", opacity: 1, height: overallHeight, padding: "0px 5px"}
  const sectionStyleOff     = {width: "0px", opacity: 0, height: overallHeight, padding: "0px"}
  const sectionStyleTrans   = {transitionDuration: "0.2s", transitionDelay: "0.2s", padding: "2px 5px"}

  useEffect(() => {setOverlayStyle(overlayOpen ? overlayStyleOpen: overlayStyleClosed)}, [overlayOpen])
  useEffect(() => {overlayOpen === true ? setOverallHeight("0px") : setOverallHeight("600px")}, [overlayOpen])

  const applyStyle = (styleType, showVar) => {
    if (styleType === "inner") {
      return !overlayOpen && showVar ? {...sectionStyleOn, ...sectionStyleTrans} : {...sectionStyleOff};
    } else {
      return showVar ? {...sectionStyleOn} : {width: sectionStyleOff.width}
    }
  }

  const packagedProps = {
    "overlayOpen"          : overlayOpen,
    "setOverlayOpen"       : setOverlayOpen,
    "showFilters"          : showFilters,
    "setShowFilters"       : setShowFilters,
    "showPlayers"          : showPlayers,
    "setShowPlayers"       : setShowPlayers,
    "showAnalysis"         : showAnalysis,
    "setShowAnalysis"      : setShowAnalysis,
    "overlayStyle"         : overlayStyle,
    "setOverlayStyle"      : setOverlayStyle,
    "overallHeight"        : overallHeight,
    "setOverallHeight"     : setOverallHeight,
    "overlayStyleOpen"     : overlayStyleOpen,
    "overlayStyleClosed"   : overlayStyleClosed,
    "sectionStyleOn"       : sectionStyleOn,
    "sectionStyleOff"      : sectionStyleOff,
    "sectionStyleTrans"    : sectionStyleTrans,
    "applyStyle"           : applyStyle
  }

  const dataProps = {
    "overlayBackground" : "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg",
  }

  const classProps = {
    "classNav"            : "analytics-navbar",
    "classOverlayContent" : "analytics-content-filters",
    "classOverlayImage"   : "analytics-navbar-image",
    "classFlexSection"    : "analytics-section"
  }
  

  return (
    <div id="analytics">
      <Overlay {...packagedProps} {...classProps} {...dataProps}/>
      <AnalyticsHandler {...packagedProps} {...classProps}/>
    </div>
  )
}

export default Analytics