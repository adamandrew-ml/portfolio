import React from 'react'
import PlayerCard from './PlayerCard';


const CardStack = ({playerData}) => {
  console.log(playerData);
  const player = playerData[1];
  if (playerData.length === 1) {
    return (<p>Nothing</p>)
  } else {
    return (
      <div className="card-stack">
        {playerData.map((player, i) => <PlayerCard player={player}/>)}
      </div>
    )
  }
}

export default CardStack



