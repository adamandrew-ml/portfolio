import { useState, useEffect } from 'react'
import Filters from './components/Filters'
import CardStack from './components/CardStack';

const Fifa = () => {

  const [filterDataYear, setfilterDataYear] = useState(""); // YEAR
  const getFilterArgYear = (filterDataYear) => {setfilterDataYear(filterDataYear);}

  const [filterDataClub, setfilterDataClub] = useState(""); // CLUB
  const getFilterArgClub = (filterDataClub) => {setfilterDataClub(filterDataClub);}

  const [playerData, setPlayerData] = useState([{}]);
  useEffect(() => {
    fetch(`/query?year__eql=${filterDataYear}&club_name__eql=${filterDataClub}`).then(
    res => res.json()).then(playerData => {setPlayerData(playerData)})}, [filterDataYear, filterDataClub]);

  return (
    <div className="outer-container">
      <div className="fifa-container">
        <Filters getFilterArgYear={getFilterArgYear} getFilterArgClub={getFilterArgClub} currentData={playerData}/>
        <CardStack playerData={playerData}/>
      </div>
    </div>
  )
}

export default Fifa