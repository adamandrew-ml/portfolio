import React from 'react'
import PlayerCard from './PlayerCard';


const CardStack = ({playerData}) => {
  if (playerData.length === 1) {
    return (<p>No playersd match search criteria</p>)
  } else {
    return (
      <div className="card-stack">
        {playerData.map((player, i) => <PlayerCard key={i} player={player}/>)}
      </div>
    )
  }
}

export default CardStack



