import { useState, useEffect } from 'react'
import Filters from './components/Filters'

const Fifa = () => {

  // YEAR
  const [filterDataYear, setfilterDataYear] = useState(2015);
  const getFilterArgYear = (filterDataYear) => {
    setfilterDataYear(filterDataYear);
  }

  // CLUB
  const [filterDataClub, setfilterDataClub] = useState("Arsenal");
  const getFilterArgClub = (filterDataClub) => {
    setfilterDataClub(filterDataClub);
  }

  const [playerData, setPlayerData] = useState([{}]);
  useEffect(() => {fetch(`/query?year__eql=${filterDataYear}&club_name__eql=${filterDataClub}`).then(res => res.json()).then(playerData => {setPlayerData(playerData)})}, [filterDataYear, filterDataClub]);

  console.log(playerData);

  return (
    <div className="outer-container">
      <div className="fifa-container">
        <Filters getFilterArgYear={getFilterArgYear} getFilterArgClub={getFilterArgClub}/>
        <table className = "mydatatable">
          <thead>
            <tr>
              <th>UniqueID</th>
              <th>PlayerID</th>
              <th>Year</th>
              <th>Name</th>
              <th>Club</th>
              <th>League</th>
              <th>Can Play</th>
              <th>Plays As</th>
              <th>Wage (k/wk)</th>
              <th>Value (m)</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            {
              (typeof playerData.Things === "undefined") ? (
                <tr>
                  <td colSpan={11}>Nothing yet</td>
                </tr>
              ) : (
                playerData.Things.map((thing, i) => (
                  <tr key = {i}>
                    <td>{i}</td>
                    <td>{thing.sofifa_id}</td>
                    <td>{thing.year}</td>
                    <td>{thing.short_name}</td>
                    <td>{thing.club_name}</td>
                    <td>{thing.league_name}</td>
                    <td>{thing.player_positions}</td>
                    <td>{thing.team_position}</td>
                    <td>{thing.wage_eur/1000}</td>
                    <td>{thing.value_eur/1000000}</td>
                    <td>{thing.overall}</td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fifa