import { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard';

const CardStack = (props) => {

  if ((props.playerData.length === 1) && (!props.playerData[0].age)) {
    return (<p>Loading...</p>)
  } else {
    return (
      <div className="scroll-container" style={{marginBottom: "50px", justifyContent: "space-evenly", alignContent: "flex-start"}}>
        {props.playerData.slice(0,100).map((player, i) => <PlayerCard key={i} player={player}/>)}
      </div>
    )
  }
}

export default CardStack



