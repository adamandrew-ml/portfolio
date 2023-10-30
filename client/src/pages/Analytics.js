import { useState, useEffect } from 'react'
import Filters from '../components/Filters'
import CardStack from '../components/CardStack';
import DataAnalysis from '../components/DataAnalysis';

const Fifa = () => {

  const [filterDataYear, setfilterDataYear] = useState("Select all");
  const getFilterArgYear = (filterDataYear) => {setfilterDataYear(filterDataYear);}

  const [filterDataClub, setfilterDataClub] = useState("Select all");
  const getFilterArgClub = (filterDataClub) => {setfilterDataClub(filterDataClub);}

  const [filterDataNaty, setfilterDataNaty] = useState("Select all");
  const getFilterArgNaty = (filterDataNaty) => {setfilterDataNaty(filterDataNaty);}


  const filterProps = {
    "Year": getFilterArgYear,
    "Club": getFilterArgClub,
    "Naty": getFilterArgNaty
  }

  const currentSelections = {
    "Year": filterDataYear,
    "Club": filterDataClub,
    "Naty": filterDataNaty,
  }

  const [playerData, setPlayerData] = useState([{}])
  useEffect(() => {
    fetch(`/query?year__eql=${filterDataYear}&club_name__eql=${filterDataClub}&nationality__eql=${filterDataNaty}`).then(
    res => res.json()).then(playerData => {setPlayerData(playerData)})}, [filterDataYear, filterDataClub, filterDataNaty]);
  
  return (
    <div id="analytics">
      <div className="fifa-container">
        <Filters currentSelections={currentSelections} filterProps={filterProps} playerData={playerData}/>
        <CardStack playerData={playerData}/>
        <DataAnalysis/>
      </div>
    </div>
  )
}

export default Fifa