import React from 'react'

const PlayerMain = (props) => {

  return (
    <ul className = "list-vertical" style={{margin: "10px 5px"}}>
      <li><b>{props.player.short_name}</b></li>
      <li style={{fontSize: "10px"}}>{props.player.club_name}</li>
      <li>{props.player.nationality}</li>
    </ul>
  )
}

export default PlayerMain