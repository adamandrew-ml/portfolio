import React, { useState, useEffect } from 'react';

const Table = (year) => {


  const this_year = year.year
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`/query?year__eql=${this_year}&club_name__eql=Aston+Villa`).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [this_year]);

  return (
      <div>
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
              (typeof data.Things === "undefined") ? (
                <tr>
                  <td colSpan={11}>Nothing yet</td>
                </tr>
              ) : (
                data.Things.map((thing, i) => (
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
  );
}

export default Table;
