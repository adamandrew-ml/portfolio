import FlexSection from '../components/FlexSection';
import Filters from '../components/Filters'
import CardStack from '../components/CardStack';
import DataAnalysis from '../components/DataAnalysis';
import { useState, useEffect } from 'react'

const AnalyticsHandler = (props) => {

  const [filterDataClub, setfilterDataClub] = useState("Select all");
  const getFilterArgClub = (filterDataClub) => {setfilterDataClub(filterDataClub);}

  const [filterDataNaty, setfilterDataNaty] = useState("Select all");
  const getFilterArgNaty = (filterDataNaty) => {setfilterDataNaty(filterDataNaty);}

  const filterProps = {
    "Club": getFilterArgClub,
    "Naty": getFilterArgNaty
  }

  const currentSelections = {
    "Club": filterDataClub,
    "Naty": filterDataNaty,
  }

  const [playerData, setPlayerData] = useState([{}])
  useEffect(() => {
    fetch(`/query?year__eql=2021&club_name__eql=${filterDataClub}&nationality__eql=${filterDataNaty}`).then(
    res => res.json()).then(playerData => {setPlayerData(playerData)})}, [filterDataClub, filterDataNaty]);


  const getRender = (whichContent) => {
    const renderMapping = {
      "Filters"  : <Filters {...props} currentSelections={currentSelections} filterProps={filterProps} playerData={playerData}/>,
      "Players"  : <CardStack {...props} playerData={playerData}/>,
      "Analysis" : <DataAnalysis {...props}/>
    }
    return renderMapping[whichContent];
  }








  return (
    <div className="page-content">
      {!props.overlayNavData ? <></> : props.overlayNavData.map((item, i) =>
        <FlexSection {...item} overlayOpen={props.overlayOpen} sectionStyle={item.sectionStyle} showDecider = {item.stateVar} renders={getRender(item.text)}/>
      )}
    </div>
  )
}

export default AnalyticsHandler





