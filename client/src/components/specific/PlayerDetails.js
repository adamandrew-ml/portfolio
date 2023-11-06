import React from 'react'

const PlayerDetails = (props) => {
  return (
    <table className="table-minimal">
      <tr>
        <th>Overall ability</th>
        <td>{props.player.overall}</td>
      </tr>
      <tr>
        <th>Potential ability</th>
        <td>{props.player.potential}</td>
      </tr>
      <tr>
        <th>Positions</th>
        <td>{props.player.player_positions}</td>
      </tr>
      <tr>
        <th> Value £m (est)</th>
        <td>£{(props.player.value_eur / 1000000).toFixed(2)}</td>
      </tr>
      <tr>
        <th>Wage £ (est)</th>
        <td>£{(props.player.wage_eur).toLocaleString()}</td>
      </tr>
      <tr>
        <th>Height (cm)</th>
        <td>{props.player.height_cm}</td>
      </tr>
      <tr>
        <th>Weight (kg)</th>
        <td>{props.player.weight_kg}</td>
      </tr>
    </table>
  )
}




export default PlayerDetails