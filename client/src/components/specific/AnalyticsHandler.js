import FlexSection from '../bank/FlexSection';
import Filters from './Filters'
import CardStack from './CardStack';
import DataAnalysis from './DataAnalysis';
import { useState, useEffect } from 'react'

const AnalyticsHandler = (props) => {

  const [playerData, setPlayerData] = useState([{}])
  const [queryString, setQueryString] = useState("/query?year__eql=2021")
  useEffect(() => {fetch(queryString).then(res => res.json()).then(playerData => {setPlayerData(playerData)})}, [queryString]);

  const getRender = (whichContent) => {
    const renderMapping = {
      "Filters"  : <Filters {...props} playerData={playerData} setPlayerData={setPlayerData} setQueryString={setQueryString}/>,
      "Players"  : <CardStack {...props} playerData={playerData}/>,
      "Analysis" : <DataAnalysis {...props}/>
    }
    return renderMapping[whichContent];
  }

  return (
    <div className="page-content">
      {!props.overlayNavData ? <></> : props.overlayNavData.map((item, i) =>
        <FlexSection
          {...item}
          overlayOpen    = {props.overlayOpen}
          sectionStyle   = {item.sectionStyle}
          showDecider    = {item.stateVar}
          renders        = {getRender(item.text)}
          />
      )}
    </div>
  )
}

export default AnalyticsHandler





