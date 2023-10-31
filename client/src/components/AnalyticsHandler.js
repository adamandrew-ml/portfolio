
import { useState, useEffect } from 'react'

// import Filters from '../components/Filters'
// import CardStack from '../components/CardStack';
// import DataAnalysis from '../components/DataAnalysis';


const AnalyticsHandler = (props) => {

  // const [filterDataYear, setfilterDataYear] = useState("Select all");
  // const getFilterArgYear = (filterDataYear) => {setfilterDataYear(filterDataYear);}

  // const [filterDataClub, setfilterDataClub] = useState("Select all");
  // const getFilterArgClub = (filterDataClub) => {setfilterDataClub(filterDataClub);}

  // const [filterDataNaty, setfilterDataNaty] = useState("Select all");
  // const getFilterArgNaty = (filterDataNaty) => {setfilterDataNaty(filterDataNaty);}

  // const filterProps = {
  //   "Year": getFilterArgYear,
  //   "Club": getFilterArgClub,
  //   "Naty": getFilterArgNaty
  // }

  // const currentSelections = {
  //   "Year": filterDataYear,
  //   "Club": filterDataClub,
  //   "Naty": filterDataNaty,
  // }

  // const [playerData, setPlayerData] = useState([{}])
  // useEffect(() => {
  //   fetch(`/query?year__eql=${filterDataYear}&club_name__eql=${filterDataClub}&nationality__eql=${filterDataNaty}`).then(
  //   res => res.json()).then(playerData => {setPlayerData(playerData)})}, [filterDataYear, filterDataClub, filterDataNaty]);


  {/* <Filters currentSelections={currentSelections} filterProps={filterProps} playerData={playerData}/>
  <CardStack playerData={playerData}/>
  <DataAnalysis/> */}




  const [overallHeight, setOverallHeight] = useState()
  useEffect(() => {
    props.softIntroOpen === true ?
    setOverallHeight("0px") :
    setOverallHeight("630px")
  }, [props.softIntroOpen])

  const sectionStyleOn    = {width: "100%", opacity: 1, height: overallHeight, padding: "0px 5px"}
  const sectionStyleOff   = {width: "0px", opacity: 0, height: overallHeight, padding: "0px"}
  const sectionStyleTrans = {transitionDuration: "0.2s", transitionDelay: "0.2s", padding: "2px 5px"}

  const applyStyle = (styleType, showVar) => {
    let returnStyle;
    if (styleType === "inner") {
      returnStyle = !props.softIntroOpen && showVar ?
        {...sectionStyleOn, ...sectionStyleTrans} : {...sectionStyleOff};
    } else {
      returnStyle = showVar ?
        {...sectionStyleOn} : {width: sectionStyleOff.width}
    }
    return returnStyle;
  }



  return (

    <div className="analytics-container">

      <div className="analytics-section" id="left" style={applyStyle("outer", props.showFilters)}>
        <div style={applyStyle("inner", props.showFilters)}>Something</div>
      </div>

      <div className="analytics-section" id="middle" style={applyStyle("outer", props.showPlayers)}>
        <div style={applyStyle("inner", props.showPlayers)}>Something</div>
      </div>

      <div className="analytics-section" id="right" style={applyStyle("outer", props.showAnalysis)}>
        <div style={applyStyle("inner", props.showAnalysis)}>Something</div>
      </div>

    </div>

  )
}

export default AnalyticsHandler





