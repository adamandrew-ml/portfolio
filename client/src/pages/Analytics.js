import { useState } from 'react'
import Overlay from '../components/bank/Overlay'
import AnalyticsHandler from '../components/specific/AnalyticsHandler'
import analyticsText from '../data/analytics_text.json'

const Analytics = (props) => {

  const [overlayOpen,   setOverlayOpen]   = useState(true);
  const [showFilters,   setShowFilters]   = useState(false);
  const [showPlayers,   setShowPlayers]   = useState(false);
  const [showAnalysis,  setShowAnalysis]  = useState(false);

  const overlayNavData = [
    {"text": "Filters",  "stateVar": showFilters,  "setFunc": setShowFilters,  "sectionStyle": {backgroundColor: "#1B98E050", maxWidth: "200px", transitionDuration: "0.3s"}},
    {"text": "Players",  "stateVar": showPlayers,  "setFunc": setShowPlayers,  "sectionStyle": {backgroundColor: "#00000020"}},
    {"text": "Analysis", "stateVar": showAnalysis, "setFunc": setShowAnalysis, "sectionStyle": {backgroundColor: "#44A1A050"}}
  ]

  const packagedProps = {
    "overlayOpen"          : overlayOpen,
    "setOverlayOpen"       : setOverlayOpen,
    "overlayNavData"       : overlayNavData,
    "overlayBackground"    : "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg",
    "overlayText"          : analyticsText
  }

  return (
    <div id={props.id} class="page">
      <Overlay {...packagedProps}/>
      <AnalyticsHandler {...packagedProps}/>
    </div>
  )
}

export default Analytics