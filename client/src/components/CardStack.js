import React from 'react'
import PlayerCard from './PlayerCard';


const CardStack = ({playerData}) => {
  if ((playerData.length === 1) && (!playerData[0].age)) {
    console.log(playerData);
    return (<p>Loading...</p>)
  } else {
    return (
      <div className="card-stack">
        {playerData.slice(0,100).map((player, i) => <PlayerCard key={i} player={player}/>)}
      </div>
    )
  }
}

export default CardStack



