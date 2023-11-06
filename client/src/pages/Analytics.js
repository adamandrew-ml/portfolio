import { useState } from 'react'
import Overlay from '../components/bank/Overlay'
import AnalyticsHandler from "../components/app/AnalyticsHandler";
import analyticsText from '../data/analytics_text.json'

const Analytics = () => {

  const [overlayOpen,   setOverlayOpen]   = useState(true);

  const [showFilters,   setShowFilters]   = useState(false);
  const [showPlayers,   setShowPlayers]   = useState(false);
  const [showAnalysis,  setShowAnalysis]  = useState(false);

  const overlayNavData = [
    {"text": "Filters",  "stateVar": showFilters,  "setFunc": setShowFilters,  "sectionStyle": {backgroundColor: "red", maxWidth: "200px"}},
    {"text": "Players",  "stateVar": showPlayers,  "setFunc": setShowPlayers,  "sectionStyle": {backgroundColor: "blue"}},
    {"text": "Analysis", "stateVar": showAnalysis, "setFunc": setShowAnalysis, "sectionStyle": {backgroundColor: "green"}}
  ]

  const packagedProps = {
    "overlayOpen"          : overlayOpen,
    "setOverlayOpen"       : setOverlayOpen,
    "overlayNavData"       : overlayNavData,
    "overlayBackground"    : "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg",
    "overlayText"          : analyticsText
  }  

  return (
    <div id="analytics" class="page">
      <Overlay {...packagedProps}/>
      <AnalyticsHandler {...packagedProps}/>
    </div>
  )
}

export default Analytics