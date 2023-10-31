import "../styles/Analytics.css"
import { useState } from 'react'

import SoftIntroHandler from '../components/SoftIntroHandler'


import AnalyticsHandler from "../components/AnalyticsHandler";


const Analytics = () => {

  const [showFilters, setShowFilters] = useState(false);
  const [showPlayers, setShowPlayers] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [softIntroOpen, setSoftIntroOpen] = useState(true);

  const packagedProps = {
    "softIntroOpen"    : softIntroOpen,
    "setSoftIntroOpen" : setSoftIntroOpen,
    "showFilters"      : showFilters,
    "setShowFilters"   : setShowFilters,
    "showPlayers"      : showPlayers,
    "setShowPlayers"   : setShowPlayers,
    "showAnalysis"     : showAnalysis,
    "setShowAnalysis"  : setShowAnalysis
  }

  return (
    <div id="analytics">
      <SoftIntroHandler {...packagedProps}/>
      <AnalyticsHandler {...packagedProps}/>
    </div>
  )
}

export default Analytics